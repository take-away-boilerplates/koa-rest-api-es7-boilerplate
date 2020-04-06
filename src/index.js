import mongoose from 'mongoose';
import Agenda from 'agenda';

import { fetchHackerNews } from '$jobs';

import app from './app';

// Connect with the mongo database
// You can use any other database of your liking, but it is
// very common to use koa.js with mongodb.
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_URL);

console.info('Server is up and running!');
app.listen(4000);
