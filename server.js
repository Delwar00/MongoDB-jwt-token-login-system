const express=require('express');
const dotenv=require('dotenv');
const connectDB=require('./config/db');
const app=express();

//environment setup
dotenv.config();
const PORT=process.env.SERVER_PORT;
//db setup
connectDB();

//for express post submit data
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//student route setup
app.use('/api/students',require('./routes/studentRoute'));
app.use('/api/admins',require('./routes/adminRoute'));

//router listerner
app.listen(PORT,()=>{
    console.log(`Our Server is running on ${PORT} port`)
});