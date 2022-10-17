import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Auth = ({children,redirect}) => {

    const auths = useSelector((state) =>state.auth)

    const checkUser=localStorage.getItem("auth")

    return auths? children :<Navigate to="/" />

}

export default Auth