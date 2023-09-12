import { toast } from "react-toastify"
import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, MAKE_REQUEST, UPDATE_USER } from "./ActionType"
import axios from "axios"
export const makeRequest=()=>{
    return{
        type:MAKE_REQUEST
    }
    
}

export const failRequest=(err)=>{
    return{
        type:FAIL_REQUEST,
        payload:err
    }
}

export const getUserList=(data)=>{
    return{
        type:GET_USER_LIST,
        payload:data
    }
}

export const deleteUser=()=>{
    return{
        type:DELETE_USER
    }
}

export const addUser=(data)=>{
    return{
        type:ADD_USER
    }
}

export const updateUser=()=>{
    return{
        type:UPDATE_USER
    }
}

export const fetchUserList=()=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        setTimeout(()=>{

        },2000);
      axios.get('http://localhost:8000/users').then(res=>{
            const userlist = res.data;
            dispatch(getUserList(userlist));
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}

export const removeUser=(code)=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        axios.delete('http://localhost:8000/users/'+code).then(res=>{
            dispatch(deleteUser());
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}

export const functionAddUser=(data)=>{
    return(dispatch)=>{
        dispatch(makeRequest());
        axios.post('http://localhost:8000/users',data).then(res=>{
            dispatch(addUser());
            toast.success('User Added Successfully');
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}

export const functionUpdateUser=(data,code)=>{
return(dispatch)=>{
    dispatch(makeRequest());
    axios.put('http://localhost:8000/user/'+code,data).then(res=>{
        dispatch(updateUser());
        toast.success('Update User Successfully');
    }).catch(err=>{
        dispatch(failRequest(err.message))
    })
}
}