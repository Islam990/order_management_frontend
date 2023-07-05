import { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('eslamhendy990@gmail.com')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState(false);
    const navigate = useNavigate();

    function handleUserEmail(event) {
        setEmail(event.target.value);
    }

    function handleUserPassword(event) {
        setPassword(event.target.value);
    }

    async function submit() {
        if (email === 'eslamhendy990@gmail.com' && password === '123456') {
            setErrorMsg(false)
            navigate('/dashboard')
        } else {
            setErrorMsg(true)
        }
    }

    return (
        <div >
            {errorMsg && <div className='error'>Failed Login, Please check The Hard Coded creditionals In ReadMe File </div>}
            <h1>Time To Login</h1>
            <div className="Login">
                Email Ad : <input type="text" name="email" value={email} onChange={handleUserEmail}></input>
            </div>
            <div className="Login">
                Password : <input type="password" name="password" value={password} onChange={handleUserPassword}></input>
            </div>
            <div className="Login">
                <button type="button" name="login" onClick={submit}>Login</button>
            </div>
        </div>
    );
}

export default Login;