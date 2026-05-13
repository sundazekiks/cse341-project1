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
    },
    UpdateContact: async (id, payload) => {
        const db = await dbContacts();
        const data = await db.findOneAndUpdate({ _id: id }, { $set: payload }, { returnOriginal: false });
        return data;
    },
    CreateContact: async (payload) => {
        const db = await dbContacts();
        const data = await db.insertOne(payload);
        return data
    },
    DeleteContact: async (id) => {
        try {
            const db = await dbContacts();
            const data = await db.findOneAndDelete({ _id: id });
            return data;
        }
        catch (err) {
            console.error(err);
            return null;
        }
    }
}

module.exports = service;