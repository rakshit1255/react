import './App.css';
import Header from './compo/header/Header';
import Home from './pages/home/Home';
import { Routes,Route } from "react-router-dom";  
import Login from './compo/login/Login';
import Signup from './compo/signup/Signup';
import UserProfile from './compo/userprofile/UserProfile';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/userprofile/*' element={<UserProfile/>}/>
          <Route path='*' element={<h1>404 Page Not Found</h1>}/>
        </Routes>
    </div>
  );
}

export default App;
