import { generateElements, getLargestPossibleImage } from "./helpers";

export function marquee({tokens, totalAmount = 30, defaultImage = null}) {
  return {
    allTokens: tokens,
    totalAmount: totalAmount < tokens.length ? totalAmount : tokens.length,
    selectedTokens: [],
    selectedToken: undefined,
    init() {
      console.log(10, tokens, defaultImage);
      for (var x = 0; x < totalAmount; x++) {
        const random = Math.floor(Math.random() * this.allTokens.length)
        const token = this.allTokens[random];

        if (defaultImage !== null) {
          this.selectedTokens.push({
            image: defaultImage
          });
        }

        this.selectedTokens.push(token);
        const left = Math.floor(Math.random() * 100);
        const elem = `<div class="${left <= 50 ? 'animate-[marquee-right_50s_linear]' : 'animate-[marquee-left_50s_linear]' } cursor-pointer hover:opacity-40 transition-opacity absolute shadow-card opacity-20 rounded-xl bg-contain" style="background-image: url(${getLargestPossibleImage(token.image, 'thumbnail')}); animation-duration: ${Math.random() * 300 + 100}s; left: ${left}%; top: ${Math.floor(Math.random()*100)}%; width: ${Math.ceil(Math.random() * 2) + 2}rem; aspect-ratio: 1 / 1"></div>`;
        const el = generateElements(elem)
        el[0].addEventListener('click', () => {
          this.changeToken(token);
        })
        this.$refs.container.append(el[0]);
      }
      this.changeToken(this.selectedTokens[0])
    },
    changeToken(token) {
      this.$refs.token.classList.replace('opacity-100', 'opacity-0')
      setTimeout(() => {
        this.selectedToken = token;
        this.$refs.token.classList.replace('opacity-0', 'opacity-100')
      }, 200)
    },
    tokenAnchor: {
      ["x-bind:href"]() {
        let image = getLargestPossibleImage(this.selectedToken.image, 'original')
        return image;
      }
    },
    tokenHolder: {
      ["x-bind:class"]() {
        return {
          "opacity-100": typeof this.selectedToken !== "undefined",
          "translate-y-0": typeof this.selectedToken !== "undefined",
        }
      },
      ["x-bind:style"]() {
        if (typeof this.selectedToken === "undefined") return;

        let image = getLargestPossibleImage(this.selectedToken.image, 'medium')
        const styles = {
          "background-image": `url(${image})`
        };
        styles['aspect-ratio'] = `${this.selectedToken.image.width} / ${this.selectedToken.image.height}`;

        return styles;
      }
    }
  }
}