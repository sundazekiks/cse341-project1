const service = require('../services/contact-service')
const { ObjectId } = require('mongodb')

// Get all contacts from db
const getAllContacts = async (req, res) => {
    // #swagger.description = 'Get all contacts from the database'
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
    // #swagger.description = 'Get a single contact by its id'
    const id = new ObjectId(req.params.id) // using the ObjectId class to pass into the query
    try {
        const c = await service.GetContact(id)
        res.status(200).json({ c })
    } catch (err) {
        console.error(err)
    }
}

const createContact = async (req, res) => {
    // #swagger.description = 'Create a new contact'
    const { firstName, lastName, email, favoriteColor, birthday } = req.body
    try {
        const c = await service.CreateContact({ firstName, lastName, email, favoriteColor, birthday })
        res.status(201).json({ c })
    } catch (err) {
        console.error(err)
    }
}

const updateContact = async (req, res) => {
    // #swagger.description = 'Update an existing contact'
    const id = new ObjectId(req.params.id)
    const { firstName, lastName, email, favoriteColor, birthday } = req.body
    // filter the payload to whats actually being updated, this way we can use the same function for both update and create
    const paylod = { ...(firstName && { firstName }), ...(lastName && { lastName }), ...(email && { email }), ...(favoriteColor && { favoriteColor }), ...(birthday && { birthday }) }
    try {
        const c = await service.UpdateContact(id, paylod)
        res.status(200).json({ cId: c._id })
    } catch (err) {
        console.error(err)
    }
}


module.exports = { getAllContacts, getContact, updateContact, createContact };