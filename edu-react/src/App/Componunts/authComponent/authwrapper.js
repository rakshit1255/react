import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {Outlet, Navigate} from 'react-router-dom'

const AuthWrapper = ()=>{

    const auths = useSelector((state) => state.auth)

    const [auth, setAuth] = useState(auths)

    // useEffect(() => setAuth(auths),[])

    return <>{auth?<Outlet/>:<Navigate  to='/'/>}</>

}

export default AuthWrapper