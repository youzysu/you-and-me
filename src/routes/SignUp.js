import React, { useState } from "react";
import { authService } from "fbase";
import { Link, useNavigate } from "react-router-dom"

function SignUp() {
    const Navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const onChange = (event) => {
        const {
            target: {name, value},
        } = event;
        if (name === "email") {
            setEmail(value)
        } else if (name === "password") {
            setPassword(value)
        }
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await authService.createUserWithEmailAndPassword(email, password)
        } catch(err) {
            setError(err.message)
        }
        Navigate("/")
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    name="email" 
                    placeholder="이메일"
                    required 
                    value={email} 
                    onChange={onChange} />
                <input
                    type="password" 
                    name="password" 
                    placeholder="비밀번호"
                    required 
                    value={password} 
                    onChange={onChange} />
                <input type="submit" value="가입하기" />
                <br />
                <span>{error}</span>
                <hr />
            </form>
            <div>
                <span>계정이 있으신가요?
                    <Link to="/">로그인</Link>
                </span>
            </div>
        </div>
    )
}

export default SignUp