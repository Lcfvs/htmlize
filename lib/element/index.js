/**
 * @author Lcf.vs
 * @license Copyright MIT 2016
 * @repo https://github.com/Lcfvs/htmlize
 * @module lib/element
 */

void function() {
    'use strict';
    
    var element;
    
    element = Object.create(null);
    element.classList = require('./classList');
    element.dataset = require('./dataset');
    element.form = require('./form');
    
    module.exports = element;
}();