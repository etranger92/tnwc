/* eslint-disable @typescript-eslint/no-var-requires */

//import hbs from './config/handlebar.js';
//import redisConfig frozm './config/redis.js';
require('dotenv').config();
import path from 'path';
import bodyParser from 'body-parser';
import express = require('express');
//To allow external browser.
import cors from 'cors';
import { home } from './routes/pages/home';
import { register } from './routes/forms/register';
import { googlePlace } from './routes/pages/googleMap';
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '../frontend/src/')));
app.use(express.json());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    }),
);
app.use(home);
app.use(register);
app.use(googlePlace);
app.get('*', function (req, res) {
    res.redirect('/');
});
const areWeInDevelopment = false;
const PORT = areWeInDevelopment ? process.env.PORTDEV : null;
app.listen(PORT, () => {
    console.log('server started on port' + PORT);
});
