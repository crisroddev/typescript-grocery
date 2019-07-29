import * as express from 'express';

const app = express();
const port = 8080;

app.get('/', (req, res, ) => {
    res.json({hello: 'world'});
})

export const server = () => {
    app.listen(port);
    console.log(`Server listening on http://localhost:${port}`);
    console.log(`Press ctrl + c to start`);
};