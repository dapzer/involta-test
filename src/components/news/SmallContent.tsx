import React, { FC } from 'react';
import styles from "./small-content.module.scss"


const SmallContent: FC = () => {
  return (
    <div className={styles.content}>

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

export default SmallContent;