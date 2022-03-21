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

const MyContext = createContext<Context>(null!)

export const useMyContext = () => {
  return useContext(MyContext)
}

interface Props {
  children: ReactNode;
}


const ContextProvider: FC<Props> = (props) => {

  const [search, setSearch] = useState("")
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
    <MyContext.Provider value={{search, changeSearch, page, changePage, newsQuantity, setNewsQuantity, limitNews, setLimitNews}}>
      {props.children}
    </MyContext.Provider>
  )
}

export default ContextProvider;