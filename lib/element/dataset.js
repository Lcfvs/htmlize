/**
 * @author Lcf.vs
 * @license Copyright MIT 2016
 * @repo https://github.com/Lcfvs/htmlize
 * @module lib/element/dataset
 */

void function() {
    'use strict';
    
    var pattern,
        dataset,
        getName;
    
    pattern = /[A-Z]?[a-z]+/g;
    
    dataset = {
        get: function () {
            var element,
                handle,
                traps;
            
            element = this;
            handle = Object.create(null);

            traps = {
                get: function(target, property) {
                    return element.getAttribute(getName(property));
                },
                set: function(target, property, value) {
                    return element.setAttribute(getName(property), value);
                },
                deleteProperty: function(target, property) {
                    return element.removeAttribute(getName(property));
                }
            };

            if (Proxy.create) {
                return Proxy.create(traps, handle);
            }
            
            return new Proxy(handle, traps);
        }
    };
    
    getName = function(property) {
        return 'data-' + property.match(pattern)
            .map(function(value) {
                return value.toLowerCase();
            })
            .join('-');
    };
    
    module.exports = dataset;
}();