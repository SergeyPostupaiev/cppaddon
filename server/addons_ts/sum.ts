interface AddonClass {
  sum(): number;
}

const addon: AddonClass = require('../build/Release/addon');
export default addon;
