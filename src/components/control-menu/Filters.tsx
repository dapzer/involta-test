import React, { FC, useState } from 'react';
import styles from "./filters.module.scss"
import ColumSelector from "../colums-selector/ColumSelector";

const filters = [
  {name: "Все", source: "All"},
  {name: "Lenta.ru", source: "www.lenta.ru"},
  {name: "Mos.ru", source: "www.mos.ru"}
]

interface Props{
  column: string;
  changeColumns: (columnQantity: string) => void;
  setSource: (souce: string) => void
  source: string;
}

const Filters: FC<Props> = ({column, changeColumns, setSource, source}) => {

  return (
    <div className={styles.filters}>
      <div>
        {filters.map((filter, index) => (
          <button key={`filter-${index}`}
                  className={`${source == filter.source && styles.active}`}
                  onClick={() => setSource(filter.source)}>{filter.name}</button>
        ))}
      </div>

      <ColumSelector column={column} changeColumns={changeColumns}  />
    </div>
  );
};

export default Filters;