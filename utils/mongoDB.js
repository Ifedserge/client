const mongodb = require('mongodb')
const url = 'mongodb+srv://qwerty:q1w1e1@cluster0.qk3nc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const client = new mongodb.MongoClient(url);
let base;

const connect = (callback) => {
    client.connect()
    .then((client) =>{
        base = client.db();
        console.log('База на связи')
        callback()
    })
    .catch((error) => {
        callback(error)
    })
}

const getDb = () => base;
exports.getDb = getDb;
exports.connect = connect
