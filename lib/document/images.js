/**
 * @author Lcf.vs
 * @license Copyright MIT 2016
 * @repo https://github.com/Lcfvs/htmlize
 * @module lib/document/images
 */

void function() {
    'use strict';
    
    var images;
    
    images = {
        get: function () {
            return this.querySelectorAll('img');
        }
    };
    
    module.exports = images;
}();