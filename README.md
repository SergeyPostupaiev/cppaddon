# Cpp addon typescript integration

To build cpp addon node-gyp must be installed globally from npm <br/>
```
npm i -g node-gyp
```
node-gyp requires <br/>

1. Python v3.6, v3.7, v3.8, or v3.9
2. make
3. A proper C/C++ compiler toolchain

To integrate addon create `binding.gyp` file with the following structure <br/>

```
{
  "targets": [
    {
      "target_name": "addon_name",
      "sources": [ "path_to_addon" ]
    }
  ]
}
```
To be able to use addon it is necessary to make a build using node-gyp <br/>

```
node-gyp configure build
```

Then add interfaces to addon object <br>

```
interface Addon {}

const addon: Addon = require('../build/Release/addon');
export default addon;
```

Then it is possible to import addon in the other files

```
import addon from 'path_to_default_export_addon';

```
