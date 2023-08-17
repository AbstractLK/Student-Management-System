const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./config/database').connect();

const authRoute = require('./router/auth');
const userRoute = require('./router/users');
const taskRoute = require('./router/tasks');

const app = express();
//app.use(cors());
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000', //frontend URL
    // methods: ['GET', 'POST'], // Specify the HTTP methods you want to allow
    // allowedHeaders: ['Content-Type', 'Authorization'], // Specify the headers you want to allow
}));

//router
app.use('/auth', authRoute);
app.use('/user', userRoute);
app.use('/task', taskRoute);

app.listen(process.env.APP_PORT,()=>{
    console.log(process.env.APP_NAME + ' started at port 3001');
})