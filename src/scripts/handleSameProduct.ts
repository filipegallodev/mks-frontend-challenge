export default function handleSameProduct(
  stateProducts: IProduct[],
  payload: IProduct,
  action: string
) {
  const index = stateProducts.findIndex((product) => product.id === payload.id);

  if (action === "cart/addOnCart")
    return addProduct(stateProducts, payload, index);

  if (action === "cart/removeFromCart")
    return removeProduct(stateProducts, payload, index);

  return stateProducts;
}

function addProduct(
  stateProducts: IProduct[],
  payload: IProduct,
  index: number
) {
  if (index !== -1 && payload.count) {
    stateProducts[index] = payload;
    return stateProducts;
  }

  return (stateProducts = stateProducts
    ? [...stateProducts, { ...payload }]
    : [payload]);
}

function removeProduct(
  stateProducts: IProduct[],
  payload: IProduct,
  index: number
) {
  if (index !== -1) {
    stateProducts[index] = payload;
  }

  return stateProducts.filter((product) => product.count !== 0);
}
