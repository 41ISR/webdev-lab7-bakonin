import { Navigate, useNavigate } from "react-router-dom"
import { useUserStore } from "../store/useUserStore"
import { useEffect } from "react"

const AuthGuard = ({children}) => {
    const naviagte = useNavigate()
    const {session} = useUserStore()
    useEffect(() => {
        if (!session?.token) Navigate("/Signin")
    }, [])

    if (!session?.token) return <></>

    return (
        children
    )
}

export default AuthGuard