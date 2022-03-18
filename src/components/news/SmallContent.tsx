import React, { FC } from 'react';
import styles from "./small-content.module.scss"
import { MosNewsType } from "../../types/mosNewsType";
import { NewsType } from "../../types/newsType";

interface Props {
  post: NewsType;
}

const SmallContent: FC<Props> = ({post}) => {
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

export default SmallContent;