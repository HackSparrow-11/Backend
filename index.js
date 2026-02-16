const express = require('express')
require('dotenv').config()
// import express from "express"
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send("Jai bajaarnaigi");
    console.log(req.get('host'))
})
app.get('/twitter', (req, res) => {
    res.send("Hai hello namst ebengaluru Hegidhiri yellaru namste bengaluru ow are you the ")
})

app.get('/login', (req, re) => {
    res.send("You sussefully logged in")
})
app.get('/user', (req, res) => {
    res.send("Hai i am Krithi")
})
app.listen(process.env.PORT, () => {
    console.log(`Examle app listening on port ${process.env.PORT}`)


})
