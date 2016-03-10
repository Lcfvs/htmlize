/**
 * @author Lcf.vs
 * @license Copyright MIT 2016
 * @repo https://github.com/Lcfvs/htmlize
 * @module lib/document/title
 */

void function() {
    'use strict';
    
    var title;
    
    title = {
        get: function () {
            var element;

            element = this.getElementsByTagName('title')[0];

            return element.textContent;
        },
        set: function (value) {
            var element,
                textNode;

            element = this.getElementsByTagName('title')[0];
            textNode = element.firstChild;

            if (textNode) {
                return textNode.nodeValue = value;
            }

            textNode = this.createTextNode(value);

            element.appendChild(textNode);
        }
    };
    
    module.exports = title;
}();