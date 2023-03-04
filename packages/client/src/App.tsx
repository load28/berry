import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import styles from './app.module.scss';
import RedirectionPage from "./pages/redirection/RedirectionPage";

// lazy loading component
const LoginPage = React.lazy(() => import("ui/LoginPage"));

const Root: React.FC = () => {
  return (
    <div className={styles.page}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RedirectionPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/feed" element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Root;
