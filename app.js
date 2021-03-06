"use strict";
require('dotenv').config();

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

//path = require('path');

//app.use(express.static(path.join(__dirname)));

Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();

var port = process.env.PORT;
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/dist/home.html');
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map