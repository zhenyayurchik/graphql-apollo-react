const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('../schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();
const PORT = 3005;
mongoose.connect('mongodb+srv://evgeniyyurchik:mbzhenya@cluster0-q0osp.mongodb.net/graphql', { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}))

const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log('err'))
dbConnection.once('open', () => console.log('done'))

app.listen(PORT, err => {
    err ? console.log(err) : console.log('Server started!')
})