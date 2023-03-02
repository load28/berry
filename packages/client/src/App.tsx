import React from "react";

// @ts-ignore
const LoginPage = React.lazy(() => import("ui/LoginPage"));

const Root: React.FC = () => {
  return (
    // <LoginPage/>
    <div>
      <input type="text"/>
      <input type="password"/>
      <button>Login</button>
    </div>
  )
};

export default Root;
