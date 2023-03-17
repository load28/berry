import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import styles from './app.module.scss';
import RedirectionPage from "./pages/redirection/RedirectionPage";
import CacheDynamicComponent from "./pages/CacheDynamicComponent";
import Test from "./pages/redirection/Test";


const Root: React.FC = () => {
  return (
    <div className={styles.page}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RedirectionPage/>}/>
          <Route path="/login"  element={<CacheDynamicComponent module={'./LoginPage'}/>}/>
          <Route path="/feed" element={<CacheDynamicComponent module={'./FeedPage'}/>}/>
          <Route path="/test" element={<Test/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Root;
