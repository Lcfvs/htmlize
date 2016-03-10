/**
 * @author Lcf.vs
 * @license Copyright MIT 2016
 * @repo https://github.com/Lcfvs/htmlize
 * @module lib/common/querySelector
 */

void function() {
    'use strict';
    
    var querySelector;

    querySelector = {
        value: function(selector) {
            return this.querySelectorAll(selector).item(0) || null;
        }
    };
    
    module.exports = querySelector;
}();