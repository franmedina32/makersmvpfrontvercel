import React, { useState } from 'react'
import Login from './Login'
import { endpoints } from '../resources/endpoints'
import '../styles/styles.css'

const Signup = () => {
    const [userData, setUserData] = useState()
    const [validUser, setValidUser] = useState(false)
    const handleSignup = (e) => {
        e.preventDefault()
        fetch(endpoints.newUser, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
         .then(res => res.json())
         .then(data => {
            setValidUser(true)
         })
         {/*set global context so when returned to login page the inputs are already set with the user data*/}
    }
  return (
    <div>
        {validUser ? <Login/> :
        <div>
            <h2 className='title'>SIGN UP TO BLOCKSAVVY</h2>
            <div className='loginForm'>
                <form  action="submit" onSubmit={handleSignup}>
                    <div>
                        <label>email</label>
                        <input type='email' placeholder='log in with your email' onChange={(e)=> {setUserData({...userData, userEmail: e.target.value})}}/>
                    </div>
                    <div>
                        <label>password</label>
                        <input type='password' placeholder='user password' onChange={(e)=> {setUserData({...userData, password: e.target.value})}}/>
                    </div>
                    <div>
                        <button>SIGN UP</button>
                    </div>
                </form>
            </div>
        </div>}
    </div>
  )
}

export default Signup