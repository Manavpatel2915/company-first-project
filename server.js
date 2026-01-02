const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv  = require('dotenv');
const cookieParser = require('cookie-parser');
dotenv.config();

const app = express();

app.use(cors({
    origin : true,
    credentials : true,
}));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended : true}));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




