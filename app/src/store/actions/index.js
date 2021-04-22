import axios from 'axios'

export const GET_FILMS_SUCCESS = "GET_FILMS_SUCCESS";
export const GET_FILMS_FAILURE = "GET_FILMS_FAILURE";
export const GET_FILMS_LOADING = "GET_FILMS_LOADING";


export const getFilmData = () => {
    return (dispatch) => {
        dispatch({type:GET_FILMS_LOADING})
        axios.get('https://ghibliapi.herokuapp.com/films')
        .then((resp) => {
            dispatch({type:GET_FILMS_SUCCESS, payload:resp.data})
        })
        .catch((err)=> {
            dispatch({type:GET_FILMS_FAILURE, payload:err.message})
        })
    }
}