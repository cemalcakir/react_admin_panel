import './App.css';
import React, {useState} from 'react'
import LoginForm from './components/LoginForm';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostList from './components/PostList';
import PostCreate from './components/PostCreate';
import PostEdit from './components/PostEdit';
import Cal from './components/Calendar/Calendar';
import Map from './components/Map/Map';
import {Route, BrowserRouter, Switch} from "react-router-dom";

function App() {
  const adminUser = {
    name: "admin",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    
    if(details.name === adminUser.name && details.password === adminUser.password) {
      console.log("Logged in");
      setUser({
        name: details.name,
        password: details.password
      });
    } else {
      console.log("Kullanıcı Adı veya Şifre Doğru Değil");
      setError("Kullanıcı Adı veya Şifre Doğru Değil");
    }
  }

  return (
    <div className="App">
      {(user.name === adminUser.name) ? (
        <div className="welcome">
          <Admin dataProvider={restProvider('http://localhost:3000')}>
            <Resource name='posts' list={PostList} create={PostCreate} edit={PostEdit}></Resource>
          </Admin>
          <Cal name="calendar"></Cal>
          <Map></Map>
        </div>
      ) :
      (
        <LoginForm Login={Login} error={error}></LoginForm>
      )}
    </div>
  );
}

export default App;
