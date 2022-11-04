import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
function Register() {
    const [user, setUser] = useState({
        email:'', password:''
    })
    const onChangeInput = e => {
        const{name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try{
            await axios.post('/user/register', {...user})
            localStorage.setItem('First Register', true)
            window.location.href = "/"

        } catch (err){
            alert(err.response.data.msg)
        }
    }
    return (
        <form class="box" onSubmit={registerSubmit}>
        <h1>Register</h1>
        <input type="name" name="name" value={user.name} required placeholder="Name" onChange={onChangeInput}/>
        <input type="email" name="email" value={user.email} required placeholder="Type Your Gmail Address" onChange={onChangeInput}/>
        <input type="password" name="password" required value={user.password} placeholder="password" onChange={onChangeInput}/>
        <button type="submit">Register Now</button>
        <p>If you have account <Link to="/login">Login Now</Link></p>
    </form>
    )
}

export default Register