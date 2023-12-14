"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLabel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./mylabel.css");
var MyLabel = function (_a) {
    var _b = _a.allCaps, allCaps = _b === void 0 ? false : _b, _c = _a.color, color = _c === void 0 ? 'primary' : _c, _d = _a.label, label = _d === void 0 ? 'No Label' : _d, _e = _a.size, size = _e === void 0 ? 'normal' : _e, backgroundColor = _a.backgroundColor;
    return ((0, jsx_runtime_1.jsx)("span", { className: "label ".concat(size, " text-").concat(color), style: { backgroundColor: backgroundColor }, children: allCaps ? label.toLocaleUpperCase() : label }));
};
exports.MyLabel = MyLabel;
