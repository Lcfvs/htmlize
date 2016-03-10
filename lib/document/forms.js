/**
 * @author Lcf.vs
 * @license Copyright MIT 2016
 * @repo https://github.com/Lcfvs/htmlize
 * @module lib/document/forms
 */

void function() {
    'use strict';
    
    var forms;
    
    forms = {
        get: function () {
            return this.querySelectorAll('form');
        }
    };
    
    module.exports = forms;
}();