import { BigNumber } from "ethers";

export const getPrice = ({
  startDate,
  dynamicStart,
  mintPrice,
}) => {
  var price;

  const bigStartDate = BigNumber.from(startDate);
  const bigMintPrice = BigNumber.from(mintPrice);

  const dateNow = Date.now();
  if (bigStartDate.gt(Math.floor(dateNow/1000)) && (dynamicStart === true) ) {
    price = bigMintPrice;
    console.log("[Dapp] Current Token Price1:", price);
  }
  else if ((bigStartDate.add(3600)).gt(Math.floor(dateNow/1000)) && (dynamicStart === true) ) {
    const multiplier = ((bigStartDate.add(3600)).sub(Math.floor(dateNow/1000))).div(60)
    price = bigMintPrice.mul(multiplier)

    console.log("[Dapp] Current Token Price2:", price);
    console.log("[Dapp] Current Multiplier:", multiplier);
  }
  else {
    price = bigMintPrice;
    console.log("[Dapp] Current Token Price3:", price);
  }

  return price
}