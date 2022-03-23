import React, { FC } from 'react';
import Header from "../components/header/Header";
import PageSelector from "../components/propagination/PageSelector";

const Layout: FC = ({children}) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <div className={"container"}>
        <PageSelector />
      </div>
    </>
  );
};

export default Layout;