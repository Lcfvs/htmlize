/**
 * @author Lcf.vs
 * @license Copyright MIT 2016
 * @repo https://github.com/Lcfvs/htmlize
 * @module lib/common
 */

void function() {
    'use strict';
    
    var common;
    
    common = Object.create(null);
    common.arrayize = require('./arrayize');
    common.querySelector = require('./querySelector');
    common.querySelectorAll = require('./querySelectorAll');
    
    module.exports = common;
}();