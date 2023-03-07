import React, {Suspense} from "react";
import styles from './feed-page.module.scss';

const FeedPage: React.FC = () => {
  return (
    <Suspense>
      <div className={styles.page}>
        <header className={styles.header}>
          <div>logo</div>
          <div>search</div>
          <div>user</div>
        </header>
        <main className={styles.main}>
          main
        </main>
      </div>
    </Suspense>
  )
}

export default FeedPage;
