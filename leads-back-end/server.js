import  express  from "express";
import mongoose  from "mongoose";
import Data from './data.js'
import Videos from './dbModel.js'
import cors from "cors"


//app config 
const app = express()
const port = 9000
app.use(cors());

// middlewares
app.use(express.json((req, res, next)=> {
    res.setHeaders('Access-Control-Allow-Origin', '*'),
    res.setHeaders('Access-Control-Allow-Headers', '*')
    next()
}))

//DB config

// const connection_url = "mongodb+srv://MrJones:JXeKpSuJFqEntdVQ@cluster0.iqlmk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

// mongoose.connect(connection_url, { 
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// }) 

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tiktokleadsDB", {
  useNewUrlParser: true,
//   useFindAndModify: false,
});

//api endopoints
app.get('/', (req, res) =>res.status(200).send('hello word'))

app.get('/v1/posts', (req, res) =>res.status(200).send(Data))

app.get('/v2/posts', (req,res) =>{
    Videos.find((err, data)=>   {
        if(err){
        res.status(500).send(err)
    } else{
        res.status(201).send(data)
    }
    })
})

app.post('/v2/posts', (req,res)=> {
    //
    const dbVideos = req.body 

    Videos.create(dbVideos, (err, data)=>{
        if(err){
            res.status(500).send(err)
        } else{
            res.status(201).send(data)
        }
    })
})

//listen 
app.listen(port, ()=> console.log(`listening on localhost: ${port}`))

