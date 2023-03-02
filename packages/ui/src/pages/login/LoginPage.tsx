import React, {Suspense} from "react";

const LoginPage: React.FC = () => {
  return (
    <Suspense>
      <div>
        <input type="text"/>
        <input type="password"/>
        <button>Login</button>
      </div>
    </Suspense>
  )
}

export default LoginPage;
