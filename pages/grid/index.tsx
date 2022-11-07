import { useDispatch, useSelector } from "react-redux";
import { ContextTest } from "@/components/ContextTest";
import MemoizedData from "@/components/Data/Data";
import { Filters } from "@/components/Filters";
import { Layout } from "@/layoutComponents/Layout";
import { useEffect, useState } from "react";
import gridContext from "src/context/grid.context";
import gridStyles from "../../styles/grid/grid.module.css";
import { addFavorite } from "../../src/slices/favoriteSlice";
import { getProducts } from "../../src/slices/productsSlice";
import { AppDispatch, RootState } from "../../src/store/store";

export default function Grid() {
  const { Provider } = gridContext;
  // const products = useProducts(); Custom hook!
  const dispatch = useDispatch<AppDispatch>();

  const [selectedProduct, setSelectedProduct] = useState("");

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products = useSelector((state: RootState) => state.products.products);

  console.log(products);

  const addSelected = (id: string) => {
    return () => {
      const prd = products.find((prd) => prd.id === id);
      setSelectedProduct({ ...prd });
    };
  };

  const selectFavorite = (id: string) => {
    return () => {
      dispatch(addFavorite(id));
    };
  };

  return (
    <Layout>
      <Provider
        value={{
          selectedProduct: selectedProduct,
          setSelectedProduct: setSelectedProduct,
        }}
      >
        <section className={gridStyles.container}>
          <div>
            <Filters />
          </div>
          <div>
            <MemoizedData
              products={products}
              addFavorite={selectFavorite}
              addSelected={addSelected}
            />
          </div>
          <div>
            <ContextTest />
          </div>
        </section>
      </Provider>
    </Layout>
  );
}
