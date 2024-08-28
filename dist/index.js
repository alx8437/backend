"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const product_router_1 = require("./routers/product-router");
const addresses_router_1 = require("./routers/addresses-router");
const parserMiddleWare = (0, body_parser_1.default)();
// create app
const app = (0, express_1.default)();
app.use(parserMiddleWare);
const port = process.env.PORT || 5000;
// Routers
app.use('/products', product_router_1.productRouter);
app.use('/addresses', addresses_router_1.addressesRouter);
// start app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
