const { Router } = require('express')
const contacts = require('../controllers/contact-controller')
const contact = Router()

contact.get('/', contacts.getAllContacts)

contact.post('/:id', contacts.getContact)

module.exports = contact;