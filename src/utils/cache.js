
const cache = new Map();
export const get = (k) => cache.get(k);
export const set = (k,v) => cache.set(k,v);
