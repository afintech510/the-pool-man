interface Env {
  SUPABASE_URL: string;
  SUPABASE_ANON_KEY: string;
}

export default {
  async scheduled(_event: ScheduledController, env: Env, ctx: ExecutionContext) {
    ctx.waitUntil(ping(env));
  },
  async fetch(_request: Request, env: Env) {
    await ping(env);
    return new Response("ok");
  },
};

async function ping(env: Env) {
  const res = await fetch(`${env.SUPABASE_URL}/auth/v1/health`, {
    headers: {
      apikey: env.SUPABASE_ANON_KEY,
      Authorization: `Bearer ${env.SUPABASE_ANON_KEY}`,
    },
  });
  console.log(`Supabase keepalive ping: ${res.status}`);
}
