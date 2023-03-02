import React from "react";
import styles from './App.module.scss';

// @ts-ignore
const LoginPage = React.lazy(() => import("ui/LoginPage"));

const Root: React.FC = () => {
  return (
    // <LoginPage/>
    <main>
      <div className={styles.page}>
        <input type="text"/>
        <input type="password"/>
        <button>Login</button>
      </div>
    </main>
  );
};

export default Root;
