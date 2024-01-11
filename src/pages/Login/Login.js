import React from 'react';
import './Login.scss';
import logo1 from './Logo.png';
import logo2 from './logo_wecode.png';
import { useNavigate } from 'react-router';

const Login = () => {
    const navigate = useNavigate();

    const joinBtn = () => {
        navigate('/join');
    };
    return (
        <div className="login">
            <div className="logo">
                <img src={logo1}></img>
                <img src={logo2}></img>
            </div>
            <div className="email_password">
                <input className="input" placeholder="이메일"></input>
                <input className="input" placeholder="비밀번호"></input>
                <button className="login">로그인</button>
            </div>
            <div className="lowButtons">
                <button onClick={joinBtn} className="btnJoin">
                    회원가입
                </button>
                <div>|</div>
                <button className="btnFind">비밀번호 찾기</button>
            </div>
        </div>
    );
};

export default Login;
