import fetch from 'node-fetch';

export async function get({params}) {
  const { id } = params;
  const response = await fetch(`${import.meta.env.STRAPI_API}/api/collections/${id}/data/4c590453-68e8-49a5-b94b-3aababb9e5e2`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.API_TOKEN}`,
      },
  })
  let body = {};
  if (response.ok) {
    body = {
      success: true,
    }
  }

  return new Response(JSON.stringify( body ), {
    status: response.status,
    headers: {
      "Content-type": "application/json"
    }
  })
}