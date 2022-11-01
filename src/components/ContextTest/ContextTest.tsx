import { useContext, lazy, Suspense } from "react";
import gridContext from "src/context/grid.context";

const Card = lazy(() => import("../Card"));

const ContextTest = () => {
  const { selectedProduct } = useContext(gridContext);

  return (
    <div>
      {selectedProduct && (
        <Suspense fallback={<div>Loading...</div>}>
          <Card key={selectedProduct.id} {...selectedProduct} />
        </Suspense>
      )}
    </div>
  );
};

export default ContextTest;
