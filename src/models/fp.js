let fp = {}

/** The `fp.copyArray` function is creating a copy of an array by using the `slice()` method. This
method returns a new array that contains all the elements from the original array. */
fp.copyArray = (originalArray) => originalArray.slice();

/** The line `fp.copyObject = (originalObject) => Object.assign({}, originalObject);` is defining a
function `copyObject` in the `fp` object. */
fp.copyObject = (originalObject) => Object.assign({}, originalObject);

/** The `fp.addObject` function is adding a new object entity to a copy of the `locals` object. 
 * 
 * @param {object} locals 
 * @param {string} strEntityName 
 * @param {object} entity An empty array or Object
 * @returns 
 */
fp.addObject = (locals, strEntityName, entity) => {
  let localsCopy = fp.copyObject(locals);
  localsCopy[strEntityName] = entity;
  return localsCopy;
};

export default fp;