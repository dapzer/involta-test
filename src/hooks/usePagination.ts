import { useMyContext } from "../context/MyContext";
import { FC, useEffect, useState } from "react";
// @ts-ignore
import _ from 'lodash';

const usePagination = () => {
  const {page, changePage, newsQuantity} = useMyContext()
  const [quantity, setQuantity] = useState(0)
  const [startPoint, setStartPoint] = useState(0)
  const [endPoint, setEndPoint] = useState(0)

  let baseQuantity = Math.ceil(newsQuantity / 4)

  if (!isNaN(baseQuantity) && quantity != baseQuantity) {
    setQuantity(baseQuantity)
  }

  useEffect(() => {
    setStartPoint(quantity > 4 ? (page + 2) < quantity ? (page <= 3 ? 1 : page - 1) : (quantity - 3) : 1)
    setEndPoint((page + 2) < quantity ? (page <= 3 ? 5 : page + 3) : quantity + 1)
  }, [page, quantity])

  let pagesNumber = _.range(startPoint, Math.ceil(endPoint))

  const nextPages = () => {
    setStartPoint(startPoint + 4 <= quantity - 4 ? startPoint + 4 : quantity - 4)
    setEndPoint(endPoint + 4 <= quantity ? endPoint + 4 : quantity)
  }

  const prevPages = () => {
    setStartPoint(startPoint - 4 >= 1 ? startPoint - 4 : 1)
    setEndPoint(endPoint - 4 >= 1 ? endPoint - 4 : startPoint + 4)
  }

  return {pagesNumber, prevPages, nextPages, changePage, startPoint, page, quantity}
};

export default usePagination;