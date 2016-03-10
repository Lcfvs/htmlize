/**
 * @author Lcf.vs
 * @license Copyright MIT 2016
 * @repo https://github.com/Lcfvs/htmlize
 * @module lib/common/arrayize
 */

void function () {
    'use strict';

    var arrayize;

    arrayize = function(nodeList) {
        var index,
            length,
            results;

        index = 0;
        length = nodeList.length;
        results = [];

        for (;index < length;index += 1) {
            results.push(nodeList[index]);
        }

        return results;
    };

    module.exports = arrayize;
}();