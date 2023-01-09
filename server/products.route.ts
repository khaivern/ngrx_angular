import { Request, Response } from 'express';
import { Product } from '../src/models/product';
import DUMMY_DATA from './dummy-data';

let products = Object.values(DUMMY_DATA);
const delay = 0; // how long to wait ?

export function getAllProducts(req: Request, res: Response): void {
    setTimeout(() => {
        res.status(200).json({
            result: products,
        });
    }, delay);
}

export function getProductByID(req: Request, res: Response): void {
    const id = req.params['id'];

    const product = products.find((product) => product.id.toString() === id);

    setTimeout(() => {
        res.status(200).json({ result: product });
    }, delay);
}

export function updateProduct(req: Request, res: Response) {
    console.log(req.body.product);
    const id = req.params['id'],
        { title, price, discount } = req.body.product,
        existingProduct = products.find((p) => p.id === id),
        newProduct = new Product(
            id,
            title,
            `https://via.placeholder.com/264x177?text=${title}`,
            price,
            discount
        );

    products = products.map((product) => {
        if (product.id.toString() === id) {
            return {
                ...existingProduct, // copy existing
                ...newProduct, // overwrite with new
            };
        }
        return product;
    });
    // console.log(updated, Object.keys(updated));

    return setTimeout(() => {
        return res.status(200).json({ result: newProduct });
    }, delay);
}

export function createProduct(req: Request, res: Response) {
    console.log(req.body.product);
    const { title, price, discount } = req.body.product;
    const newProduct = new Product(
        (products.length + 1).toString(),
        title,
        `https://via.placeholder.com/264x177?text=${title}`,
        price,
        discount
    );

    products = [newProduct, ...products];
    console.log(products);
    return setTimeout(() => {
        return res.status(200).json({ result: newProduct });
    }, delay);
}
