import * as express from 'express';

const app = express();
const port = 8080;

export const startServer = async () => {
    app.listen(port);
    console.log(`Server listening on http://localhost:${port}`);
    console.log(`Press ctrl + c to start`);
};