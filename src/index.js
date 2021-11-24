const express = require('express')
require('./db/mongoose')
const User = require('./models/user')

const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')

app.use((req, res, next) => {
    next()
})

app.use(cors())
app.use(express.json()) 

app.post('/users', async (req, res) => {
    req.body.CreationDate = Date.now()
    const user = new User(req.body)

    try{
        await user.save()
        res.status(201).send(user)
    } catch(e) {
        res.status(500).send(e)
    }
})

app.get('/users', async (req, res) => {
    try {
        const user = await User.find({})
        
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})

app.get('/users/:FirstName', async (req, res) => {
    const name = req.params.FirstName

    try {
        const user = await User.find({FirstName: name})
        if(!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})

app.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)
        if(!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})

app.patch('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})

        if(!user){
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})

app.patch('/users/activation/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})

        if(!user){
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})