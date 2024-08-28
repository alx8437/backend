import Router, {Request, Response} from "express";

export const productRouter = Router();

const products = [{id: 1, title: 'tomato'}, {id: 2, title: 'orange'}];

productRouter.get('/', (req: Request, res: Response) => {
    if (req.query.title) {
        const searchValue = req.query.title.toString();
        res.send(products.filter((item) => item.title.indexOf(searchValue) > -1));
    }
    res.send(products);
})
productRouter.post('/', (req: Request, res: Response) => {
    const newProduct = {
        id: +new Date().getTime(),
        title: req.body.title
    }

    products.push(newProduct);

    res.status(201).send(newProduct);
})
productRouter.get('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const product = products.find(item => item.id === +id)

    if (product) {
        res.send(product);
    } else {
        res.sendStatus(404);
    }

})
productRouter.put('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const product = products.find(item => item.id === +id)

    if (product) {
        product.title = req.body.title
        res.send(product);
    } else {
        res.sendStatus(404);
    }

})
productRouter.delete('/:id', (req: Request, res: Response) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === +req.params.id) {
            products.splice(i, 1);
            res.sendStatus(204);
        }
    }
    res.sendStatus(404);
})

