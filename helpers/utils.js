export function isObject(obj) {
    return (obj instanceof Object);
}
export function getTime() {
    return Math.floor(Date.now() / 1000);
}
export function isFunction(func) {
    return (typeof func === 'function');
}
export function handleCallbackOrPromise(callback, err, res) {
    if (err) {
        if (typeof callback === 'function') {
            return callback(err);
        }
        else return Promise.reject(err);
    }
    else {
        if (typeof callback === 'function') {
            return callback(null, res);
        }
        else return Promise.resolve(res);
    }
}