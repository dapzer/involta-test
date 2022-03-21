import React, { FC } from 'react';
import styles from "./boxed-content.module.scss"
import { NewsType } from "../../types/newsType";

interface Props {
  post: NewsType;
}

const BoxedContent: FC<Props> = ({post}) => {
  return (
    <div className={styles.content}>

      <div>
        <a href={post.link} target="_blank" rel="noreferrer">
          {post.title}
        </a>

        <p>{post.description}</p>

      </div>

      <a href={post.link} target="_blank" rel="noreferrer" className={styles.footerLink}>
        Подробнее
      </a>
    </div>
  );
};

export default BoxedContent;