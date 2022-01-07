const express = require('express')
const bodyParser = require('body-parser')
const mongodb = require('mongodb');


const { connect } = require('./utils/mongoDB')

const postsRoutes = require('./routes/posts')

const app = express()
app.use(bodyParser.json())  


app.set("view engine", "ejs")
app.set("views", "views")
app.use(express.static('./views/css'));


app.use(express.static("public"))
app.use(postsRoutes)

connect((error) => {
    if (error) {
        console.log(error);
    }
    app.listen(3000, () => {
        console.log('Сервер Працуе')
    })
})
