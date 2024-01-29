import { type } from "@testing-library/user-event/dist/type";
import { FAIL_REQUEST,DELETE_USER, MAKE_REQUEST, GET_USER_LIST,ADD_USER } from "./ActionType";
import axios from "axios";
import { toast } from "react-toastify";
export const makeReuest = () => {
    return {
        type: MAKE_REQUEST
    }
}
export const faileReuest = (err) => {
    return {
        type: FAIL_REQUEST,
        payload: err
    }
}
export const getUserList = (data) => {
    return {
        type: GET_USER_LIST,
        payload: data
    }
}

export const deleteUser=()=>{
    return{
        type:DELETE_USER
    }
}
export const addUser=()=>{
    return{
        type:ADD_USER
    }
}
export const FetchUserList = () => {
    return (dispatch) => {
        dispatch(makeReuest());
        axios.get('http://localhost:8000/user').then(res => {
            const userlist = res.data
            dispatch(getUserList(userlist))
        }).catch(err => {
            dispatch(faileReuest(err.mesaage))
        })
    }
}


export const Removeuser=(code)=>{
    return (dispatch)=>{
      dispatch(makeReuest());
      //setTimeout(() => {
        axios.delete('http://localhost:8000/user/'+code).then(res=>{
            dispatch(deleteUser());
          }).catch(err=>{
            dispatch(faileReuest(err.message))
          })
     // }, 2000);
     
    }
}

export const FunctionAddUser=(data)=>{
    return (dispatch)=>{
      dispatch(makeReuest());
      //setTimeout(() => {
        axios.post('http://localhost:8000/user',data).then(res=>{
            dispatch(addUser());
            toast.success('User Added successfully.')
          }).catch(err=>{
            dispatch(faileReuest(err.message))
          })
     // }, 2000);
     
    }
}