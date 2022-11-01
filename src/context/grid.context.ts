import { createContext } from "react";

const defaultValue = {
  selectedProduct: "" as any,
  setSelectedProduct: (prd: any) => null as any,
};

const gridContext = createContext(defaultValue);
export default gridContext;
