import isStateInterface from "@/scripts/isStateInterface";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductMiniCard from "./Product/ProductMiniCard";

const CartModal = () => {
  const state = useSelector((state) => state);

  const [products, setProducts] = useState<IProduct[]>();
  const [totalPrice, setTotalPrice] = useState<number>();

  useEffect(() => {
    if (isStateInterface(state)) {
      setTotalPrice(state.cart.totalPrice);
      setProducts(state.cart.products);
    }
  }, [state]);

  return (
    <div>
      {products &&
        products.map((product) => (
          <ProductMiniCard key={product.id} {...product} />
        ))}
      {totalPrice && (
        <div>
          <span>Total: </span>
          <span>R${totalPrice.toLocaleString()}</span>
        </div>
      )}
    </div>
  );
};

export default CartModal;
