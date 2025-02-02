import qs from "qs";

export function generateElements(html) {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.children;
}

/**
 * @typedef {'large'|'medium'|'small'|'thumbnail'|'original'} imageSizes
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
  const arrayOfSizes = ['large', 'medium', 'small', 'thumbnail', 'original'];
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

  return url.slice(0, 5) !== 'https' ? `https://${url}` : url;
};

export const fetchFromAPI = async (url, query, debug=false, headers = {}) => {
  if (debug) {
    console.log(`${import.meta.env.API_URL}${url}?${qs.stringify(query)}`)
  }

  return fetch(`${import.meta.env.API_URL}${url}?${qs.stringify(query)}`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.API_TOKEN}`,
      ...headers,
    },
  }).then(r => r.json()).catch(() => ({
    success: false,
  }));
}

export const projectStatusFilters = [
  {
    label: "Currently Minting",
    filters: [["status", "CurrentlyMinting"]],
  },
  {
    label: "Upcoming",
    filters: [["status", "Upcoming"]],
  },
  {
    label: "Whitelist Only",
    filters: [["status", "WhitelistOnly"]],
  },
  {
    label: "Minting Completed",
    filters: [["status", "FinishedMinting"]],
  },
  {
    label: "Minting Paused",
    filters: [["status", "MintingPaused"]],
  },
]

export const projectStatus = {
  CurrentlyMinting: {
    title: "Currently Minting",
    className: "bg-red text-white",
  },
  Upcoming: {
    title: "Upcoming",
    className: "bg-grey-dark text-white",
  },
  MintingPaused: {
    title: "Minting Paused",
    className: "bg-grey-dark text-white",
  },
  FinishedMinting: {
    title: "Minting Completed",
    className: "bg-grey-mid/25 text-white",
  },
  WhitelistOnly: {
    title: "Whitelist Only",
    className: "bg-black text-white",
  },
}