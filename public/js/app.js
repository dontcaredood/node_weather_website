console.log("This is sample js code from client side")
const weatherData = document.querySelector('form')
const searchData = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')
const message3 = document.querySelector('#message-3')
const message4 = document.querySelector('#message-4')
const message5 = document.querySelector('#message-5')

weatherData.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = searchData.value
    message1.textContent='Loading...'
    message2.textContent=''
    message3.textContent=''
    message4.textContent=''
    message5.textContent=''

    fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            message1.textContent=data.error
        } else{
            message1.textContent=data.location
            message2.textContent='Forecast :' +data.forecast.desc
            message3.textContent='Current Temperature : '+ data.forecast.currentTemp+' F'
            message4.textContent='Feel Like Temperature : '+ data.forecast.feelLikeTemp+' F'
            message5.textContent='Humidity : '+ data.forecast.humidity
            
            console.log(data)
        }
    })
})

})