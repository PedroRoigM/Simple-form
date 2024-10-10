import { useState } from 'react';

export default function Login({ sendData }){
    const [data, setData] = useState({
        user: "",
        email: ""});
    
    const handleChange = (event, field) => {
        setData({...data, [field]: event.target.value})
    }
    const handleClick = () => {
        sendData(data);
    }
    return(
        <div id='formulario'>
            <p>User    <input type="text" id="user" onChange={event => handleChange(event, 'user')}/></p>
            <p>Email <input type="text" id="psw" onChange={event => handleChange(event, 'email')}/></p>
            <button onClick={handleClick}>Enviar</button>
        </div>
    )
}