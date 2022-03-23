import React, { FC, useEffect, useState } from 'react';
import styles from "./Search.module.scss"
import Image from 'next/image'
import { useMyContext } from "../../context/MainAppContext";

const Search: FC = () => {
  const { changeSearch } = useMyContext()

  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      changeSearch(inputValue)
    }, 900)

    return () => clearTimeout(timer)
  }, [inputValue])

  return (
    <div className={styles.search}>
      <input placeholder={"Поиск"} onChange={(e) => setInputValue(e.target.value)} />
      <div className={styles.image}>
        <Image src="/search.svg" width={20} height={20} />
      </div>
    </div>
  );
};

export default Search;