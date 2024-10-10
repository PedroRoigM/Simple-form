import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Mensaje from './components/Mensaje';
function App() {
  let newUser;
  const [msg, setMsg] = useState('');
  const getData = (newData) => {
    newUser = newData;
    dowload1();
  };
  function dowload1(){
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(data => checkUser(data))
  }
  const checkUser = (data) =>{
    let check = false;
    data.forEach(user => {
      if(user.username == newUser.user)
        if(user.email == newUser.email){
          setMsg(`Bienvenido ${user.username}`);
          check = true;
          return;
        }
      
    });
    if(!check)
      setMsg(`Usuario o contraseña equivocada`);
  }
  return (
    <div className="App">
      <h1>
        Login
      </h1>
      <Login sendData={getData}/>
      <Mensaje msg={msg}/>
    </div>
  );
}

export default App;
