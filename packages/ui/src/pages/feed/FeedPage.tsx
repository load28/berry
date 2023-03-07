import React, {Suspense, useState} from "react";
import styles from './feed-page.module.scss';

const StartValue = {
  ZERO: 0,
  ONE: 1,
  TWO: 2,
  THREE: 3,
  THUR: 4,
  FIVE: 5,
} as const;

type TStartValue = typeof StartValue[keyof typeof StartValue];

interface FeedItem {
  id: string;
  title: string;
  addr: string;
  description: string;
  score: TStartValue;
}

const FeedPage: React.FC = () => {
  const [page, setPage] = useState<number>(0);

  const nextHandler = () => {
    setPage(page + 1);
  }

  const list: FeedItem[] = [
    {
      id: '1',
      title: 'title1',
      addr: 'addr1',
      description: 'description1',
      score: StartValue.ONE,
    }
  ]


  return (
    <Suspense>
      <div className={styles.page}>
        <header className={styles.header}>
          <div>logo</div>
          <div>search</div>
          <div>user</div>
        </header>
        <main className={styles.main}>
          {
            list.map((item) => (
              <div key={item.id}>
                <div>{item.title}</div>
                <div>{item.addr}</div>
                <div>{item.description}</div>
                <div>{item.score}</div>
              </div>
            ))
          }
          <button type="button" onClick={nextHandler}>Next</button>
        </main>
      </div>
    </Suspense>
  )
}

export default FeedPage;
