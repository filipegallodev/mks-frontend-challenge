import React from "react";

const ProductCard = (product: IProduct) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <span>R${product.price}</span>
      <p>{product.description}</p>
      <button>Comprar</button>
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
