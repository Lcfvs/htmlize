/**
 * @author Lcf.vs
 * @license Copyright MIT 2016
 * @repo https://github.com/Lcfvs/htmlize
 * @module lib/common/querySelectorAll
 */

void function() {
    'use strict';
    
    var sizzlify,
        xmldom,
        document,
        NodeList,
        querySelectorAll;
    
    sizzlify = require('sizzlify');
    xmldom = require('xmldom');

    document = new xmldom.DOMParser().parseFromString('<html></html>');
    NodeList = document.getElementsByTagName('*').constructor;

    querySelectorAll = {
        value: function(selector) {
            var node;

            node = this;

            return new NodeList(node, function() {
                return sizzlify(selector, node);
            });
        }
    };
    
    module.exports = querySelectorAll;
}();