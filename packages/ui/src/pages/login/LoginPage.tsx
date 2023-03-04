import React, {Suspense} from "react";
import styles from './login-page.module.scss';

const LoginPage: React.FC = () => {
  return (
    <Suspense>
      <div className={styles.loginPage}>
        <div>google</div>
        <div>kakao</div>
      </div>
    </Suspense>
  )
}

export default LoginPage;
