import './App.css';
import Navbar from './Componunts/navabar/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Componunts/home/Home';
import Login from './Componunts/login/Login';
import Signup from './Componunts/signup/Signup';
import Teacher from './pages/teacher/Teacher'
import Student from './pages/student/Student'
import EditStudent from './Componunts/addstudent/Editstudent';
import Auth from './Componunts/auth/Auth';
import Authlogin from './Componunts/login/Authlogin';
import { useSelector } from 'react-redux'
import { useNavigate, Link, Navigate } from "react-router-dom";
import AuthWrapper from './Componunts/authComponent/authwrapper';

function App() {

  const navigate = useNavigate();
  const auths = useSelector((state) => state.auth)

  return (
    <>
      <Navbar />
      <div>
        <Routes>
            <Route path='/teacher/*' element={<Auth><Teacher /></Auth>} />
            <Route path='/editstudent/:id' element={<Auth><EditStudent /></Auth>} />
            <Route path='/student/*' element={<Auth><Student /></Auth>} />
            <Route path='/' element={<Home />} />
        </Routes>

        <Routes>
          <Route path='/authlogin' element={<Authlogin />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>

        {/* <Routes>
          <Route  path='*' element={<h1>404 Page Not Found</h1>} />
        </Routes> */}
      </div>
          {/* <Routes>
            <Route  path='*' element={<h1>404 Page Not Found</h1>} />
          </Routes> */}


    </>
  );
}

export default App;







        // <Routes>
        //   <Route path='/' element={<Home/>}/>
        //   <Route path='/authlogin' element={<Authlogin/>}/>
        //   <Route path='/signup' element={<Signup/>}/>
        //   <Route path='/teacher/*' element={<Teacher/>}/>
        //   <Route path='/editstudent/:id' element={<EditStudent/>}/>
        //   <Route path='/student/*' element={<Student/>}/>
        //   <Route path='*' element={<h1>404 Page Not Found</h1>}/>
        // </Routes>
