import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addOnCart,
  removeFromCart,
  removeAllOfTheProductFromCart,
} from "@/store/cart";
import styled from "styled-components";
import Image from "next/image";
import plusIcon from "@/images/plus.png";
import minusIcon from "@/images/minus.png";

const ProductMiniCard = (product: IProduct) => {
  const [totalProductCount, setTotalProductCount] = useState<number>(0);

  const dispatch = useDispatch();

  useEffect(() => {
    if (product.count) setTotalProductCount(product.count);
  }, [product]);

  return (
    <StyledProductMiniCard>
      <RemoveProductButton
        onClick={() => dispatch(removeAllOfTheProductFromCart(product))}
      >
        X
      </RemoveProductButton>
      <ImageAndTitleContainer>
        <Image src={product.photo} alt={product.name} width={64} height={64} />
        <ProductName>{product.name}</ProductName>
      </ImageAndTitleContainer>
      <AmountAndPriceContainer>
        <ControlProductAmount>
          <ControlAmountButton
            onClick={() => dispatch(removeFromCart(product))}
            style={{ borderRight: "0.3px solid #bfbfbf" }}
          >
            <Image src={minusIcon} alt="Menos" height={10} width={10} />
          </ControlAmountButton>
          <ProductAmount>{totalProductCount}</ProductAmount>
          <ControlAmountButton
            onClick={() => dispatch(addOnCart(product))}
            style={{ borderLeft: "0.3px solid #bfbfbf" }}
          >
            <Image src={plusIcon} alt="Mais" height={8} width={8} />
          </ControlAmountButton>
        </ControlProductAmount>
        <span>R${product.price.toLocaleString()}</span>
      </AmountAndPriceContainer>
    </StyledProductMiniCard>
  );
};

const StyledProductMiniCard = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding: 1.125rem 1.25rem;
  border-radius: 8px;
  color: #000;
  background-color: #fff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
`;

const RemoveProductButton = styled.button`
  position: absolute;
  top: 0;
  top: -10px;
  right: 0;
  right: -10px;
  color: #fff;
  background-color: #000;
  font-size: 0.875rem;
  padding: 2px 6px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: #1f1f1f;
    transition: 0.3s;
  }
`;

const ImageAndTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ProductName = styled.h3`
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1rem;
  color: #2c2c2c;
`;

const AmountAndPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const ControlProductAmount = styled.div`
  position: relative;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 4px;
  border: 0.3px solid #bfbfbf;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 400;
  &:before {
    content: "Qtd:";
    position: absolute;
    bottom: 38px;
    left: 0;
    z-index: 1000000;
    font-size: 0.625rem;
  }
`;

const ProductAmount = styled.span`
  width: 18px;
  text-align: center;
`;

const ControlAmountButton = styled.div`
  padding: 6px;
  user-select: none;
  cursor: pointer;
`;

export default ProductMiniCard;
