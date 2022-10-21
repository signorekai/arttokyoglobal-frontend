import { ethers } from "ethers";
import { object, string, number } from "yup"
import { Alchemy } from "alchemy-sdk"

export async function post({request}) {
  if (request.headers.get("Content-Type") === 'application/json') {
    const body = await request.json();

    const schema = object({
      contractAddress: string().required(),
      wallet: string().required(),
      value: number().required(),
      ABI: string().required(),
    })

    const valid = schema.isValidSync(body)

    if (!valid) {
      return new Response(JSON.stringify({
        success: false,
        error: "invalid fields"
      }), { 
        status: 400,
        headers: { "Content-Type": "application/json" }
      })
    }

    const { contractAddress, wallet, value, ABI } = body;
    const alchemy = new Alchemy({
      apiKey: import.meta.env.ALCHEMY_API_KEY,
      network: import.meta.env.ETH_NETWORK,
    })

    const provider = await alchemy.config.getProvider();
    const contract = new ethers.Contract(contractAddress, JSON.parse(ABI), provider)
    const owner = await contract.owner();

    try {

      const estimation = await alchemy.core.estimateGas({
        to: owner,
        from: wallet,
        value,
        data: "0xa0712d68",
      })

      return new Response(JSON.stringify({
        success: true,
        cost: estimation.toNumber(),
      }), { 
        status: 200,
        headers: { "Content-Type": "application/json" }
      })

    } catch (err) {
      console.log(err);
      return new Response(JSON.stringify({
        success: false,
      }), { 
        status: 400,
        headers: { "Content-Type": "application/json" }
      })
    }
  }
  return new Response(null, {status: 400})
}