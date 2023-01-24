import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface State {
  cart: IState;
}

const Header = () => {
  const state = useSelector((state) => state);
  const [totalItems, setTotalItems] = useState<number>();

  useEffect(() => {
    if (isStateInterface(state)) setTotalItems(state.cart.totalItems);
  }, [state]);

  function isStateInterface(state: unknown): state is State {
    if (state && typeof state === "object" && "cart" in state) return true;

    return false;
  }

  function handleModal() {
    console.log("Modal aberto");
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
    </header>
  );
};

export default Header;
