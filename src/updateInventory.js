/**
 * Compare and update the inventory stored in a 2D array against
 * a second 2D array of a fresh delivery. Update the current existing
 * inventory item quantities (in arr1). If an item cannot be found,
 * add the new item and quantity into the inventory array. The returned
 * inventory array should be in alphabetical order by item.
 */

/**
 * It will add a new all items from currentItemsList and add the item that
 * are in newItemsList but not in currentItemsList a return into an array
 * @param {Array} currentItemList
 * @param {Array} newItemList
 * @return {Array}
 */
function updateInventory(currentItemsList, newItemsList) {
  const updatedItemsList = [];
  currentItemsList.forEach((currentTtem) => {
    const updateItem = newItemsList.find(
      (newItem) => currentTtem[1] === newItem[1],
    );

    if (updateItem) {
      updatedItemsList.push([currentTtem[0] + updateItem[0], currentTtem[1]]);
    } else {
      updatedItemsList.push(currentTtem);
    }
  });

  newItemsList.forEach((newItem) => {
    const itemDoesnExist = !!currentItemsList.find(
      (currentItem) => newItem[1] === currentItem[1],
    );

    if (!itemDoesnExist) {
      updatedItemsList.push(newItem);
    }
  });

  updatedItemsList.sort((firstItem, secondItem) => {
    return firstItem[1] === secondItem[1]
      ? 0
      : firstItem[1] < secondItem[1]
      ? -1
      : 1;
  });
  return updatedItemsList;
}

module.exports = updateInventory;
