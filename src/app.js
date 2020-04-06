// The KOA app definition is separated to make it easier to
// write integration tests.

import Koa from 'koa';
import cors from '@koa/cors';

import routes from '$controllers';

// Initialize App
const app = new Koa();

// Middlewares
app.use(cors());

// Routes
app.use(routes);

export default app;
