"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var react_1 = __importDefault(require("react"));
var ink_1 = require("ink");
var bobeenlee_1 = require("./bobeenlee");
var cli = {
    run: function () {
        (0, ink_1.render)(react_1.default.createElement(bobeenlee_1.BoBeenLee));
    },
};
module.exports = cli;
