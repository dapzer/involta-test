import React, { FC } from 'react';
import Image from 'next/image'

interface Props{
  column: string;
  changeColumns: (columnQuantity: string, limit: number) => void;
}

const ColumSelector: FC<Props> = ({column, changeColumns}) => {

  return (
    <div>
      <button onClick={() => changeColumns("boxed", 3)}><Image src={`/one-column${column == "boxed" ? "-active" : ""}.svg`} width={18} height={18} /></button>
      <button onClick={() => changeColumns("fullwidth", 4)}><Image src={`/two-column${column == "fullwidth" ? "-active" : ""}.svg`} width={18} height={18} /></button>
    </div>
  );
};

export default ColumSelector;