import { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../Security/AuthContext";

const Login = () => {

    const [userName, setUserName] = useState('eslamGad')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState(false);
    const navigate = useNavigate();
    const authContect = useAuth()

    function handleUserEmail(event) {
        setUserName(event.target.value);
    }

    function handleUserPassword(event) {
        setPassword(event.target.value);
    }

    async function submit() {
        if (userName === 'eslamGad' && password === '123456') {
            setErrorMsg(false)
            navigate(`/dashboard/${userName}`)
            authContect.setIsAuthentacted(true)
        } else {
            setErrorMsg(true)
        }
    }

    return (
        <div >
            {errorMsg && <div className='error'>Failed Login, Please check The Hard Coded creditionals In ReadMe File </div>}
            <h1>Time To Login</h1>
            <div className="Login">
                Email Ad : <input type="text" name="email" value={userName} onChange={handleUserEmail}></input>
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