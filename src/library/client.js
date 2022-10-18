import { BigNumber } from "ethers";
import { getLargestPossibleImage } from "./helpers";

export const getPrice = ({
  mintPrice,
}) => {
  const bigMintPrice = BigNumber.from(mintPrice);
  let price = bigMintPrice;
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