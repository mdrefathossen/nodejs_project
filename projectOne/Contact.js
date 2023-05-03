// const {Schema,model} = require('mongoose');

// const contactSchema = new Schema({
//     name: {
//         type: String,
//         required : true,
//         trim:true,
//         minlength: 2,
//         maxlenght: 30
//     },
//     email: {
//         type: String,
//         required : true,
//         trim:true
//     },
//     phone:{
//         type: String,
//         required : true,
//         trim:true,
        
//         minlength: 9,
//         maxlenght: 14
//     },
// })
// const Contact = model('Contact',contactSchema);
// module.exports = Contact;
const {Schema,model} = require('mongoose')

const contactSchema = new Schema({
    name: {
        type: String,
        required : true,
        trim:true,
        minlength: 2,
        maxlenght: 30
    },
    email: {
        type: String,
        required : true,
        trim:true
    },
    phone:{
        type: String,
        required : true,
        trim:true,
        
        minlength: 9,
        maxlenght: 14
    },
})

const Contact = model('Contact',contactSchema);
module.exports = Contact