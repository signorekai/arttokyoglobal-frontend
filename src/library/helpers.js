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