const Contact = require('./Contact')

exports.getAllContact = (req, res) => {
    Contact.find()
        .then(contacts => {
            res.json(contacts)

        })
        .catch(e => {
            console.log(e)
            res.json({
                message: "error occurred"
            })
        })

}
exports.getSingleContact = (req, res) => {
    let { id } = req.params;
    Contact.findById(id)
        .then(contact => {
            res.json(contact)

        })
        .catch(e => {
            console.log(e)
            res.json({
                message: "error occurred"
            })
        })


}
exports.getCreateContact = (req, res) => {
    let { name, email, phone } = req.body;
    let contact = new Contact({
        name,
        email,
        phone
    })
    contact.save()
        .then(c => {
            res.json(c)
        })
        .catch(e => {
            console.log(e)
            res.json({
                message: "error occurred"
            })
        })
}

exports.updateContact = (req, res) => {
    let { name, email, phone } = req.body
    let { id } = req.params;
    Contact.findOneAndUpdate(
        { _id: id },
        {
            $set: {
                name, email, phone
            }
        },
        {new: true}

        


    )
    .then(contact => {
        res.json(contact)
    })
    .catch(e => {
        console.log(e)
        res.json({
            message: "error occurred"
        })
    })

}
exports.deleteContact = (req, res) => {
    let {id} = req.params;
    Contact.findOneAndDelete({_id: id})
        .then(contact => {
            res.json(contact)
        })
        .catch(e => {
            console.log(e)
            res.json({
                message: "error occurred"
            })
        })
}