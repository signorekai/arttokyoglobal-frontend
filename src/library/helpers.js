import qs from "qs";

/**
 * @typedef {'large'|'medium'|'small'|'thumbnail'} imageSizes
 */
/**
 *
 * @param {*} imageObj
 * @param {imageSizes} maxSize
 * @param {imageSizes} minSize
 * @returns
 */
 export const getLargestPossibleImage = (
  imageObj,
  maxSize,
  minSize = 'thumbnail',
) => {
  const arrayOfSizes = ['large', 'medium', 'small', 'thumbnail'];
  const starting = arrayOfSizes.indexOf(maxSize);
  const ending = arrayOfSizes.indexOf(minSize);

  let url = imageObj.url;
  if (starting === -1) return false;

  for (let x = starting; x <= ending; x++) {
    if (imageObj.formats && imageObj.formats.hasOwnProperty(arrayOfSizes[x])) {
      url = imageObj.formats[arrayOfSizes[x]].url;
      break;
    }
  }

  return url;
};

export const fetchFromAPI = async (url, query) => {
  return fetch(`${import.meta.env.API_URL}${url}?${qs.stringify(query)}`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.API_TOKEN}`,
    },
  }).then(r => r.json()).catch(() => ({
    success: false,
  }));
}

export const projectStatus = {
  CurrentlyMinting: {
    title: "Currently Minting",
    className: "bg-red text-white",
  },
  MintingPaused: {
    title: "Minting Paused",
    className: "bg-grey-dark text-white",
  },
  FinishedMinting: {
    title: "Minting Completed",
    className: "bg-grey-mid/25 text-white",
  },
}