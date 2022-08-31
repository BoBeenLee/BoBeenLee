"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoBeenLee = void 0;
var react_1 = __importDefault(require("react"));
var ink_1 = require("ink");
var BoBeenLee = function () {
    return (react_1.default.createElement(ink_1.Box, { margin: 1, padding: 2, flexDirection: "column" },
        react_1.default.createElement(ink_1.Box, { marginBottom: 1, alignItems: "center" },
            react_1.default.createElement(ink_1.Text, { color: "cyan" }, "Hello, "),
            react_1.default.createElement(ink_1.Text, { color: "cyanBright" }, "I'm "),
            react_1.default.createElement(ink_1.Text, { bold: true, color: "white", backgroundColor: "blue" },
                " ",
                "BoBeenLee",
                " ")),
        react_1.default.createElement(ink_1.Box, { marginBottom: 1, flexDirection: "column" },
            react_1.default.createElement(ink_1.Text, { color: "grey" }, "Front-End Engineer"),
            react_1.default.createElement(ink_1.Text, { color: "grey" }, "Thinking about React, Typescript and Misc development.")),
        react_1.default.createElement(ink_1.Box, { flexDirection: "column", marginBottom: 1 },
            react_1.default.createElement(ink_1.Text, null,
                react_1.default.createElement(ink_1.Text, { backgroundColor: "whiteBright", color: "black", underline: false },
                    "  ",
                    "GitHub",
                    " "),
                react_1.default.createElement(ink_1.Text, { underline: true }, " https://github.com/BoBeenLee")),
            react_1.default.createElement(ink_1.Text, null,
                react_1.default.createElement(ink_1.Text, { backgroundColor: "whiteBright", color: "black", underline: false },
                    "Homepage",
                    " "),
                react_1.default.createElement(ink_1.Text, { underline: true }, " https://bbl-nx.vercel.app")))));
};
exports.BoBeenLee = BoBeenLee;
