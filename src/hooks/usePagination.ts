import { useMyContext } from "../context/MainAppContext";
import { FC, useEffect, useState } from "react";
// @ts-ignore
import _ from 'lodash';

const usePagination = () => {
  const { limitNews } = useMyContext()
  const {page, changePage, newsQuantity} = useMyContext()
  const [quantity, setQuantity] = useState(0)
  const [startPoint, setStartPoint] = useState(0)
  const [endPoint, setEndPoint] = useState(0)

  let baseQuantity = Math.ceil(newsQuantity / limitNews)

  if (!isNaN(baseQuantity) && quantity != baseQuantity) {
    setQuantity(baseQuantity)
  }

  const startPointFormula = () => {
    if (quantity > 4) {

      if (page + 2 < quantity) {

        if (page <= 3) {
          return 1
        } else {
          return page - 1
        }
      } else {
        return quantity - 3
      }
    } else {
      return 1
    }
  }

  const endPointFormula = () => {
    if ((page + 2) < quantity){

      if (page <= 3){
        return 5
      }else {
        return page + 3
      }
    }else {
      return quantity + 1
    }
  }

  useEffect(() => {
    setStartPoint(startPointFormula)
    setEndPoint(endPointFormula)
  }, [page, quantity])

  let pagesNumber = _.range(startPoint, Math.ceil(endPoint))

  const nextPages = () => {
    setStartPoint((startPoint + 4) <= (quantity - 4) ? startPoint + 4 : quantity - 4)
    setEndPoint((endPoint + 4) <= quantity ? endPoint + 4 : quantity)
  }

  const prevPages = () => {
    setStartPoint((startPoint - 4) >= 1 ? startPoint - 4 : 1)
    setEndPoint((endPoint - 4) >= 1 ? endPoint - 4 : startPoint + 4)
  }

  return {pagesNumber, prevPages, nextPages, changePage, startPoint, page, quantity}
};

export default usePagination;