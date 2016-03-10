/**
 * @author Lcf.vs
 * @license Copyright MIT 2016
 * @repo https://github.com/Lcfvs/htmlize
 * @module lib/element/classList
 */

void function() {
    'use strict';
    
    var pattern,
        classList,
        get,
        set,
        add,
        remove;
    
    pattern = /\s+/;
    
    classList = {
        get: function () {
            var element,
                classList;
            
            element = this;
            classList = Object.create(null);
            
            classList.add = function(name) {
                var classList,
                    classes,
                    index;
                
                classList = this;
                classes = get(element);
                index = classes.indexOf(name);
                
                if (index > -1) {
                    return classList;
                }
                
                add(element, classes, name);
                
                return classList;
            };
            
            classList.remove = function(name) {
                var classList,
                    classes,
                    index;
                
                classList = this;
                classes = get(element);
                index = classes.indexOf(name);
                
                if (index === -1) {
                    return classList;
                }
                
                remove(element, classes, index);
                
                return classList;
            };
            
            classList.contains = function(name) {
                var classList,
                    classes,
                    index;
                
                classList = this;
                classes = get(element);
                index = classes.indexOf(name);
                
                return index > -1;
            };
            
            classList.toggle = function(name) {
                var classList,
                    classes,
                    index;
                
                classList = this;
                classes = getClasses(element);
                index = classes.indexOf(name);
                
                if (index > -1) {
                    remove(element, classes, index);
                    
                    return classList;
                }
                
                add(element, classes, name);
                
                return classList;
            };
        }
    };
    
    get = function(element) {
        return (element.getAttribute('class') || '').split(pattern);
    };
    
    set = function(element, classes) {
        element.setAttribute('class', classes.join(' '));
    };
    
    add = function(element, classes, name) {
        classes.push(name);
        set(element, classes);
    };
    
    remove = function(element, classes, index) {
        classes.splice(index, 1);
        set(element, classes);
    };
    
    module.exports = classList;
}();