import React, {Suspense} from "react";
import styles from './app.module.scss';
const LoginPage = React.lazy(() => import("ui/LoginPage"));

const Root: React.FC = () => {
  return (
    <div className={styles.page}>
      <Suspense>
        <LoginPage/>
      </Suspense>
    </div>
  );
};

export default Root;
