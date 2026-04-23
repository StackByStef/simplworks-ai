/**
 * POST /api/friction-audit
 *
 * Accepts a Friction Audit request from the Reach Me form, validates it,
 * inserts into the Cortex Supabase `friction_audits` table, and sends a
 * Resend notification to Stephanie.
 *
 * Request body:
 *   { url: string (required), email: string (required), name?: string, message?: string }
 *
 * Response:
 *   200 { ok: true }
 *   400 { error: '...' }  — validation failure
 *   500 { error: '...' }  — database or email failure
 *
 * Env vars (configured in Vercel, encrypted):
 *   SUPABASE_URL           — Cortex Supabase project URL
 *   SUPABASE_ANON_KEY      — anon key (RLS policy allows INSERT from anon)
 *   RESEND_API_KEY         — Resend API key (sends notification email)
 */

import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

function getSupabase() {
  return createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
}

async function sendNotification({ email, website_url, name, message }) {
  if (!process.env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY missing; skipping email notification.');
    return;
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = `
New Friction Audit request from simplworks.ai:

Website URL: ${website_url}
Email: ${email}
Name: ${name || '(not provided)'}
Message: ${message || '(none)'}

Reply to the prospect at: ${email}
  `.trim();

  try {
    await resend.emails.send({
      from: 'SimplWorks <onboarding@resend.dev>',
      to: ['stephanie@simplworks.ai', 'stephaniebelote@outlook.com'],
      replyTo: email,
      subject: `Friction Audit request: ${website_url}`,
      text: body,
    });
  } catch (err) {
    console.error('Resend notification failed:', err);
  }
}

function isValidEmail(value) {
  return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { url, email, name, message } = body || {};

    if (!url || typeof url !== 'string' || url.trim().length === 0) {
      return Response.json({ error: 'Website URL is required.' }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return Response.json({ error: 'A valid email address is required.' }, { status: 400 });
    }

    let normalizedUrl = url.trim();
    if (!/^https?:\/\//i.test(normalizedUrl)) {
      normalizedUrl = 'https://' + normalizedUrl;
    }

    const supabase = getSupabase();
    const { error: dbError } = await supabase.from('friction_audits').insert({
      email: email.trim().toLowerCase(),
      website_url: normalizedUrl,
      name: name?.trim() || null,
      message: message?.trim() || null,
    });

    if (dbError) {
      console.error('Supabase insert error:', dbError);
      return Response.json(
        {
          error:
            'Could not save your request. Try again in a moment, or email stephanie@simplworks.ai directly.',
        },
        { status: 500 }
      );
    }

    // Fire-and-forget email notification — don't block the user if it fails.
    sendNotification({
      email: email.trim().toLowerCase(),
      website_url: normalizedUrl,
      name: name?.trim() || null,
      message: message?.trim() || null,
    }).catch((err) => console.error('Notification error:', err));

    return Response.json({ ok: true });
  } catch (err) {
    console.error('friction-audit route error:', err);
    return Response.json({ error: 'Something went wrong. Try again.' }, { status: 500 });
  }
}
