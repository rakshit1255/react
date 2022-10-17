import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar'
import Sidebar from './component/sidebar/Sidebar'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import PostPaginating from './pages/PostPaginating/PostPaginating'
import ToDo from './component/todo/ToDo'
import TodoPage from './pages/todos/TodoPage';
import Home from './pages/home/Home'

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="Nav">
      <Navbar/>
    </div>

    <div className='main_section'>
      <div className='left_sidebar'>
        <Sidebar/>
      </div>
      <div className='right_section'>
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='posts' element={<PostPaginating/>}/>
            <Route path='ToDo' element={<ToDo/>}/>
            <Route path='ToDoss' element={<TodoPage/>}/>
            <Route path='*' element={<h1>404 Page Not Found</h1>}/>
      </Routes>
      </div>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
