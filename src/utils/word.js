const request = require('request')

const wordSearch =(word,callback)=>{
    const url ='https://api.datamuse.com/words?ml='+word+'&max=6'
    request({url, json : true},(error,{body} = {})=>{
        if(error){
            callback("Error connection")
        }
        else{
            callback(undefined,{
                word1 : body[0].word,
                word2 : body[1].word,
                word3 : body[2].word,
                word4 : body[3].word,
                word5 : body[4].word
            })
        }
    })
}
module.exports= wordSearch

