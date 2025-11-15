import { useState } from "react"
import Button from "../components/button"
import Input from "../components/input"
import { api } from "../api/api"

const SignUp = () => {
    const [error, setError] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        if (e.target.password.value !== e.target.password1.value) {
            setError("Passwords dont match")
            return
        }

const user = {
    username: e.target.username,
    email: e.target.email,
    password: e.target.password
}

try {
    const data = await api.registerUser(user)
} catch (error) {
    setError(error.message)
    console.error(error)
}

console.log(user);
        
    }
    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1 className="auth-title">
                 |Регистрация  
                </h1>
                {error.length > 0 && <div className="auth-error">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <Input 
                    id="username" 
                    name="username" 
                    type="text" 
                    label="user name" 
                    placeholder="enter name"
                    required
                    />
                    <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    label="email" 
                    placeholder="enter email"
                    required
                    />
                    <Input 
                    id="password" 
                    name="password" 
                    type="password" 
                    label="password" 
                    placeholder="enter password"
                    required
                    />
                    <Input 
                    id="password1" 
                    name="password1" 
                    type="password" 
                    label="password" 
                    placeholder="confirm password"
                    required
                    />
                    <Button>Продолжить</Button>
                    </form>
            </div>
        </div>
    )
}

export default SignUp