import React, { useState } from "react";

function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChange = (event) => {
        if (event.target.name === "email") setEmail(event.target.value)
        else if (event.target.name === "password") setPassword(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
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
                <input type="submit" value="로그인"/>
            </form>
            <div>
                <button>구글로 계속하기</button>
            </div>
        </div>
    )
}

export default Auth