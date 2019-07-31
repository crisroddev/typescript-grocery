import * as express from 'express';
import { errorHandler, notFoundError} from './middlewares/errors.middlewares'

const app = express();

app.get('/', (req, res, ) => {
    res.json({hello: 'world'});
})

app.use(notFoundError);
app.use(errorHandler);

export const server = async () => {
    await app.listen(process.env.PORT);
    console.log(`Server started at http://localhost:${process.env.PORT}`);
    console.log(`Press Ctrl+C to quit`);
  };