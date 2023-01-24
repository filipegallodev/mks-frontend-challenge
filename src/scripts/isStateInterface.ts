interface State {
  cart: IState;
}

export default function isStateInterface(state: unknown): state is State {
  if (state && typeof state === "object" && "cart" in state) return true;

  return false;
}
