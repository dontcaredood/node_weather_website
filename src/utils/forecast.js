const request = require('request')

const forecast =(latitude,longitude,callback)=>{
    const url ='http://api.weatherstack.com/current?access_key=20430a0ce6b719800c9be682af4e810a&query='+encodeURIComponent(latitude)+','+ encodeURIComponent(longitude)+'&units=f'
    request({url, json : true},(error,{body} = {})=>{
        if (error){
            callback('Unable to connect to Weather server. Check your internet connection',undefined)
        }else if(body.error){
            callback('Please enter valid address to find weather.',undefined)
        } else {
            callback(undefined,body.current.weather_descriptions+". It is currently "+body.current.temperature+" degrees, but feels like "+body.current.feelslike+" degrees.")
   }
    })
}

module.exports= forecast