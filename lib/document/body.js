/**
 * @author Lcf.vs
 * @license Copyright MIT 2016
 * @repo https://github.com/Lcfvs/htmlize
 * @module lib/document/body
 */

void function() {
    'use strict';
    
    var body;
    
    body = {
        get: function () {
            return this.getElementsByTagName('body')[0];
        }
    };
    
    module.exports = body;
}();