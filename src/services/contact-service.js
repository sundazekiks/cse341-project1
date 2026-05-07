const { getDb, dbContacts } = require('../db/mongodb')

const service = {
    GetAllContacts: async () => {
        const db = await dbContacts()
        const data = await db.find().toArray()
        return data
    },
    // get a contact by its id
    GetContact: async (id) => {
        const db = await dbContacts();
        const data = await db.findOne(id);
        return data;
    }
}

module.exports = service;