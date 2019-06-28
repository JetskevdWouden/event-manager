import React from 'react'

export default function LoginForm(props) {
    //console.log("WHAT ARE MY PROPS?", props)
    return (
        <form onSubmit={props.onSubmit}>
            <br/>
            <label>
                Email:
            <input type='text' name='email' value={props.values.email} onChange={props.onChange} />
            </label>
            <br/>
            <br/>
            <label>
                Password:
            <input type='password' name='password' value={props.values.password} onChange={props.onChange} />
            </label>
            <br/>
            <br/>
            <button type='submit'>LOGIN</button>
        </form>
    )
}