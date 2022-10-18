import { ethers } from "ethers";

export async function post({params}) {
  const provider = new ethers.providers.AlchemyProvider(
    import.meta.env.ETH_NETWORK,
    import.meta.env.ALCHEMY_API_KEY
    );
  }