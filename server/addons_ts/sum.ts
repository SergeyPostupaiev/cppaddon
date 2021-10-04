interface Addon {
  sum(a: number, b: number): number;
}

const addon: Addon = require('../build/Release/addon');
export default addon;
