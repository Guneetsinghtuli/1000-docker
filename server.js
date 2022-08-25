const express = require('express')
const os = require('os')
const app = express()

app.get("/",(req,res)=>{
    res.send("Hey I know you, You are " + os.hostname() + " ")
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})