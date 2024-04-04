import express from 'express';
import errorHandler from './http/errorHandler';
import { corsMiddleware } from './middleware';
import { exampleRouter } from './routes';

const app = express();

// Initial middlewares
app .use(corsMiddleware)
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .disable("x-powered-by");

app.use('/example', exampleRouter);

app.use(errorHandler);

export default app;