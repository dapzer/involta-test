import React, { FC } from 'react';
import styles from "./news-card.module.scss"
import FullWidthContent from "./FullWidthContent";
import BoxedContent from "./BoxedContent";
import { NewsType } from "../../types/newsType";

interface Props{
  column: string;
  post: NewsType;
}

const NewsCard: FC<Props> = ({column, post}) => {

  const size = column == "boxed"

  return (
    <div className={ size ? `${styles.newsCard} ${styles.bigCard}` : styles.newsCard}>
      {size ? <FullWidthContent post={post} /> : <BoxedContent post={post} /> }

      <div className={styles.footer}>
        <a href={`https://${post.source}`} target="_blank" rel="noreferrer">
          { post.source && post.source}
        </a>

        <p>{new Date(post.date).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default NewsCard;