import React, { FC } from 'react';
import styles from "./big-content.module.scss";
import Image from "next/image";

const BigContent: FC = () => {
  return (
    <div className={styles.content}>
      <div>
        <Image src={"/news-preview.jpg"} height={100} width={100} layout={"fill"} objectFit="cover" />
      </div>


      <div>
        <a href={"/"} target="_blank" rel="noreferrer">
          Географическая лаборатория, квест и фестивальная площадка: новые голосования проекта «Активный гражданин»
        </a>

        <p>На каждый участок претендовали в среднем шесть участников. Стоимость одной из сделок выросла в ходе
          аукциона в 26 раз.</p>

      </div>

      <a href={"/"} target="_blank" rel="noreferrer" className={styles.footerLink}>
        Подробнее
      </a>
    </div>
  );
};

export default BigContent;