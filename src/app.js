const path = require('path')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const wordSearch = require('./utils/word')
const c_convertor =require('./utils/convertor')

const express = require('express')

const hbs = require('hbs')

// to find the dirname and filename
//console.log(__dirname)
//console.log(path.join(__dirname, '../public'))
//console.log(__filename)

const app = express()

//define paths for express config.
const staticPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

// setup handlebars engine and views location
//hbs for dynamic pages
app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)
// setup static directory to serve
app.use(express.static(staticPath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather Forecast',
        name:'Sandy'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title : 'About Page', name:'Sandy'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help Page',name:'Sandy',
        message : 'This is the page which is used for clearing doubts of the user.'
    })
})

// app.get('',(req, res)=>{
//     res.send('html')
// })

// app.get('/help',(req,res)=>{
//     res.send([{
//         name:"Santhosh",
//         age : 22
//     },{
//         name:"Vyshali",
//         age: 22
//     }])
// })

// app.get('/about',(req,res)=>{
//     res.send('<h2>About Page</h1>')
// })

app.get("/weather",(req,res)=>{
   if (!req.query.address){
       return res.send({
           error:'Please provide valid location.'
       })
   }
   
   geocode(req.query.address,(error,{latitude, location, longitude} = {} )=>{
    if(error){
        return res.send({error})
    }
        forecast(latitude,longitude,(error, forecast_data)=>{
            if(error){
            return res.send({error})
            }             
            res.send({
                forecast : forecast_data,location,
                address: req.query.address
            })
                console.log(forecast_data)
        })
})

})

app.get('/words',(req,res) =>{
    res.render('words',{
        title:'Search Similar Words',
        name:'Sandy'
    })
})

app.get('/wordsearch',(req,res) => {
    if (!req.query.word){
        return res.send({
            error:'Please provide proper word.'
        })
    }
    //res.send(req.query.word)
    wordSearch(req.query.word,(error,data)=>{
    res.send({words : data})
})
})

app.get('/convertor',(req,res)=>{
    res.render('convertor',{
        title:'Currency Convertor',
        name:'Sandy'
    })
})

app.get('/currencyConvertor',(req,res)=>{
    if(!req.query.value)
    { return res.send({
        error:'Error Value'})
    }
    c_convertor(req.query.value,(error,data) => {
        res.send(data)
        //console.log(data.rates.INR)
    })
})

app.get('/products',(req,res)=>{
    //http cant send 2 request at a time.
    //so use return to stop the function instead using  if else
    if(!req.query.search){
        return res.send({
            error:'Please provide search term'
        })
    }
    console.log(req.query.search)
    res.send({
        products:[]
    })
})

app.get('/help/*',(req,res) =>{
    res.render('error',{
        name:'Sandy',
        error_message : 'Article missing'
    })
})
app.get('*',(req,res)=>{
    res.render('error',{
        name:'Sandy',
        error_message: 'Page not found'
    })
})

app.listen(3000, ()=>{
    console.log("server started port : 3000")
})