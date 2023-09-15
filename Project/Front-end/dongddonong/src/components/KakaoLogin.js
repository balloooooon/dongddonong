import React from 'react';
import KakaoLoginLogo from "../assets/kakao_login_btn.png";

const KakaoLogin = () => {
  const REST_API_KEY = '4e01b41f45f312031ef4c97ed183fa71'; //REST API KEY
  const REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao'; //Redirect URI
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <>
    <img src={KakaoLoginLogo} alt="Kakao Login Logo" onClick={handleLogin} style={{cursor:'pointer'}}/>
    </>
  );
};

export default KakaoLogin;