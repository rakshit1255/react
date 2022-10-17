import React from "react";
import Button from "../button/Button";
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/2/2c/OneWeb_Logo.png" alt="" />
                <div className='btn'>
                    <Button name="Logout" />
                </div>
            </div>
        </>
    )
};

export default Navbar;
