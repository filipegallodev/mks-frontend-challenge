export default function verifyAlreadyExistingProductOnCart(
  stateProducts: IProduct[],
  payload: IProduct,
  action: string
) {
  if (action === "cart/addOnCart")
    return addOneOfTheSameProduct(stateProducts, payload);

  return removeOneOfTheSameProduct(stateProducts, payload);
}

function addOneOfTheSameProduct(stateProducts: IProduct[], payload: IProduct) {
  if (stateProducts.some((product) => product.id === payload.id)) {
    const count = stateProducts.find((product) => {
      if (product.id === payload.id) return product;
    })?.count;

    if (count)
      return {
        ...payload,
        count: count + 1,
      };
  }

  return { ...payload, count: 1 };
}

function removeOneOfTheSameProduct(
  stateProducts: IProduct[],
  payload: IProduct
) {
  const count = stateProducts.find((product) => {
    if (product.id === payload.id) return product;
  })?.count;

  if (count)
    return {
      ...payload,
      count: count - 1,
    };

  return payload;
}
