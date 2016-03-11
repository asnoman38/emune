module.exports = function mune(keys) {
  return keys && typeof keys !== 'string' ? (
    Array.isArray(keys) ? keys : Object.keys(keys)
  ).reduce(function (mune, val) {
    mune[val] = val
    return mune
  }, {}) : {}
}
