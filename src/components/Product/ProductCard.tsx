import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addOnCart } from "@/store/cart";

const ProductCard = (product: IProduct) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className={`product-${product.id}`}>
      <div>
        {/* <Image src={product.photo} alt={product.name} width={150} height={150} /> */}
        <div>
          <h3>{product.name}</h3>
          <span>R${product.price.toLocaleString()}</span>
        </div>
        <p>{product.description}</p>
      </div>
      <button onClick={() => dispatch(addOnCart(product))}>Comprar</button>
    </div>
  );
};

export default ProductCard;
