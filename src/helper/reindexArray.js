export default function reindexArray(arrayOfArrays) {
  const flattedReindexedArray = arrayOfArrays.flat().map((item, index) => {
    const newItem = { ...item };
    newItem.oldId = item.id;
    newItem.id = index;
    return newItem;
  });
  return flattedReindexedArray;
}
