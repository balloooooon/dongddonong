import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import GamePage from "./pages/Game/GamePage";
import Recordroom from "./pages/Recordroom/Recordroom";
import LoginLoading from "./components/Login/LoginLoading";
import { useUserContext } from "./contexts/userContext";
import TestPage from "./pages/TestPage";
import DetailPractice from "./pages/Game/DetailPractice";
import DetailGame from "./pages/Game/DetailGame";
import ResultPage from "./pages/ResultPage";

function App() {
  // context 로그인 여부에 따라서 라우팅 접근을 제한한다.
  const { loggedIn } = useUserContext();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/result/:gameId" element={<ResultPage />} />
        <Route
          path="/game"
          element={loggedIn ? <GamePage /> : <Navigate to="/" replace />}
        />
        <Route
          path="/practice/:id"
          element={loggedIn ? <DetailPractice /> : <Navigate to="/" replace />}
        ></Route>
        <Route
          path="/game/:id"
          element={loggedIn ? <DetailGame /> : <Navigate to="/" replace />}
        ></Route>
        <Route
          path="/recordroom"
          element={loggedIn ? <Recordroom /> : <Navigate to="/" replace />}
        />
        <Route path="/oauth/callback/kakao" element={<LoginLoading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
