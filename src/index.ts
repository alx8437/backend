import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import {productRouter} from "./routers/product-router";
import {addressesRouter} from "./routers/addresses-router";

const parserMiddleWare = bodyParser()

// create app
const app = express();
app.use(parserMiddleWare);


const port = process.env.PORT || 5000;



// Routers
app.use('/products', productRouter)
app.use('/addresses', addressesRouter)

// start app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})