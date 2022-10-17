import React from 'react'
import './Sidebar.css'
import { Link } from "react-router-dom";


const Sidebar = () => {
  

  return (
      <>
    <div className='sidebar'>
      <Link to="/" style={{ textDecoration: 'none' }}><p>Home</p></Link>
      <Link to="posts" style={{ textDecoration: 'none' }}><p>Posts</p></Link>
      <Link to="ToDo" style={{ textDecoration: 'none' }}><p>To-Do</p></Link>
      <Link to="ToDoss" style={{ textDecoration: 'none' }}><p>To-Do Page</p></Link>
      
    </div>
      </>
  )
}

export default Sidebar