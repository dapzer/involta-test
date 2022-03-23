import React, { createContext, FC, ReactNode, useContext, useState } from 'react'

interface Context {
  search: string;
  changeSearch: (value: string) => void
  page: number;
  changePage: (value: number) => void
  newsQuantity: number
  setNewsQuantity: (value: number) => void
  limitNews: number
  setLimitNews: (value: number) => void
}

const MainAppContext = createContext<Context>(null!)

export const useMyContext = () => {
  return useContext(MainAppContext)
}

interface Props {
  children: ReactNode;
}


const ContextProvider: FC<Props> = (props) => {

  const [search, setSearch] = useState("Not Search")
  const [page, setPage] = useState(1)
  const [newsQuantity, setNewsQuantity] = useState(0)
  const [limitNews, setLimitNews] = useState(3)

  const changeSearch = (value: string) => {
    setPage(1)
    setSearch(value)
  }

  const changePage = (value: number) => {
    setPage(value)
  }


  return (
    <MainAppContext.Provider value={{search, changeSearch, page, changePage, newsQuantity, setNewsQuantity, limitNews, setLimitNews}}>
      {props.children}
    </MainAppContext.Provider>
  )
}

export default ContextProvider;