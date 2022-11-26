import Whitelist from '../../../library/whitelist';
import masterWhitelist from '../../../whitelist.json';

export async function post({params, request}) {
  if (request.headers.get("Content-Type") === 'application/json') {
    const body = await request.json();
    const { address } = params;
    const { slug } = body;

    const whitelistedAddresses = masterWhitelist.hasOwnProperty(slug) ? masterWhitelist[slug] : [];
    const whitelist = new Whitelist(whitelistedAddresses);

    return new Response(JSON.stringify({
      isUserWhitelisted: whitelist.contains(address),
      whitelistProof: whitelist.getProofForAddress(address),
    }))
  }
  return new Response(null, {status: 400})
}