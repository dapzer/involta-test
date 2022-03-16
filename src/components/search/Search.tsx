import React, { FC } from 'react';
import styles from "./Search.module.scss"
import Image from 'next/image'

const Search: FC = () => {
  return (
    <div className={styles.search}>
      <input placeholder={"Поиск"} />
      <div className={styles.image}>
        <Image src="/search.svg" width={20} height={20} />
      </div>
    </div>
  );
};

export default Search;