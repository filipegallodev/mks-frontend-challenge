import Head from "next/head";
import fetchData from "@/scripts/fetchData";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import handleProductData from "@/scripts/handleProductData";
import isObjectWithProducts from "@/scripts/isObjectWithProducts";

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>();

  useEffect(() => {
    async function fetchProducts() {
      const data = await fetchData(
        "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC"
      );
      if (isObjectWithProducts(data)) {
        const filteredData = data.products.map(handleProductData);
        setProducts(filteredData);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      <Head>
        <title>MKS Sistemas | Loja</title>
        <meta name="description" content="Loja de produtos da MKS Sistemas." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </main>
    </>
  );
}
