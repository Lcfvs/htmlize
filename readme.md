# htmlize
A xmldom extension providing some useful features, on html documents, like in the browser, under the MIT licence

## Install
`npm install htmlize`

## Requirements
Since the ES2015 Proxy isn't actually supported, this module requires to start your app with a `--harmony_proxies` flag

## Usage
```JS
var htmlize,
    document;

htmlize = require('htmlize');

document = htmlize(`<!DOCTYPE html><html><body></body></html>`);
```

## Document features
```JS
document.title
document.body
document.forms
document.images
document.querySelector('selector')
document.querySelectorAll('selector')

// extras 
document.clean()
document.minify()
document.beautify('\t')
```

## Element features
```JS
element.dataset
element.classList
element.form
element.querySelector('selector')
element.querySelectorAll('selector')
```