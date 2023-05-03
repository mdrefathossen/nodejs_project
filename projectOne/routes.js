const router = require('express').Router()

const {
    getAllContact,
    getSingleContact,
    getCreateContact,
    udateContact,
    deleteContact,
    updateContact
} = require('./controllers')

router.get('/',getAllContact);
router.get('/:id',getSingleContact);
router.post('/',getCreateContact);
router.put('/:id',updateContact);
router.delete('/:id',deleteContact)

module.exports = router