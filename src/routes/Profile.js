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
            <button onClick={onLogoutClick}>๋ก๊ทธ์์</button>
        </div>
    )
}

export default Profile