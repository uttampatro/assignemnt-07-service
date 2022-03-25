const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const cors = require('cors');

//app config
const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

//Middleware
app.use(
    cors({
        origin: '*',
        credentials: true,
    })
);
app.use(express.json());
app.use(cookieParser());

//DB config
mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
console.log('connected to DB');

//api middleware
app.get('/', function (req, res) {
    res.send('server up and running');
});

//listener
app.listen(port, () => console.log(`Server is up and running on  ${port}`));