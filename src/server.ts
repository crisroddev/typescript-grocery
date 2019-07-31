import * as express from 'express';

// Imports Errors
import { errorHandler, notFoundError} from './middlewares/errors.middlewares'

// Imports Routes
import { router as groceriesRoutes } from './controllers/groceries.routes';


const app = express();

app.get('/', (req, res, ) => {
    res.json({hello: 'world'});
})

app.use(notFoundError);
app.use(errorHandler);
app.use('/api/groceries', groceriesRoutes);

export const server = async () => {
    await app.listen(process.env.PORT);
    console.log(`Server started at http://localhost:${process.env.PORT}`);
    console.log(`Press Ctrl+C to quit`);
  };