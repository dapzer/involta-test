import React, { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react'
import { QueryDefaultValue } from "../types/QueryDefaultValue";
import { useRouter } from 'next/router'
import queryString from "query-string"

interface Context {
  search: string;
  changeSearch: (value: string) => void
  page: number;
  changePage: (value: number) => void
  newsQuantity: number
  setNewsQuantity: (value: number) => void
  limitNews: number
  setLimitNews: (value: number) => void
  source: string;
  changeSource: (value: string) => void
}

const MainAppContext = createContext<Context>(null!)

export const useMyContext = () => {
  return useContext(MainAppContext)
}

interface Props {
  children: ReactNode;
}


const ContextProvider: FC<Props> = (props) => {

  const router = useRouter()

  const [search, setSearch] = useState(router.query.search && router.query.search as string !== QueryDefaultValue.search  ? router.query.search as string : `${QueryDefaultValue.search}`)
  const [page, setPage] = useState(router.query.page ? parseInt(router.query.page as string) : 1)
  const [newsQuantity, setNewsQuantity] = useState(0)
  const [limitNews, setLimitNews] = useState(3)
  const [source, setSource] = useState(router.query.source ? router.query.source as string : `${QueryDefaultValue.source}`)

  const changeSearch = (value: string) => {
    value !== QueryDefaultValue.search && setPage(1)
    setSearch(value)
  }

  const changePage = (value: number) => {
    setPage(value)
  }

  const changeSource = (filter: string) => {
    setSource(filter)
  }


  return (
    <MainAppContext.Provider value={{
      search,
      changeSearch,
      page,
      changePage,
      newsQuantity,
      setNewsQuantity,
      limitNews,
      setLimitNews,
      source,
      changeSource
    }}>
      {props.children}
    </MainAppContext.Provider>
  )
}

export default ContextProvider;