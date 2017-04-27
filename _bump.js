'use strict';

const fs = require('fs');
const version = require('./node_modules/@polymer/polymer/package.json').version;
const current = require('./package.json');
const updated = Object.assign({}, current, { version: version } );

console.log('Current Polymer version:', version);
console.log('Current package.json version:', current.version);

fs.writeFile('./package.json', updated, function(err) {
    if(err) {
        return console.log(err);
    } else {
        return console.log('Succesfully updated package.json version to +', updated.version);
    }
}); 


