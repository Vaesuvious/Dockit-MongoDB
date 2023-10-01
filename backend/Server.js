const express = require('express');

const mongoose = require('mongoose');
require('dotenv').config();

const routes = require('./routes/TaskRoute');

const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors());

mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('Mongodb connected!'))
.catch((err) => console.log(err));

app.use('/api', routes);

app.listen(PORT, () => console.log(`Listening on: ${PORT}`));