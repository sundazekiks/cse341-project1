const express = require('express')
const dotenv = require('dotenv');
const { run } = require('./db/mongodb');

dotenv.config()


const PORT = process.env.PORT || 3000;
const app = express()

app.get('/', (req, res) => {
    res.status(200).json({ status: 'server is healthy' })
})

// routes
app.use('/contacts', require('./routes/contact-route'))


async function startServer() {

    try {
        const connectDb = await run(); // connect to db
        app.listen(PORT, () => {
            console.log(`Running on port:${PORT}`)
        })
    } catch (err) {
        console.log(err)
    }
}
startServer()
