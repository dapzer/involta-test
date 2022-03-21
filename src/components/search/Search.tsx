import React, { FC } from 'react';
import styles from "./Search.module.scss"
import Image from 'next/image'
import { useMyContext } from "../../context/MyContext";

const Search: FC = () => {
  const { changeSearch } = useMyContext()

  return (
    <div className={styles.search}>
      <input placeholder={"Поиск"} onChange={(e) => changeSearch(e.target.value)} />
      <div className={styles.image}>
        <Image src="/search.svg" width={20} height={20} />
      </div>
    </div>
  );
};

export default Search;