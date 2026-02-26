export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Handle form submissions server-side
    if (url.pathname === '/api/contact' && request.method === 'POST') {
      try {
        const body = await request.json();

        const payload = {
          name: body.name || null,
          email: body.email || null,
          phone: body.phone || null,
          business: body.business || null,
          message: body.message || null,
          source: 'simplworks-website',
        };

        const res = await fetch(env.SUPABASE_URL + '/rest/v1/strategy_call_leads', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            apikey: env.SUPABASE_KEY,
            Authorization: 'Bearer ' + env.SUPABASE_KEY,
            Prefer: 'return=minimal',
          },
          body: JSON.stringify(payload),
        });

        if (res.ok) {
          return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });
        } else {
          return new Response(JSON.stringify({ success: false, error: 'Database error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
          });
        }
      } catch (err) {
        return new Response(JSON.stringify({ success: false, error: 'Server error' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // Everything else: serve static assets
    const response = await env.ASSETS.fetch(request);
    const newResponse = new Response(response.body, response);
    newResponse.headers.set('Cache-Control', 'public, max-age=60, s-maxage=60');
    return newResponse;
  },
};
