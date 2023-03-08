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
  const [feedViewIndex, setFeedViewIndex] = useState<number>(0);

  const list: FeedItem[] = [
    {
      id: '0',
      title: 'title1',
      addr: 'addr1',
      description: 'description1',
      score: StartValue.ONE,
    },
    {
      id: '1',
      title: 'title1',
      addr: 'addr1',
      description: 'description1',
      score: StartValue.TWO,
    }
  ];

  const nextHandler = () => {
    if (list.length - 1 <= feedViewIndex) {
      return;
    }

    setFeedViewIndex(feedViewIndex + 1);
  }


  return (
    <Suspense>
      <div className={styles.page}>
        <header>
          <FeedHeader/>
        </header>
        <main className={styles.main}>
          <FeedCard item={list[feedViewIndex]} />
          <button type="button" onClick={nextHandler}>Next</button>
        </main>
      </div>
    </Suspense>
  )
}

const FeedHeader: React.FC = () => {
  return (
    <div className={styles.header}>
      <div>logo</div>
      <div>search</div>
      <div>user</div>
    </div>
  )
}

const FeedCard: React.FC<{ item: FeedItem }> = ({item}) => {
  const {id, addr, title, score, description} = item;

  return (
    <div key={id}>
      <div>{id}</div>
      <div>{title}</div>
      <div>{addr}</div>
      <div>{description}</div>
      <div>{score}</div>
    </div>
  )
}

export default FeedPage;
