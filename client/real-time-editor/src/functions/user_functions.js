import axios from "axios";

const loginUser = (email,password) => { 
    axios.post("http://localhost:5000/login", {
       email: email, password: password
    }).then((res)=>{
        console.log(res.data.token)
        localStorage.setItem('token',res.data.token)
        axios.defaults.headers.common['Authorization'] = res.data.token;
    }).catch((er)=>{
        console.log(er)
    })
    
}

const registerUser = ({username,email,password}) => {
    console.log(username, email, password)
    axios.post("http://localhost:5000/register", {"name": username, "email": email, "password": password}).then((res)=>{
    if(res.data.success===true){
        // const base = location.href
        window.location.href = "http://localhost:5173/login";
    }    
        console.log('User Registered')
    }).catch((er)=>{
        console.log(er)
    })
}

export  {registerUser,loginUser};