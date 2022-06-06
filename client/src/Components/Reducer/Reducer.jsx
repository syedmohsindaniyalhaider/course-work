import React, { useReducer } from "react"


const emailReducer = (state, action) => {
    if (action.type === 'EMAIL_INPUT') {
        return { value: action.payload, isValid: action.payload.includes('@') }
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.includes('@') }
    }
    return { value: '', isValid: false }
}


const Reducer = () => {

    const [email, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: null
    }) // [state,dispatchFunction] = useReducer(reducerFunction,initialState,initFunction)

    const handleEmail = (e) => {
        dispatchEmail({ type: 'EMAIL_INPUT', payload: e.target.value })
    }

    const validateEmail = () => {
        dispatchEmail({ type: 'INPUT_BLUR' })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="text"
                        className={`${email.isValid === false ? 'border-danger' : ''} ${"form-control"}`}
                        value={email.value}
                        onBlur={validateEmail}
                        placeholder="Enter Email"
                        onChange={handleEmail}
                    />
                </div>
                {/* <div className="my-2">
                    <label>Password:</label>
                    <input
                        type="text"
                        // className={`${validPassword ? 'border-danger' : ''} ${"form-control"}`}
                        // value={password}
                        // onBlur={(e) => setValidPassword(e.target.value.trim().length < 6)}
                        placeholder="Enter Password"
                        onChange={handleInput}
                    />
                </div> */}
                <div className="m-2">
                    <button className="btn btn-primary" type="submit">Login</button>
                </div>
            </form>
        </>
    );
}


export default Reducer