import addon from './addons_ts/sum';

console.time('c++');
console.log(addon.sum());
console.timeEnd('c++');
