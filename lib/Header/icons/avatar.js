var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
var Avatar = function (_a) {
    var style = _a.style;
    return React.createElement("svg", { width: '2.375rem', height: '2.375rem', viewBox: '0 0 38 38', version: '1.1', style: style || {} },
        React.createElement("defs", null,
            React.createElement("filter", { x: '-0.5%', y: '-13.3%', width: '101.0%', height: '128.3%', filterUnits: 'objectBoundingBox', id: 'filter-1' },
                React.createElement("feOffset", { dx: '0', dy: '2', in: 'SourceAlpha', result: 'shadowOffsetOuter1' }),
                React.createElement("feGaussianBlur", { stdDeviation: '1', in: 'shadowOffsetOuter1', result: 'shadowBlurOuter1' }),
                React.createElement("feColorMatrix", { values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.05 0', type: 'matrix', in: 'shadowBlurOuter1', result: 'shadowMatrixOuter1' }),
                React.createElement("feMerge", null,
                    React.createElement("feMergeNode", { in: 'shadowMatrixOuter1' }),
                    React.createElement("feMergeNode", { in: 'SourceGraphic' })))),
        React.createElement("g", __assign({}, { id: 'Page-1', stroke: 'none', 'strokeWidth': '1', fill: 'none', 'fillRule': 'evenodd' }),
            React.createElement("g", { id: 'Campaign-2', transform: 'translate(-1543.000000, -16.000000)' },
                React.createElement("g", { id: 'Group-2', filter: 'url(#filter-1)' },
                    React.createElement("g", { id: 'User', transform: 'translate(1412.000000, 10.000000)' },
                        React.createElement("g", { id: 'Photo', transform: 'translate(130.000000, 0.000000)' },
                            React.createElement("path", { d: 'M19.6666667,6 C10.4666667,6 3,13.4666667 3,22.6666667 C3,31.8666667 10.4666667,39.3333333 19.6666667,39.3333333 C28.8666667,39.3333333 36.3333333,31.8666667 36.3333333,22.6666667 C36.3333333,13.4666667 28.8666667,6 19.6666667,6 L19.6666667,6 Z M19.6666667,11 C22.4333333,11 24.6666667,13.2333333 24.6666667,16 C24.6666667,18.7666667 22.4333333,21 19.6666667,21 C16.9,21 14.6666667,18.7666667 14.6666667,16 C14.6666667,13.2333333 16.9,11 19.6666667,11 L19.6666667,11 Z M19.6666667,34.6666667 C15.5,34.6666667 11.8166667,32.5333333 9.66666667,29.3 C9.71666667,25.9833333 16.3333333,24.1666667 19.6666667,24.1666667 C22.9833333,24.1666667 29.6166667,25.9833333 29.6666667,29.3 C27.5166667,32.5333333 23.8333333,34.6666667 19.6666667,34.6666667 L19.6666667,34.6666667 Z', id: 'Shape', fill: '#FFFFFF' }),
                            React.createElement("polygon", { id: 'Shape', opacity: '0.429999977', points: '0 0 40 0 40 40 0 40' })))))));
};
export default Avatar;
