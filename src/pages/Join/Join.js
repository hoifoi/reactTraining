import React from 'react';
import './Join.scss';
import backArrow from './backArrow.png';
import { useNavigate } from 'react-router';

const Join = () => {
    const navigate = useNavigate();

    const preBtn = () => {
        navigate('/login');
    };

    return (
        <div className="signUp">
            <div className="header">
                <button className="back_btn" onClick={preBtn}>
                    <img src={backArrow} alt="뒤로가기 버튼" />
                    <div>뒤로</div>
                </button>
            </div>
            <div className="container">
                <div>회원가입</div>
            </div>
            <div className="basicInfo">
                <div className="label">
                    <div className="labelTitle">기본 정보</div>
                    <div className="remark">필수 사항</div>
                </div>
                <input
                    // onChange={}
                    // value={email}
                    className="input email"
                    type="text"
                    placeholder="이메일"
                />
                <input
                // onChange={}
                // value={email}
                className="input email"
                type="text"placeholder="비밀번호" />
                <input placeholder="비밀번호 확인" />
            </div>
        </div>
    );
};

export default Join;
