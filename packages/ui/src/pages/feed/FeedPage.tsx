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
      title: 'Black chicken',
      addr: '삼성로 223번지',
      description: '둘이 먹으면 1만원',
      score: StartValue.FIVE,
    },
    {
      id: '1',
      title: '돼지 스파게티',
      addr: '종로 3가 220-2',
      description: '처음 보는 비주얼',
      score: StartValue.ONE,
    },
  ];

  const prevHandler = () => {
    if (feedViewIndex === 0) {
      return;
    }

    setFeedViewIndex(feedViewIndex - 1);
  }

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
          <div>
            <button type="button" onClick={prevHandler}>Prev</button>
            <button type="button" onClick={nextHandler}>Next</button>
          </div>
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
    <div className={styles.feedCard}
         key={id}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.description}>{score}점</div>
      <div className={styles.address}>{addr}</div>
    </div>
  )
}

export default FeedPage;
