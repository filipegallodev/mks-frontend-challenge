export default function isObjectWithProducts(data: unknown): data is IData {
  if (data && typeof data === "object" && "products" in data) return true;

  return false;
}
