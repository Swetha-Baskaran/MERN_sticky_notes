const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5500;

app.use(express.json());
app.use(cors());
    
//import routes
const TodoItemRoute = require('./routes/todoItems');

//connect to mongodb ..
mongoose.connect(process.env.DB_CONNECT)
    .then(() => console.log("Database connected"))
    .catch(err => console.log(err))

app.use('/', TodoItemRoute);

//connect to server
app.listen(PORT, () => console.log("Server connected"));
