const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());

mongoose.connect('mongodb://thehulk:The32Hulk@ds239029.mlab.com:39029/tsk-books');
mongoose.connection.once('open', () => {
    console.log('DB connected');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, ()=>{
    console.log('listening :4000 --');
});