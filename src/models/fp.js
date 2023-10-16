let fp = {}

fp.copyArray = (originalArray) => originalArray.slice();

fp.copyObject = (originalObject) => Object.assign({}, originalObject);

fp.addObject = (locals, strObjName, objEntity) => {
  let localCopy = fp.copyObject(locals);
  localCopy[strObjName] = objEntity;
  return localCopy;
};

export default fp;