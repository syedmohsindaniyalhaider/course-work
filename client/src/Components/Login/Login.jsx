import React, { useState, useEffect } from "react"

const Logout = ({ onLogout }) => {
    const handleClick = (e) => {
        e.preventDefault();
        onLogout()
    }
    return (
        <>
            <button onClick={(e) => handleClick(e)} className="btn btn-danger my-2">Logout</button>
        </>
    )
}

const Login = ({ onLogin }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validEmail, setValidEmail] = useState()
    const [validPassword, setValidPassword] = useState()

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log("Form Validity")
        }, 500)

        return () => {
            console.log("Cleanup")
            clearTimeout(identifier)
        }
    }, [email, password])

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="my-2">
                    <label>Email:</label>
                    <input type="text"
                        className={`${validEmail ? 'border-danger' : ''} ${"form-control"}`}
                        placeholder="Enter Email" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={(e) => setValidEmail(!e.target.value.includes('@'))} />
                </div>
                <div className="my-2">
                    <label>Password:</label>
                    <input type="text"
                        className={`${validPassword ? 'border-danger' : ''} ${"form-control"}`}
                        placeholder="Enter Password" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={(e) => setValidPassword(e.target.value.trim().length < 6)} />
                </div>
                <div className="my-2">
                    <button className="btn btn-primary" type="submit">Login</button>
                </div>
            </form>
        </>
    );
}


const SignIn = () => {

    const [signInStatus, setSignInstatus] = useState(false)

    useEffect(() => {
        const userLoggedIn = localStorage.getItem('isLoggedIn')
        if (userLoggedIn === '1') {
            setSignInstatus(true)
        }
    }, [])

    const onLoginClick = () => {
        localStorage.setItem('isLoggedIn', '1')
        setSignInstatus(true)
    }
    const onLogoutClick = () => {
        localStorage.removeItem('isLoggedIn')
        setSignInstatus(false)
    }

    return (
        <>
            {!signInStatus && <Login onLogin={onLoginClick} />}
            {signInStatus && <Logout onLogout={onLogoutClick} />}

        </>
    )
}

export default SignIn