import React, { FC, useState } from 'react';
import styles from "./header.module.scss"
import Image from 'next/image'
import Search from "../search/Search";
import { useQueryClient } from "react-query";
import Link from 'next/link';
import { useMyContext } from "../../context/MainAppContext";

const Header: FC = () => {

  const { changePage } = useMyContext()

  const queryClient = useQueryClient()

  const [rotate, setRotate] = useState(false);

  const animate = () => {
    setRotate(true);
    setTimeout(() => setRotate(false), 500);
  }

  return (
    <div className={`${styles.header} container`}>
      <div className={styles.logo}>
        <Link href={"/1"}>
          <h1 onClick={() => changePage(1) }>Список новостей</h1>
        </Link>
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