const Contact = require("./Contact");

exports.getAllContact = (req, res) => {
  Contact.find()
    .then((contacts) => {
      res.render("index", { contacts, error: {} });
    })
    .catch((e) => {
      console.log(e);
      res.json({
        message: "error occurred",
      });
    });
};
exports.getSingleContact = (req, res) => {
  let { id } = req.params;
  Contact.findById(id)
    .then((contact) => {
      res.json(contact);
    })
    .catch((e) => {
      console.log(e);
      res.json({
        message: "error occurred",
      });
    });
};
exports.getCreateContact = (req, res) => {
  let { name, email, phone, id } = req.body;
  let error = {};
  if (!name) {
    error.name = "Please Provide a name";
  }
  if (!phone) {
    error.phone = "Please Proviede a number";
  }
  if (!email) {
    error.email = "Pleaase Proviede an Email";
  }
  let isError = Object.keys(error).length > 0;
  console.log(error, isError);
  if (isError) {
    console.log("error succes");
    Contact.find()
      .then((contacts) => {
        console.log(contacts);
        return res.render("index", { contacts, error });
      })
      .catch((e) => {
        console.log(e);
        return res.json({
          message: "error tt occurred",
        });
      });
  }

  if(id){
        Contact.findOneAndUpdate(
                {_id : id},
                {
                    $set: {
                        name,phone,email
                    }
                }
            ).then(() => {
                Contact.find()
                    .then(contacts => {
                        res.render('index',{contacts,error: {}})
                    })
            }).catch(e => {
                console.log(e)
                return res.json({
                    message: "error occurred"
                })
            })
  }else{
    let contact = new Contact({
        name,
        email,
        phone,
      });
    
      contact.save()
        .then((c) => {
            console.log('test')
          Contact.find().then((contacts) => {
            return res.render("index", { contacts, error: {} });
          });
        })
        .catch((e) => {
          console.log(e);
          return res.json({
            message: "error occurred",
          });
        });
  }

  // if(id){
  //     Contact.findOneAndUpdate(
  //         {_id : id},
  //         {
  //             $set: {
  //                 name,phone,email
  //             }
  //         }
  //     ).then(() => {
  //         Contact.find()
  //             .then(contacts => {
  //                 res.render('index',{contacts,error: {}})
  //             })
  //     }).catch(e => {
  //         console.log(e)
  //         return res.json({
  //             message: "error occurred"
  //         })
  //     })

  // }else{
  //     let contact = new Contact({
  //         name,
  //         email,
  //         phone

  //     })

  //     contact.save()
  //         .then(c => {
  //             Contact.find()
  //                 .then(contacts => {
  //                     return res.render('index',{contacts,error: {}})
  //                 })

  //         })
  //         .catch(e => {
  //             console.log(e)
  //             return res.json({
  //                 message: "error occurred"
  //             })
  //         })

  // }
};

exports.updateContact = (req, res) => {
  let { name, email, phone } = req.body;
  let { id } = req.params;
  Contact.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        name,
        email,
        phone,
      },
    },
    { new: true }
  )
    .then((contact) => {
      res.json(contact);
    })
    .catch((e) => {
      console.log(e);
      res.json({
        message: "error occurred",
      });
    });
};
exports.deleteContact = (req, res) => {
  let { id } = req.params;
  Contact.findOneAndDelete({ _id: id })
    .then(() => {
      Contact.find().then((contacts) => {
        res.render("index", { contacts, error: {} });
      });
    })
    .catch((e) => {
      console.log(e);
      res.json({
        message: "error occurred",
      });
    });
};
