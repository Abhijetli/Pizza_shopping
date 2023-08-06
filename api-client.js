// Network call code
import URL from '../utils/constant.js'
async function makeNetworkCall(){
    try{
    const response=await fetch(URL)
    const object=await response.json()
    return object
    }
    catch(err){
        console.log("Some problem in API call",err)
        throw err;
    }
//     const URL='https://gist.githubusercontent.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0/raw/2b682e589ef283f06be42d2799dfa54f57794a6e/Pizza.json'
//     const promise=fetch(URL);  //Assign to thread
//     console.log("Promise is ",promise)
//     promise.then(response=>{
//         console.log("Response is",response)
//         const promise2=response.json();  //Deserialization(json to object)
//         promise2.then(data=>console.log('data is', data)).catch(e=>console.log('json parse error ',e))
//     }).catch(err=>{
//         console.log("Error is ",err)
//     });
//     console.log('Goodbye')
// 
}
export default makeNetworkCall;