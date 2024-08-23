import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';

const parserMiddleWare = bodyParser()

// create app
const app = express();
app.use(parserMiddleWare);


const port = process.env.PORT || 5000;

const products = [{id: 1, title: 'tomato'}, {id: 2, title: 'orange'}];
const addresses = [{id: 1, value: 'Vitaevo'}, {id:2, value: 'Bulvar'}]

app.get('/products', (req: Request, res: Response) => {
    if (req.query.title) {
        const searchValue = req.query.title.toString();
        res.send(products.filter((item) => item.title.indexOf(searchValue) > -1));
    }
    res.send(products);
})

app.post('/products', (req: Request, res: Response) => {
    const newProduct = {
        id: +new Date().getTime(),
        title: req.body.title
    }

    products.push(newProduct);

    res.status(201).send(newProduct);
})

app.get('/products/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const product = products.find(item => item.id === +id)

    if (product) {
        res.send(product);
    } else {
        res.sendStatus(404);
    }

})

app.put('/products/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const product = products.find(item => item.id === +id)

    if (product) {
        product.title = req.body.title
        res.send(product);
    } else {
        res.sendStatus(404);
    }

})

app.delete('/products/:id', (req: Request, res: Response) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === +req.params.id) {
            products.splice(i, 1);
            res.sendStatus(204);
        }
    }
    res.sendStatus(404);
})

app.get('/addresses', (req: Request, res: Response) => {
    res.send(addresses);
})

app.get('/addresses/:id', (req: Request, res: Response) => {
    const { id } = req.params;

    const address = addresses.find(address => address.id === +id);

    if (address) {
        res.send(address)
    } else {
        res.sendStatus(404);
    }
})


// start app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})