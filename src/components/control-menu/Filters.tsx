import React, { FC, useState } from 'react';
import styles from "./filters.module.scss"
import ColumSelector from "../colums-selector/ColumSelector";

const filters = [
  {name: "Все"},
  {name: "Lenta.ru"},
  {name: "Mos.ru"}
]

interface Props{
  column: string;
  changeColumns: (columnQantity: string) => void;
}

const Filters: FC<Props> = ({column, changeColumns}) => {
  const [currentFilter, setCurrentFilter] = useState("Все")

  const changeFilter = (name: string) => {
    setCurrentFilter(name)
  }

  return (
    <div className={styles.filters}>
      <div>
        {filters.map((filter, index) => (
          <button key={`filter-${index}`}
                  className={`${currentFilter == filter.name && styles.active}`}
                  onClick={() => changeFilter(filter.name)}>{filter.name}</button>
        ))}
      </div>

      <ColumSelector column={column} changeColumns={changeColumns}  />
    </div>
  );
};

export default Filters;