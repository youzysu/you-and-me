import React, { useState } from "react";
import { authService, firebaseInstance } from "fbase";
import { Link } from "react-router-dom"

function Auth() {
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
            await authService.signInWithEmailAndPassword(email, password)
        } catch(err) {
            setError(err.message)
        }
    }
    const socialLoginClick = async (event) => {
        const {
            target: {name},
        } = event;
        let provider;
        if (name === "Google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } 
        await authService.signInWithPopup(provider)
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
                <input type="submit" value="로그인" />
                <br />
                <span>{error}</span>
                <hr />
            </form>
            <div>
                <button onClick={socialLoginClick} name="Google" className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">Google로 로그인</button>
                <span>계정이 없으신가요?
                    <Link to="/signup">가입하기</Link>
                </span>
            </div>
        </div>
    )
}

export default Auth