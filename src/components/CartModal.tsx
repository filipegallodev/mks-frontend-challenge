import isStateInterface from "@/scripts/isStateInterface";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CartModal = () => {
  const state = useSelector((state) => state);
  const [products, setProducts] = useState<IProduct[]>();

  useEffect(() => {
    if (isStateInterface(state)) {
      setProducts(state.cart.products);
    }
  }, [state]);

  return (
    <div>
      {products &&
        products.map((product) => <h3 key={product.id}>{product.name}</h3>)}
    </div>
  );
};

export default CartModal;
