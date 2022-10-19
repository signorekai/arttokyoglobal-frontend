import fetch from 'node-fetch';

export async function get({params}) {
  const { address, signature } = params;
  const response = await fetch(`${import.meta.env.STRAPI_API}/webthree-auth/authenticate/${address}/${signature}`)
  let body = {};
  if (response.ok) {
    body = await response.json();
  }

  return new Response(JSON.stringify( body ), {
    status: response.status,
    headers: {
      "Content-type": "application/json"
    }
  })
}