/**
 * @author Lcf.vs
 * @license Copyright MIT 2016
 * @repo https://github.com/Lcfvs/htmlize
 * @module lib/document/beautify
 */

void function() {
    'use strict';

    var arrayize,
        beautify,
        format,
        fill;

    arrayize = require('../common/arrayize');

    beautify = {
        value: function(spacing) {
            var document,
                first,
                next;

            document = this.cloneNode(true).clean();
            first = document.firstChild;

            if (first && first.nodeType === 10) {
                next = first.nextSibling;
                format(next, spacing || '\t', 0);

                return first + '\n' + next;
            }

            format(document, spacing || '\t', 0);

            return arrayize(document.childNodes).join('\n');
        }
    };

    format = function(current, spacing, level) {
        if (current.nodeType !== 1) {
            return;
        }

        arrayize(current.childNodes)
        .forEach(function(node) {
            fill(node, spacing, level);
            format(node, spacing, level + 1);
        });
    };

    fill = function(node, spacing, level) {
        var type,
            name,
            document,
            text;

        type = node.nodeType;
        name = node.nodeName;

        if (type === 3 || name === 'pre' && name === 'textarea') {
            return;
        }

        document = node.ownerDocument;

        text = document.createTextNode('\n' + spacing.repeat(level + 1));
        node.parentNode.insertBefore(text, node);

        if (!node.nextSibling) {
            text = document.createTextNode('\n' + spacing.repeat(level));
            node.parentNode.appendChild(text);
        }
    };

    module.exports = beautify;
}();