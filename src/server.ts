import * as express from 'express';

const app = express();

app.get('/', (req, res, ) => {
    res.json({hello: 'world'});
})

export const server = () => {
    app.listen(process.env.PORT);
    console.log(`Server listening on http://localhost:${process.env.PORT}`);
    console.log(`Press ctrl + c to start`);
};