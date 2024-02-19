import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//scss 불러오기
import "./assets/scss/style.scss";

//createRoot() 메소드를 사용하여 렌더링할 Root(최상위) 컨테이너를 생성
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
);