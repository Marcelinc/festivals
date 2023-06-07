const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')
const connectDB = require('./config/db')
require('dotenv').config()
//const schema = require('./schema/schemaFile') //For file data.js
const schema = require('./schema/schemaDB') //For database
const PORT = process.env.SERVER_PORT || 5000


const app = express()

app.use(cors())

//Connect to db
connectDB()

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(PORT,console.log('Server is running'))