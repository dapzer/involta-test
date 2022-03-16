import React, { FC } from 'react';
import styles from "./header.module.scss"
import Image from 'next/image'
import Search from "../search/Search";

const Header: FC = () => {
  return (
    <div className={`${styles.header} container`}>
      <div className={styles.logo}>
        <h1>Список новостей</h1>
        <button><Image src="/refresh.svg" alt={"refresh"} width={20} height={16} /></button>
      </div>

      <Search />

    </div>
  );
};

export default Header;