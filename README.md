# polymer-npm-wrapper
Unofficial wrapper for getting latest version of Polymer from NPM registry.

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

### License
Released under the [Apache 2.0 license](LICENSE).
