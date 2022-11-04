import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
function Login() { 
    const [user, setUser] = useState({
        email:'', password:''
    })
    const onChangeInput = e => {
        const{name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try{
            await axios.post('/user/login', {...user})
            localStorage.setItem('firstlogin', true)
            window.location.href = "/"

        } catch (err){
            alert(err.response.data.msg)
        }
    }
    return (
        <form class="box" onSubmit={loginSubmit}>
            <h1>Login</h1>
            <input type="email" name="email" required value={user.email} placeholder="Email" onChange={onChangeInput}/>
            <input type="password" name="password" required autoComplete="on" user={user.password} placeholder="password"  onChange={onChangeInput}/>
            <button type="submit">Login Now</button>
            <p>If you don't have account <Link to="/register">Register Now</Link></p>
        </form>
    )
}

export default Login
