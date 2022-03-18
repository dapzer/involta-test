import React, { FC } from 'react';
import styles from "./news-card.module.scss"
import BigContent from "./BigContent";
import SmallContent from "./SmallContent";
import { MosNewsType } from "../../types/mosNewsType";
import { NewsType } from "../../types/newsType";

interface Props{
  column: string;
  post: NewsType;
}

const NewsCard: FC<Props> = ({column, post}) => {

  const size = column == "small"

  return (
    <div className={ size ? `${styles.newsCard} ${styles.bigCard}` : styles.newsCard}>
      {size ? <BigContent post={post} /> : <SmallContent post={post} /> }

      <div className={styles.footer}>
        <a href={post.link} target="_blank" rel="noreferrer">
          { post.link && new URL(post.link).hostname }
        </a>
        <p>{new Date(post.date).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default NewsCard;