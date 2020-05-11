console.log("This is sample js code from client side")
const wordData = document.querySelector('form')
const search_word = document.querySelector('input')
const result = document.querySelector('#result')

wordData.addEventListener('submit',(e)=>{
    e.preventDefault()
    const word = search_word.value
    result.textContent='Loading...'
fetch('/wordsearch?word='+word).then((response)=>{
    response.json().then((data)=>{
        if(!data){
            result.textContent='Enter proper word'
        }
        result.textContent= ('*'+data.words.word1+' *'+data.words.word2+' *'+data.words.word3+' *'+data.words.word4+' *'+data.words.word5)        
        console.log(data)
    })
})
})