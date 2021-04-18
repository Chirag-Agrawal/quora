import React, { useReducer, useState } from 'react'
import './Register.css';
import Login from './Login'
import { LocalLaundryService } from '@material-ui/icons';



function Register({onRouteChange, loadUser}) {
    const [isRegistered, setIsRegistered] = useState(false);
    const [id, setId] = useState(7);
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [designation, setDesignation] = useState('');
    const [field, setField] = useState('')
    const [password, setPassword] = useState('')
    
   

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id,
                fname: fname,
                lname: lname,
                email: email,
                designation: designation,
                field: field,
                password: password
            })
        })
        .then(response => response.json())
        .then(user => {
            console.log(user)
            if (user) {
                loadUser(user)
                onRouteChange('home');
            }
        })
    }
    return (
        <div className='register'>
        <h2> Register : </h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='firstName'>First Name : </label>
            <input
              type='text'
              name='firstName'
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            <label htmlFor='lastName'>Last Name : </label>
            <input
              type='text'
              name='lastName'
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
            <label htmlFor='email'>Email : </label>
            <input
              type='text'
              name='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor='password'>Password : </label>
            <input
              type='text'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor='designation'>Designation : </label>
            <input
              type='text'
              name='designation'
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
            <label htmlFor='field'>Field : </label>
            <input
              type='text'
              name='field'
              value={field}
              onChange={(e) => setField(e.target.value)}
            />
                <button type='submit'>Register</button>
            </form>
            <Login onRouteChange={onRouteChange} loadUser={loadUser}/>
        </div>
    )
}



export default Register
