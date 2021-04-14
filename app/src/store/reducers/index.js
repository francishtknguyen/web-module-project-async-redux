import {GET_FILMS_FAILURE, GET_FILMS_LOADING, GET_FILMS_SUCCESS} from '../actions'
const initialState = {
    data:[],
    error:'',
    isLoading:false,
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_FILMS_LOADING:
            return{
                ...state,
                isLoading:true,
            }
        case GET_FILMS_FAILURE:
            return{
                ...state,
                error:action.payload,
                isLoading:false
            }
        case GET_FILMS_SUCCESS:
            return{
                ...state,
                data:action.payload,
                error:'',
                isLoading:false
            }
        default:
            return state;
    }
}