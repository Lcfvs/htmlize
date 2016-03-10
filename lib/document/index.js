/**
 * @author Lcf.vs
 * @license Copyright MIT 2016
 * @repo https://github.com/Lcfvs/htmlize
 * @module lib/document
 */

void function() {
    'use strict';
    
    var document;
    
    document = Object.create(null);
    document.body = require('./body');
    document.clean = require('./clean');
    document.forms = require('./forms');
    document.images = require('./images');
    document.beautify = require('./beautify');
    document.minify = require('./minify');
    document.title = require('./title');
    
    module.exports = document;
}();