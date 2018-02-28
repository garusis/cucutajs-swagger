/**
 * Created by garusis on 28/02/18.
 */
const express = require('express');
const v1Routes = require('./api/v1');


const app = express();

app.use('/v1', v1Routes);
app.listen(4000);