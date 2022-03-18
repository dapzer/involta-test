import React, { FC } from 'react';
import styles from "./big-content.module.scss";
import Image from "next/image";
import { MosNewsType } from "../../types/mosNewsType";
import { NewsType } from "../../types/newsType";

interface Props {
  post: NewsType;
}

const BigContent: FC<Props> = ({post}) => {
  return (
    <div className={styles.content}>
      <div>
        {post.img && <Image src={post.img} layout={"fill"} objectFit="cover"/>}
      </div>


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

export default BigContent;