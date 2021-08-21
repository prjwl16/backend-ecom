require('dotenv').config()
const express = require('express')
const  mongoose = require('mongoose')
const cors = require("cors")
const cookieParser = require('cookie-parser')
const app = express()

const authRoutes = require("./routes/auth")
const productRoutes= require("./routes/product")

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true,
    useFindAndModify:false
}).then(()=>{
    console.log("DB connect..!!")
})

console.clear()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use("/api",authRoutes)
app.use("/api",productRoutes)

const port = process.env.PORT || 3000
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`App listening on port ${port}!`))