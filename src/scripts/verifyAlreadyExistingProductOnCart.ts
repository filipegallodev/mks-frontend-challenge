export default function verifyAlreadyExistingProductOnCart(
  state: IProduct[],
  payload: IProduct
) {
  if (state.some((product) => product.id === payload.id)) {
    const count = state.find((product) => {
      if (product.id === payload.id) return product;
    })?.count;
    const price = state.find((product) => {
      if (product.id === payload.id) return product;
    })?.price;
    if (count && price)
      return {
        ...payload,
        price: price + payload.price,
        count: count + 1,
      };
  }

  return { ...payload, count: 1 };
}
