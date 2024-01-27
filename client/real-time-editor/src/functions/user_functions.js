import axios from "axios";
import { Navigate } from "react-router-dom";

const loginUser = (email,password) => { 
    axios.post("http://localhost:5000/register", {
       email: email, password: password
    }).then((res)=>{
        console.log(res.data.token)
        localStorage.setItem('token',res.data.token)
        axios.defaults.headers.common['Authorization'] = res.data.token;
    }).catch((er)=>{
        console.log(er)
    })
    
}

const registerUser = (username,email,password) => {
    axios.post("http://localhost:5000/register", {
        name: username, email: email, password: password
    }).then((res)=>{
        console.log('User Registered')
        if (res.data.success) {
            <Navigate to="/login" replace={true} />
        }
    }).catch((er)=>{
        console.log(er)
    })
}

export  {registerUser,loginUser};