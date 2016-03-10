/**
 * @author Lcf.vs
 * @license Copyright MIT 2016
 * @repo https://github.com/Lcfvs/htmlize
 * @module lib/document/minify
 */

void function() {
    'use strict';

    var minify;

    minify = {
        value: function () {
            return this.cloneNode(true).clean().toString();
        }
    };

    module.exports = minify;
}();