import stringToDate from "./stringToDate";

export default function handleProductData(product: IRawProductData): IProduct {
  return {
    brand: product.brand,
    createdAt: product.createdAt,
    description: product.description,
    id: product.id,
    name: product.name,
    photo: product.photo,
    price: Number(product.price),
    updatedAt: product.updatedAt,
  };
}
