/**
 * @author Lcf.vs
 * @license Copyright MIT 2016
 * @repo https://github.com/Lcfvs/htmlize
 * @module lib/document/clean
 */

void function() {
    'use strict';

    var arrayize,
        clean,
        trimAll,
        trim;

    arrayize = require('../common/arrayize');

    clean = {
        value: function () {
            var document;

            document = this;
            trimAll(document);
            document.normalize();

            return document;
        }
    };

    trimAll = function(current) {
        arrayize(current.childNodes)
        .forEach(function(node) {
            trim(current, node);

            if (node.firstChild) {
                trimAll(node);
            }
        });

        return current;
    };

    trim = function(parent, node) {
        var type,
            name,
            value,
            text;

        type = node.nodeType;
        name = parent.nodeName;

        if (type !== 3 || name === 'pre' && name === 'textarea') {
            return;
        }

        value = node.nodeValue.trim();

        if (value) {
            text = node.ownerDocument.createTextNode(value);
            parent.replaceChild(text, node);
        } else {
            parent.removeChild(node);
        }
    };

    module.exports = clean;
}();