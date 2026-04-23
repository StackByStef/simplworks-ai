/**
 * POST /api/friction-audit
 *
 * Accepts either a Friction Audit request or a Build request from the
 * Reach Me section. One endpoint, one table (friction_audit_requests),
 * discriminated by request_type = 'audit' | 'build'.
 *
 * Request body:
 *   {
 *     request_type: 'audit' | 'build'  (required)
 *     name: string                      (required)
 *     email?: string                    (email OR phone required)
 *     phone?: string                    (email OR phone required)
 *     website_url?: string              (required for audit, ignored for build)
 *     business_name?: string            (required for build, ignored for audit)
 *   }
 *
 * Response:
 *   200 { ok: true }
 *   400 { error: '...' }  — validation failure
 *   500 { error: '...' }  — database or email failure
 */

import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

function getSupabase() {
  return createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
}

function contactMethod(email, phone) {
  if (email && phone) return 'both';
  if (email) return 'email';
  if (phone) return 'phone';
  return 'none';
}

function subjectFor(requestType, method, subject) {
  const label = requestType === 'build' ? 'BUILD' : 'AUDIT';
  const methodLabel = method === 'both' ? 'both' : method;
  return `NEW ${label} REQUEST (${methodLabel}): ${subject}`;
}

async function sendNotification(payload) {
  if (!process.env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY missing; skipping email notification.');
    return;
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { request_type, name, email, phone, website_url, business_name } = payload;

  const method = contactMethod(email, phone);
  const subjectSource =
    request_type === 'build' ? business_name : website_url;
  const subject = subjectFor(request_type, method, subjectSource);

  const body = `
${request_type === 'build' ? 'NEW BUILD REQUEST' : 'NEW AUDIT REQUEST'} from simplworks.ai

Name: ${name}
Email: ${email || 'Not provided'}
Phone: ${phone || 'Not provided'}
${request_type === 'audit' ? `Website URL: ${website_url}` : `Business: ${business_name}`}
Request type: ${request_type}
Received: ${new Date().toISOString()}

${email ? `Reply to the prospect at: ${email}` : ''}
  `.trim();

  try {
    await resend.emails.send({
      from: 'SimplWorks <onboarding@resend.dev>',
      to: ['stephanie@simplworks.ai', 'stephaniebelote@outlook.com'],
      replyTo: email || undefined,
      subject,
      text: body,
    });
  } catch (err) {
    console.error('Resend notification failed:', err);
  }
}

function isValidEmail(value) {
  return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function normalizeUrl(raw) {
  const trimmed = raw.trim();
  if (!/^https?:\/\//i.test(trimmed)) return 'https://' + trimmed;
  return trimmed;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      request_type,
      name,
      email: rawEmail,
      phone: rawPhone,
      website_url: rawUrl,
      business_name: rawBiz,
    } = body || {};

    if (request_type !== 'audit' && request_type !== 'build') {
      return Response.json(
        { error: 'Invalid request type.' },
        { status: 400 }
      );
    }

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return Response.json(
        { error: 'Name is required.' },
        { status: 400 }
      );
    }

    const email = rawEmail && typeof rawEmail === 'string' ? rawEmail.trim().toLowerCase() : null;
    const phone = rawPhone && typeof rawPhone === 'string' ? rawPhone.trim() : null;

    if (email && !isValidEmail(email)) {
      return Response.json(
        { error: 'That email address looks off. Double-check and try again.' },
        { status: 400 }
      );
    }

    if (!email && !phone) {
      return Response.json(
        {
          error:
            "One way or the other. Email or phone. Can't reach you with nothing.",
        },
        { status: 400 }
      );
    }

    let website_url = null;
    let business_name = null;

    if (request_type === 'audit') {
      if (!rawUrl || typeof rawUrl !== 'string' || rawUrl.trim().length === 0) {
        return Response.json(
          { error: 'Your website is required.' },
          { status: 400 }
        );
      }
      website_url = normalizeUrl(rawUrl);
    } else {
      if (!rawBiz || typeof rawBiz !== 'string' || rawBiz.trim().length === 0) {
        return Response.json(
          { error: 'Your business name is required.' },
          { status: 400 }
        );
      }
      business_name = rawBiz.trim();
    }

    const supabase = getSupabase();
    const { error: dbError } = await supabase
      .from('friction_audit_requests')
      .insert({
        name: name.trim(),
        email,
        phone,
        website_url,
        business_name,
        request_type,
      });

    if (dbError) {
      console.error('Supabase insert error:', dbError);
      return Response.json(
        {
          error:
            "Something went wrong on my end. Email me at stephanie@simplworks.ai and we'll pick it up from there.",
        },
        { status: 500 }
      );
    }

    sendNotification({
      request_type,
      name: name.trim(),
      email,
      phone,
      website_url,
      business_name,
    }).catch((err) => console.error('Notification error:', err));

    return Response.json({ ok: true });
  } catch (err) {
    console.error('friction-audit route error:', err);
    return Response.json(
      {
        error:
          "Something went wrong on my end. Email me at stephanie@simplworks.ai and we'll pick it up from there.",
      },
      { status: 500 }
    );
  }
}
