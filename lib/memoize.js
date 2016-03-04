/**
 *
 * @param fn
 * @param slot
 * @returns {Function}
 */
export function memoize(fn, slot = null) {
    if (slot != null) {
        return function (obj, ...arg) {
            if (obj.hasOwnProperty(slot)) {
                return obj[slot];
            }
            else {
                var val = fn(obj, ...arg);
                obj[slot] = val;
                return val;
            }
        }
    }
    else {
        var cache = {};
        return function (...arg) {
            if (!cache.hasOwnProperty(arg)) {
                cache[arg] = fn(...arg);
                return cache[arg];
            }
        }
    }
}