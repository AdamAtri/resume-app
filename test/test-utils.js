module.exports.makeDummy = function makeDummy(options = {}) {
  let dummy = { isDummy: true };
  return Object.assign(dummy, options);
};
