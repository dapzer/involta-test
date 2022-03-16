import React, { FC } from 'react';
import Image from 'next/image'

interface Props{
  column: string;
  changeColumns: (columnQantity: string) => void;
}

const ColumSelector: FC<Props> = ({column, changeColumns}) => {

  
  return (
    <div>
      <button onClick={() => changeColumns("small")}><Image src={`/one-column${column == "small" ? "-active" : ""}.svg`} width={18} height={18} /></button>
      <button onClick={() => changeColumns("big")}><Image src={`/two-column${column == "big" ? "-active" : ""}.svg`} width={18} height={18} /></button>
    </div>
  );
};

export default ColumSelector;