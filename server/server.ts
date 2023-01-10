import * as express from 'express';
import * as cors from 'cors';
import {
    createProduct,
    deleteProductById,
    getAllProducts,
    getProductByID,
    updateProduct,
} from './products.route';

const app: express.Application = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.route('/api/products').get(getAllProducts);

app.route('/api/products/:id').get(getProductByID);

app.route('/api/products').post(createProduct);

app.route('/api/products/:id').put(updateProduct);

app.route('/api/products/:id').delete(deleteProductById);

const httpServer: any = app.listen(8000, () => {
    console.log('Listening on http://localhost:' + httpServer.address().port);
});
