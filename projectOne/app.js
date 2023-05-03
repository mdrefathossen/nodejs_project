const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./routes')


const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// let Schema = mongoose.Schema
// let testSchema = new Schema({
//     name: String,
// })
// let Test = mongoose.model('Test', testSchema)
app.use('/contacts',router)

app.get('/', (req, res) => {
    // let test = new Test({
    //     name: "Refat"
    // })
    // test.save()
    //     .then(t => {
    //         res.json(t)
    //     })
    //     .catch(e => {
    //         console.log(e)
    //         res.status(500).json({
    //             error: "Error Occurred"
    //         })
    //     })
})

const PORT = process.env.port || 8080;
const password = process.env.refatneww
mongoose
    .connect(`mongodb+srv://refatnew:refatneww@cluster0.ahw56ah.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is Running on Port ${PORT}`)
        })
    })
    .catch(e => {
        console.log(e)
    })
