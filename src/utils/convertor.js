const request = require('request')

const c_convertor =(value,callback)=>{
    const url ='https://api.exchangeratesapi.io/latest?base=USD'
    request({url, json : true},(error,{body} = {})=>{
        if(error){
            callback("Error connection")
        }
        else{
            callback(undefined,body)
        }
    })
}
module.exports= c_convertor

