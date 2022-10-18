import { BigNumber } from "ethers";
import { getLargestPossibleImage } from "./helpers";

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

export function imageHelper (imageObj, maxSize, aspectRatio = false) {
  return {
    checkPrefix(string) {
      return string.slice(0, 5) !== 'https' ? `https://${string}` : string;
    },
    image: {
      ["x-bind:src"]() {
        return this.checkPrefix(getLargestPossibleImage(imageObj, maxSize));
      },
      ["x-bind:style"]() {
        const styles = {}

        if (aspectRatio) {
          styles["aspect-ratio"] = `${imageObj.width} / ${imageObj.height}`
        }

        return styles
      }
    },
    backgroundImage: {
      ["x-bind:style"]() {
        let image = this.checkPrefix(getLargestPossibleImage(imageObj, maxSize));

        const styles = {
          "background-image": `url(${image})`
        }

        if (aspectRatio) {
          styles["aspect-ratio"] = `${imageObj.width} / ${imageObj.height}`
        }

        return styles
      }
    }
  }
}