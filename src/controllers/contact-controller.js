const service = require('../services/contact-service')
const { ObjectId } = require('mongodb')

// Get all contacts from db
const getAllContacts = async (req, res) => {

    try {
        // do a service separate from the controller 
        const d = await service.GetAllContacts()
        // return all the contacts from the service
        res.status(200).json({ d })
    } catch (err) {
        console.log(err)
    }
}

const getContact = async (req, res) => {
    const id = new ObjectId(req.params.id) // using the ObjectId class to pass into the query
    try {
        const c = await service.GetContact(id)
        res.status(200).json({ c })
    } catch (err) {
        console.error(err)
    }
}

module.exports = { getAllContacts, getContact };