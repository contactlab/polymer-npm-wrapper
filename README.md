:warning: **This project is no longer mantained**

# polymer-npm-wrapper
Unofficial wrapper for getting Polymer v1.8.1 from Git as NPM dependency and exporting it as ES2015 module.

### How to use
Install with Yarn or NPM client

```
$ yarn add polymer-npm-wrapper
--- or ---
$ npm install polymer-npm-wrapper --save
```

add the Polymer library in your main component file

```html
<link rel="import" href="./node_modules/@polymer/polymer/polymer.html">
```

then in any Javascript class files that requires Polymer you can now do a simple
import

```js
import {Polymer} from "polymer-npm-wrapper";
```

### Known issues
1. Since Polymer isn't defined as an ES2015 module you **have to** to import both the HTML file and the JS module.
2. This package downloads Polymer from the GitHub repo at its latest version, but do not directly downloads all of the dependencies. You may need them if you want to use some of its CLI tools, like WCT.


### License
Released under the [Apache 2.0 license](LICENSE).
