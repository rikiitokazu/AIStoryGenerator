const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    genre: {type:String}, 
    title: {type:String},
    author: {type:String},
    story: {type:Array},
    word_count: {type:Number},
    difficulty: {type:String}
})

const user = new Schema({
    name: {type: String, required:true},
    email: {type: String, required:true},
    password: {type: String, required:true}, 
    uploaded_books: {type: Array}
    
})

const Books = mongoose.model('Books', bookSchema, 'books')
const Users = mongoose.model('Users', user, 'users')

const mySchemas = {'Books': Books, 'Users': Users}

module.exports = mySchemas