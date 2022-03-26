import React, { FC } from 'react';
import styles from "./filters.module.scss"
import ColumSelector from "../colums-selector/ColumSelector";
import { useMyContext } from "../../context/MainAppContext";
import { QueryDefaultValue } from '../../types/QueryDefaultValue';

const filters = [
  {name: "Все", source: `${QueryDefaultValue.source}`},
  {name: "Lenta.ru", source: "www.lenta.ru"},
  {name: "Mos.ru", source: "www.mos.ru"}
]

interface Props{
  column: string;
  changeColumns: (columnQuantity: string, limit: number) => void;
}

const Filters: FC<Props> = ({column, changeColumns}) => {

  const { changePage, changeSource, source } = useMyContext()

  const changeFilter = (filter: string) => {
    changePage(1)
    changeSource(filter)
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