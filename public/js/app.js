console.log("This is sample js code from client side")
const weatherData = document.querySelector('form')
const searchData = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')

weatherData.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = searchData.value
    message1.textContent='Loading...'
    message2.textContent=''

    fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            message1.textContent=data.error
        } else{
            message1.textContent=data.location
            message2.textContent=data.forecast
        }
    })
})

})