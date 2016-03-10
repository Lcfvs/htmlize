/**
 * @author Lcf.vs
 * @license Copyright MIT 2016
 * @repo https://github.com/Lcfvs/htmlize
 * @module lib/element/form
 */

void function() {
    'use strict';
    
    var children,
        form;
    
    children = ['button', 'fieldset', 'input', 'select', 'textarea'];
    
    form = {
        get: function () {
            var element;
            
            element = this;
            
            if (children.indexOf(element.nodeName) === -1) {
                return;
            }
            
            do {
                element = element.parentNode;
                
                if (element.nodeName.toLowerCase() === 'form') {
                    return element;
                }
            } while(element.parentNode);
        }
    };
    
    module.exports = form;
}();