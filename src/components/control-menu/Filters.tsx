import React, { FC } from 'react';
import styles from "./filters.module.scss"
import ColumSelector from "../colums-selector/ColumSelector";
import { useMyContext } from "../../context/MyContext";

const filters = [
  {name: "Все", source: "All"},
  {name: "Lenta.ru", source: "www.lenta.ru"},
  {name: "Mos.ru", source: "www.mos.ru"}
]

interface Props{
  column: string;
  changeColumns: (columnQuantity: string, limit: number) => void;
  setSource: (source: string) => void
  source: string;
}

const Filters: FC<Props> = ({column, changeColumns, setSource, source}) => {

  const { changePage } = useMyContext()

  const changeFilter = (filter: string) => {
    changePage(1)
    setSource(filter)
  }

  return (
    <div className={styles.filters}>
      <div>
        {filters.map((filter, index) => (
          <button key={`filter-${index}`}
                  className={`${source == filter.source && styles.active}`}
                  onClick={() => changeFilter(filter.source)}>{filter.name}</button>
        ))}
      </div>

      <ColumSelector column={column} changeColumns={changeColumns}  />
    </div>
  );
};

export default Filters;