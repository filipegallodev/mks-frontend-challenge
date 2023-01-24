import React from "react";

const ProductMiniCard = (product: IProduct) => {
  return (
    <div>
      {/* <Image src={product.photo} alt={product.name} width={150} height={150} /> */}
      <h4>{product.name}</h4>
      <div>
        <button>-</button>
        <span>{product.count}</span>
        <button>+</button>
      </div>
      <span>R${product.price}</span>
    </div>
  );
};

export default ProductMiniCard;
