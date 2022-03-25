import React, { FC, useState } from 'react';
import styles from "./header.module.scss"
import Image from 'next/image'
import Search from "../search/Search";
import { useQueryClient } from "react-query";

const Header: FC = () => {

  const queryClient = useQueryClient()

  const [rotate, setRotate] = useState(false);

  const animate = () => {

    // Button begins to shake
    setRotate(true);

    // Buttons stops to shake after 2 seconds
    setTimeout(() => setRotate(false), 500);
  }

  return (
    <div className={`${styles.header} container`}>
      <div className={styles.logo}>
        <h1>Список новостей</h1>
        <button
          className={rotate ? `${styles.rotate}` : ""}
          onClick={async () => {
            await queryClient.invalidateQueries("news"), animate()
          }}>
          <Image className={rotate ? `${styles.rotate}` : ""} src="/refresh.svg" alt={"refresh"} width={20}
                 height={16}/>
        </button>
      </div>

      <Search/>
    </div>
  );
};

export default Header;