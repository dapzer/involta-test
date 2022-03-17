import React, { FC } from 'react';
import styles from "./news-card.module.scss"
import BigContent from "./BigContent";
import SmallContent from "./SmallContent";

interface Props{
  column: string;
}

const NewsCard: FC<Props> = ({column}) => {

  const size = column == "small"

  return (
    <div className={ size ? `${styles.newsCard} ${styles.bigCard}` : styles.newsCard}>
      {size ? <BigContent /> : <SmallContent /> }

      <div className={styles.footer}>
        <a href={"/"} target="_blank" rel="noreferrer">
          www.lenta.ru
        </a>
        <p>01.01.2002</p>
      </div>
    </div>
  );
};

export default NewsCard;