import isStateInterface from "@/scripts/isStateInterface";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductMiniCard from "./Product/ProductMiniCard";
import styled from "styled-components";
import { closeModal } from "@/store/cart";

const CartModal = ({ modalStatus }: { modalStatus: boolean }) => {
  const [products, setProducts] = useState<IProduct[]>();
  const [totalPrice, setTotalPrice] = useState<number>();

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isStateInterface(state)) {
      setTotalPrice(state.cart.totalPrice);
      setProducts(state.cart.products);
    }
  }, [state]);

  function handleModal() {
    if (isStateInterface(state) && modalStatus) return dispatch(closeModal());
  }

  return (
    <StyledCartModal>
      <MainModalContent>
        <ModalHeader>
          <ModalTitle>
            Carrinho<br></br> de compras
          </ModalTitle>
          <CloseModalButton onClick={handleModal}>X</CloseModalButton>
        </ModalHeader>
        <CartContent>
          {products &&
            products.map((product) => (
              <ProductMiniCard key={product.id} {...product} />
            ))}
        </CartContent>
      </MainModalContent>
      <TotalPriceContainer>
        <span>Total: </span>
        {totalPrice ? <span>R${totalPrice.toLocaleString()}</span> : null}
      </TotalPriceContainer>
      <FinishBuyButton>Finalizar Compra</FinishBuyButton>
    </StyledCartModal>
  );
};

const StyledCartModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  color: #fff;
  background-color: #0f52ba;
  width: 480px;
  height: 100%;
  box-shadow: -5px 0px 8px rgba(0, 0, 0, 0.15);
  z-index: 10000;
  display: flex;
  flex-direction: column;
`;

const MainModalContent = styled.div`
  height: 100%;
  padding: 2.5rem 2rem;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ModalTitle = styled.h2`
  font-weight: 700;
  font-size: 1.7rem;
  line-height: 2rem;
`;

const CloseModalButton = styled.button`
  color: #fff;
  background-color: #000;
  font-size: 1.75rem;
  padding: 4px 14px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: #1f1f1f;
    transition: 0.3s;
  }
`;

const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 3rem 2rem 0;
  gap: 1.75rem;
`;

const TotalPriceContainer = styled.div`
  font-size: 1.625rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem;
`;

const FinishBuyButton = styled.button`
  background-color: #000;
  color: #fff;
  font-size: 1.75rem;
  padding: 2rem;
  cursor: pointer;
  &:hover {
    background-color: #1f1f1f;
    transition: 0.3s;
  }
`;

export default CartModal;
