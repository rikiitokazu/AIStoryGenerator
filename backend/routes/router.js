const axios = require('axios');

const express = require('express')
const router = express.Router()
const schemas = require('../models/schemas')
const { ObjectId } = require('mongodb');
require('dotenv/config')

router.post('/user', async (req, res) => {
    const { name, email, password, uploaded_books } = req.body 
    const newUser = new schemas.Users({
        name: name,
        email: email,
        password: password,
        uploaded_books: uploaded_books
    })

    const saveUser = await newUser.save() 
    //make sure await if using save
    if (saveUser) {
        res.send("User successfully created")
    }
    res.end()
})


router.get('/books', async (req, res) => {
    const books = schemas.Books
    try {
        const bookData = await books.find()
        res.json(bookData)

    }
    catch (error) {
        console.log('error')
        res.status(500).json({ error: "failed to get information"})
    } 
})



router.get('/books/genre/:genre', async (req, res) => {
    const genre = req.params.genre
    const books = schemas.Books
    try {
        if (genre === "All") {
            const bookData = await books.find();
            res.json(bookData)
        }
        else {
            const bookData = await books.find({ genre : genre })
            res.json(bookData)
        
        
    }
    }
    catch (error) {
        console.log('error')
        res.status(500).json({ error: "failed to get information"})
    }
})

router.get('/books/ids/:id', async (req, res) => {
    const id = req.params.id
    
    const books = schemas.Books
    try {
        const bookData = await books.find({ _id : new ObjectId(id.toString()) })
        res.json(bookData)  
    }
    catch (error) {
        console.log('error')
        res.status(500).json({ error: "failed to get information"})
    }
})



//Summarizing tool
const fetchSummarizedData = async (formdata) => {
    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    try {
        const response = await axios.post("https://api.meaningcloud.com/summarization-1.0", requestOptions)
        const status = response.status;
        const body = response.data;
        return { status, body }
    } catch (error) {
        throw error;
    }
    
}

router.post('/summarizer', async (req, res) => {
    const content = req.body;
    const formdata = new FormData();
    formdata.append("key", process.env.MC_API);
    formdata.append("txt", content.desc);
    formdata.append("sentences", 2);
    
    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    try {
        const response = await fetch("https://api.meaningcloud.com/summarization-1.0", requestOptions)
        const status =response.status
        const body = await response.json();
    
        console.log(status, body)
        res.status(status).json(body);
    }catch (error) {
        console.log('error', error);
        res.status(500).json({ error: "An error occured"})
    }

})



module.exports = router