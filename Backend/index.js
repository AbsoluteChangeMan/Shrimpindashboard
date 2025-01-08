const express = require('express')
const mongoose = require('mongoose');
const app = express()
const DataRouter = require('./routes/data.routes');
var cors = require('cors');
const env = require('dotenv');
env.config({path: './config/.env'});

app.use(cors());

app.use(express.json());

//hardcoded the url so np
mongoose.connect(process.env.MONGOOSE_URI)
.then(() => {
    console.log("success!!");
    app.listen(5000,() => {
        console.log('poodle')
    });
    
})
.catch((e) => { console.log(e);});

//api routes
app.use("/api/data", DataRouter);


//page routes
//app.use("/", ProductPageRouter); // main page route



