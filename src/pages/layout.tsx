import React, { FC } from 'react';
import Header from "../components/header/Header";

const Layout: FC = ({children}) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;