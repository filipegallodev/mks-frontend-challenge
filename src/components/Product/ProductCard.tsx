import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addOnCart } from "@/store/cart";
import styled from "styled-components";

import shoppingBagIcon from "@/images/shopping-bag.svg";

const ProductCard = (product: IProduct) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <StyledProductCard>
      <MainProductContent>
        <Image2 />
        {/* <Image src={product.photo} alt={product.name} width={150} height={150} /> */}
        <NameAndPriceContainer>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>R${product.price.toLocaleString()}</ProductPrice>
        </NameAndPriceContainer>
        <Description>{product.description}</Description>
      </MainProductContent>
      <BuyButton onClick={() => dispatch(addOnCart(product))}>
        <Image src={shoppingBagIcon} alt="Comprar" width={14} height={16} />
        Comprar
      </BuyButton>
    </StyledProductCard>
  );
};

const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 12rem 0;
  border-radius: 8px;
  max-width: 220px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`;

const MainProductContent = styled.div`
  padding: 0.875rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

const Image2 = styled.img`
  height: 150px;
  width: 150px;
  margin: 0 auto;
  background-color: green;
`;

const NameAndPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductName = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.125rem;
  color: #2c2c2c;
`;

const ProductPrice = styled.span`
  padding: 4px 6px;
  font-size: 0.925rem;
  font-weight: 700;
  color: #fff;
  background-color: #373737;
  border-radius: 6px;
`;

const Description = styled.p`
  font-size: 0.625rem;
  font-weight: 300;
  line-height: 0.75rem;
  color: #2c2c2c;
`;

const BuyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.875rem;
  width: 100%;
  background-color: #0f52ba;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  padding: 0.75rem;
  cursor: pointer;
`;

export default ProductCard;
