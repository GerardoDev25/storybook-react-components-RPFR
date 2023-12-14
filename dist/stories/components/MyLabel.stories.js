"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomeBackgroundColor = exports.Tertiary = exports.Secundary = exports.Allcaps = exports.Basic = void 0;
var MyLabel_1 = require("../../components/MyLabel");
var meta = {
    title: 'UI/MyLabel',
    component: MyLabel_1.MyLabel,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select' },
        backgroundColor: { control: 'color' },
        allCaps: {
            control: 'boolean',
            defaultValue: false,
            description: 'this parameter define if the text will be uppercase or normal',
        },
        color: {
            control: 'select',
            type: 'string',
            defaultValue: 'primary',
            description: 'this property define the component color',
        },
    },
};
exports.default = meta;
exports.Basic = {
    args: {
        label: 'hola mundo Basic',
        size: 'normal',
        allCaps: false,
    },
};
exports.Allcaps = {
    args: {
        label: 'hola mundo AllCAps',
        size: 'h1',
        allCaps: true,
    },
};
exports.Secundary = {
    args: {
        label: 'hola mundo secudary',
        size: 'h2',
        color: 'secundary',
    },
};
exports.Tertiary = {
    args: {
        label: 'hola mundo Tertiary',
        size: 'normal',
        color: 'tertiary',
    },
};
exports.CustomeBackgroundColor = {
    args: {
        label: 'hola mundo BackgroundColor',
        size: 'normal',
        color: 'tertiary',
        backgroundColor: 'yellow',
    },
};
