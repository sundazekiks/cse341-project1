const { Router } = require('express')
const contacts = require('../controllers/contact-controller')
const contact = Router()


contact.get('/', contacts.getAllContacts)

contact.get('/:id', contacts.getContact)

contact.post('/', contacts.createContact)

contact.put('/:id', contacts.updateContact)

contact.delete('/:id', contacts.deleteContact)

module.exports = contact;