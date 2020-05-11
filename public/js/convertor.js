console.log("This is sample convertor js code from client side")
const convert = document.querySelector('form')
const first = document.querySelector('input') 
const second = document.querySelector("#valueTwo")
const result = document.querySelector('#converted')

convert.addEventListener('submit',(e)=>{
    e.preventDefault()
    const valueOne = first.value
    const valueTwo = second.value
    result.textContent='Loading...'
    fetch('/currencyConvertor?value='+valueOne,valueTwo).then((response)=>{response.json().then((data)=>{
        if(!data){
           return result.textContent("Please enter proper value")
        }
        const final =JSON.stringify(data.rates)

    result.textContent= final
    //result.textContent=('1'+ valueOne +' is '+valueTwo+''+ data.rates.valueTwo+' rupees')
    console.log(valueOne,valueTwo,result,final)
    })
})
})
