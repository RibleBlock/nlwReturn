import express from 'express';
import { route as routes } from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('HTTP server running.') );
