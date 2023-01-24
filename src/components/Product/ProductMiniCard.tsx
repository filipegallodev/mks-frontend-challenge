import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addOnCart, removeFromCart } from "@/store/cart";

const ProductMiniCard = (product: IProduct) => {
  const [totalProductCount, setTotalProductCount] = useState<number>(0);

  const dispatch = useDispatch();

  useEffect(() => {
    if (product.count) setTotalProductCount(product.count);
  }, [product]);

  return (
    <div>
      {/* <Image src={product.photo} alt={product.name} width={150} height={150} /> */}
      <h4>{product.name}</h4>
      <div>
        <button onClick={() => dispatch(removeFromCart(product))}>-</button>
        <span>{totalProductCount}</span>
        <button onClick={() => dispatch(addOnCart(product))}>+</button>
      </div>
      <span>R${product.price.toLocaleString()}</span>
    </div>
  );
};

export default ProductMiniCard;
