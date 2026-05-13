const express = require('express')
const dotenv = require('dotenv');
const { run } = require('./db/mongodb');
const cors = require('cors')
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger-output.json')

dotenv.config()


const PORT = process.env.PORT || 3000;
const app = express()




// middeleware

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


// routes
app.use('/contacts', require('./routes/contact-route'))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.get('/', (req, res) => {
    res.status(200).json({ status: 'server is healthy' })
})


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
startServer();
