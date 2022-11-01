import React from "react";
import Card from "../Card";

type DataProps = {
  products: any[];
  addFavorite: (id: string) => (e: any) => void;
  addSelected: (id: string) => (e: any) => void;
};

export const Data = ({ products, addFavorite, addSelected }: DataProps) => {
  return (
    <>
      {products.map((prd: { title: string; id: string }) => (
        <Card
          key={prd.id}
          {...prd}
          addFavorite={addFavorite(prd.id)}
          onSelect={addSelected(prd.id)}
        />
      ))}
    </>
  );
};

const MemoizedData = React.memo(Data);

export default MemoizedData;
