import Router, {Request, Response} from "express";

export const addressesRouter = Router();

const addresses = [{id: 1, value: 'Vitaevo'}, {id:2, value: 'Bulvar'}]

addressesRouter.get('/', (req: Request, res: Response) => {
    res.send(addresses);
})
addressesRouter.get('/:id', (req: Request, res: Response) => {
    const { id } = req.params;

    const address = addresses.find(address => address.id === +id);

    if (address) {
        res.send(address)
    } else {
        res.sendStatus(404);
    }
})