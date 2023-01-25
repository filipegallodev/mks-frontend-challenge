import CartModal from "./CartModal";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "@/store/cart";
import isStateInterface from "@/scripts/isStateInterface";
import styled from "styled-components";

import cartIcon from "@/images/cart.svg";
import Image from "next/image";

const Header = () => {
  const [totalItems, setTotalItems] = useState<number>();
  const [modalStatus, setModalStatus] = useState(false);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isStateInterface(state)) {
      setModalStatus(state.cart.modalOpen);
      setTotalItems(state.cart.totalItems);
    }
  }, [state]);

  function handleModal() {
    if (isStateInterface(state) && modalStatus) return dispatch(closeModal());

    return dispatch(openModal());
  }

  return (
    <StyledHeader>
      <div>
        <PrimaryTitle>
          <PrimaryTitleStrong>MKS</PrimaryTitleStrong> Sistemas
        </PrimaryTitle>
      </div>
      <div>
        <CartButton onClick={handleModal}>
          <Image src={cartIcon} alt="Cart" height={18} width={20} />{" "}
          <CardButtonText>{totalItems}</CardButtonText>
        </CartButton>
      </div>
      {modalStatus ? <CartModal modalStatus={modalStatus} /> : null}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.75rem 4rem;
  background-color: #0f52ba;
`;

const PrimaryTitle = styled.h1`
  color: #fff;
  font-size: 1.25rem;
  font-weight: 300;
`;

const PrimaryTitleStrong = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
`;

const CartButton = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.65rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #dfdbff;
    transition: 0.3s;
  }
`;

const CardButtonText = styled.span`
  width: 20px;
  font-size: 1.075rem;
  font-weight: 700;
`;

export default Header;
