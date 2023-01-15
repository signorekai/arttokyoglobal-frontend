import Whitelist from '../../../library/whitelist';
import masterWhitelist from '../../../whitelist.json';

export async function post({params, request}) {
  if (request.headers.get("Content-Type") === 'application/json') {
    
    const body = await request.json();
    const { address } = params;
    const { slug, id } = body;

    const response = await fetch(`${import.meta.env.STRAPI_API}/api/collections/${id}/whitelist/${address}`, {
    })

    const result = await response.json()

    return new Response(JSON.stringify(result), {
      status: response.status,
      headers: {
        "Content-type": "application/json"
      }
    })
  }
  return new Response(null, {status: 400})
}