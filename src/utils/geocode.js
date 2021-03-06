// const request = require('request')
// const geocode =(address, callback) => {
//     const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoic2FudGhvc2gxODciLCJhIjoiY2s5ZmFnaG5yMDRqdzNua2M2cTRlMG5zYyJ9.qyrzu0QcP39IkvT2XiPV1Q&limit=1'
//     request({url, json : true},(error, response) => {
//         if(error){
//             callback('Connection failed. Check internet connection and retry.',undefined)
//         } else if(response.body.features.length === 0){
//             callback('Unable to find this location.',undefined)
//         } else {
//         callback(undefined,{
//             latitude : response.body.features[0].center[1],
//             longitude: response.body.features[0].center[0],
//             location : response.body.features[0].place_name
//         })}
//     })
// }
// module.exports=geocode


//destructured code
const request = require('request')
const geocode =(address, callback) => {
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoic2FudGhvc2gxODciLCJhIjoiY2s5ZmFnaG5yMDRqdzNua2M2cTRlMG5zYyJ9.qyrzu0QcP39IkvT2XiPV1Q&limit=1'
    request({url, json : true},(error, {body} = {}) => {
        if(error){
            callback('Connection failed. Check internet connection and retry.',undefined)
        } else if(body.features.length === 0){
            callback('Unable to find this location.',undefined)
        } else {
        callback(undefined,{
            latitude : body.features[0].center[1],
            longitude: body.features[0].center[0],
            location : body.features[0].place_name
        })}
    })
}
module.exports=geocode