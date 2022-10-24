import React from "react";
import { authService } from "fbase"
import { useNavigate } from "react-router-dom"

function Profile() {
    const Navigate = useNavigate();
    const onLogoutClick = () => {
        authService.signOut();
        Navigate("/")
    }

    return (
        <div>
            <button onClick={onLogoutClick}>로그아웃</button>
        </div>
    )
}

export default Profile