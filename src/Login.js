import React, {useState} from 'react'

function Login({onRouteChange, loadUser}) {

    const [logInEmail, setLogInEmail] = useState('');
    const [logInPassword, setLogInPassword] = useState('')

    const onSubmitSignIn = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
               email: logInEmail,
               password: logInPassword 
            })
        })
        .then((respone) => respone.json())
        .then((user) => {
            if (user.id) {
                loadUser(user)
                 onRouteChange('home');
            }
        })
    }
    return (
        <div>
            <h2>Log In : </h2>
            <form onSubmit={onSubmitSignIn}>
                <label htmlFor='logInEmail'>Log In: </label>
            <input
              type='text'
              name='logInEmail'
              value={logInEmail}
              onChange={(e) => setLogInEmail(e.target.value)}
            /> 
            <label htmlFor='logInPassword'>Password : </label>
            <input
              type='password'
              name='logInPassword'
              value={logInPassword}
              onChange={(e) => setLogInPassword(e.target.value)}
            /> 
            <button type='submit'>Log In</button>
            </form>
        </div>
    )
}

export default Login
