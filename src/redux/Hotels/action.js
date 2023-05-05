import axios from "axios";

import { GETHOTELS_FAILURE, GETHOTELS_REQUEST, GETHOTELS_SUCCESS } from "./actionType";

export const getHotels =(obj)=> (dispatch) => {
    dispatch({ type: GETHOTELS_REQUEST });
    axios.get(`https://jcrew-hnx4.onrender.com/hotels`,obj).then((res) => {
      dispatch({ type: GETHOTELS_SUCCESS, payload: res.data });
      // console.log(res.data);
    }).catch((err)=>{
      dispatch({type:GETHOTELS_FAILURE})
    })
  };