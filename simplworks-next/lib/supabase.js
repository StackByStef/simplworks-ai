/**
 * Supabase client factory — server-side only.
 *
 * V1 STATUS: Scaffold only. Not called anywhere in V1 because the Reach Me CTA
 * is a mailto link per DC Copy Changes v1.1. This file exists so V2 form wiring
 * can be added without restructuring the project.
 *
 * V2 trigger: ~3 audits/week or when Stephanie prefers structured intake.
 * When V2 ships, add `app/api/friction-audit/route.js` and import `getSupabase` here.
 *
 * Do not expose to the client bundle. Credentials live in server-side env vars
 * (no NEXT_PUBLIC_ prefix) per WEO Guide Form Security.
 */

import { createClient } from '@supabase/supabase-js';

export function getSupabase() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error(
      'Supabase credentials missing. Set SUPABASE_URL and SUPABASE_ANON_KEY in .env.local or Vercel project settings.'
    );
  }

  return createClient(url, key);
}
