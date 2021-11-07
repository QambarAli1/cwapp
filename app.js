const express = require('express');
const app = express();
// const port = 5000;
const PORT = process.env.PORT || 5000
const mongoose = require('mongoose');
const postModel = require('./schema')
var cors = require('cors')
const path = require('path')

app.use(cors(["localhost:5000", "localhost:3000"]))
app.use(express.json())

app.use('/', express.static(path.join(__dirname, 'web/build')))


const db_uri = "mongodb+srv://admin:admin@cluster0.gux0y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(db_uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// app.get('/add',(request,response)=>{
//     postModel.create(
//         {name:"Qambar Ali",email:"qambar@gmail.com",password:"qambar12",number:'03123456789'},
//         (error,data)=>{
//             if(error){
//                 console.log(error.message);
//             }
//             else{
//                 console.log(data);
//                 response.send(`Data Added Successfully`)
//             }
//         })
// })
app.post('/api/v1/profile', (req, res) => {

    console.log(req.body)

    res.send('profile created')

})

mongoose.connection.on('connected',()=>console.log(`Database connected`))
mongoose.connection.on('error',(error)=>console.log(`Mongoose Error ${error.message}`))


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})