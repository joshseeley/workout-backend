require('dotenv').config();
const workoutRoutes = require('./routes/workouts')
const express = require('express');
const mongoose = require('mongoose');


//express app
const app = express()

//midleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)

//connect to db
mongoose.connect(process.env.MONG_URI)
    .then(()=>{
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db, listening on port 4000')
        })

    })
    .catch((error)=>{
        console.log('error')
    })
