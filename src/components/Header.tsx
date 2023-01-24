import CartModal from "./CartModal";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "@/store/cart";
import isStateInterface from "@/scripts/isStateInterface";

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
    <header>
      <div>
        <span>
          <span>MKS</span> Sistemas
        </span>
      </div>
      <div>
        <button onClick={handleModal}>Carrinho: {totalItems}</button>
      </div>
      {modalStatus && <CartModal />}
    </header>
  );
};

export default Header;
