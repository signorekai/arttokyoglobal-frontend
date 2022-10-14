import fetch from 'node-fetch';

export async function get({params}) {
  const { address } = params;
  const response = await fetch(`${import.meta.env.STRAPI_API}/webthree-auth/token/${address}`)
  let token;
  if (response.ok) {
    const body = await response.json();
    token = body.token;
  }

  return new Response(token, {
    status: response.status,
  })
}