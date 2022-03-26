import React, { FC, useEffect, useState } from 'react';
import styles from "./Search.module.scss"
import Image from 'next/image'
import { useMyContext } from "../../context/MainAppContext";
import { QueryDefaultValue } from "../../types/QueryDefaultValue";
import { useRouter } from "next/router";

const Search: FC = () => {
  const router = useRouter()
  const { changeSearch } = useMyContext()

  const [inputValue, setInputValue] = useState(router.query.search && router.query.search as string !== QueryDefaultValue.search ? router.query.search as string : '')

  useEffect(() => {
    const timer = setTimeout(() => {
      changeSearch(inputValue !== '' && inputValue != QueryDefaultValue.search ? inputValue : QueryDefaultValue.search)
    }, 900)

    return () => clearTimeout(timer)
  }, [inputValue])

  return (
    <div className={styles.search}>
      <input placeholder={"Поиск"}
             onChange={(e) => setInputValue(e.target.value)}
             defaultValue={router.query.search as string !== QueryDefaultValue.search ? router.query.search : ''}/>
      <div className={styles.image}>
        <Image src="/search.svg" width={20} height={20} />
      </div>
    </div>
  );
};

export default Search;