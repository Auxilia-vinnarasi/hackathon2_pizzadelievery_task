import axios from "axios";

//action name=getAllPizzas,dispatch will be our thunk function

export const getAllPizzas=()=>async dispatch=>{
    //we have to write our asynchronous fn here
//whenever the function is called we have to create one reducer   

dispatch({type:"GET_PIZZAS_REQUEST"})//so whenever the fn called this will be sent it to reducer
//before we call the asynchronous function..install axios
//with the help of axios we can perform api operations

try{
const response=await axios.get("/api/pizzas/getallpizzas")//before typing url we have to add proxy in package.json
console.log(response)
dispatch({type:"GET_PIZZAS_SUCCESS", payload: response.data})//here also i have to send payload as parameter
}
catch(error){
    
    dispatch({type:"GET_PIZZAS_FAILED", payload: error})//here payload is error
}
}
//this is all about creating actions in the getAllPizzas function