export const getAllPizzasReducer=(state={pizzas:[]},action)=>{
//here im having actions here
    switch(action.type)
    {
        //we have to write cases here
        case "GET_PIZZAS_REQUEST" :return {
            //whenever the request is sent we have to create one variable loading
            loading:true,
            ...state
        }
        case "GET_PIZZAS_SUCCESS" :return{
            //whenever the data is received it may be success or failure
            loading:false,//whatever is this the response is sent 
            pizzas : action.payload// we ll get pizzas in action.payload
        }
        case "GET_PIZZAS_FALIED" :return{
            error:action.payload,
            loading:false//request is failed means
        }
        default :return state
    }

}