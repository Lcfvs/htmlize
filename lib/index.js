/**
 * @author Lcf.vs
 * @license Copyright MIT 2016
 * @repo https://github.com/Lcfvs/htmlize
 * @module lib
 */

void function() {
    'use strict';

    var xmldom,
        common,
        document,
        element,
        define,
        getPrototype,
        DOMParser,
        parser,
        source,
        empty,
        htmlize;

    xmldom = require('xmldom');
    common = require('./common');
    document = require('./document');
    element = require('./element');

    define = Object.defineProperty;
    getPrototype = Object.getPrototypeOf;
    DOMParser = xmldom.DOMParser;
    parser = new DOMParser();

    source = '<!DOCTYPE html><html><body></body></html>';
    empty = parser.parseFromString(source, 'text/html');

    void function(prototype) {
        define(prototype, 'body', document.body);
        define(prototype, 'clean', document.clean);
        define(prototype, 'forms', document.forms);
        define(prototype, 'images', document.images);
        define(prototype, 'beautify', document.beautify);
        define(prototype, 'minify', document.minify);
        define(prototype, 'querySelector', common.querySelector);
        define(prototype, 'querySelectorAll', common.querySelectorAll);
        define(prototype, 'title', document.title);
    }(getPrototype(empty));

    void function(prototype) {
        define(prototype, 'classList', element.classList);
        define(prototype, 'dataset', element.dataset);
        define(prototype, 'form', element.form);
        define(prototype, 'querySelector', common.querySelector);
        define(prototype, 'querySelectorAll', common.querySelectorAll);
    }(getPrototype(empty.documentElement));

    htmlize = function(source) {
        return parser
            .parseFromString(source, 'text/html')
            .cloneNode(true);
    };

    module.exports = htmlize;
}();