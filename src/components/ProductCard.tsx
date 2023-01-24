import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addOnCart } from "@/store/cart";

const ProductCard = (product: IProduct) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleProduct() {
    if (!product) return;

    dispatch(addOnCart(product));
  }

  return (
    <div className={`product-${product.id}`}>
      <div>
        {/* <Image src={product.photo} alt={product.name} width={150} height={150} /> */}
        <div>
          <h3>{product.name}</h3>
          <span>R${product.price}</span>
        </div>
        <p>{product.description}</p>
      </div>
      <button onClick={handleProduct}>Comprar</button>
    </div>
  );
};

export default ProductCard;

brand: "HyperX";
createdAt: "2023-01-23T18:17:04.771Z";
description: "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.";
id: 8;
name: "Headset Cloud Stinger";
photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp";
price: "600.00";
updatedAt: "2023-01-23T18:17:04.771Z";
