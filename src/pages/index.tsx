import Head from "next/head";
import ProductCard from "@/components/Product/ProductCard";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import fetchData from "@/scripts/fetchData";
import handleProductData from "@/scripts/handleProductData";
import isObjectWithProducts from "@/scripts/isObjectWithProducts";
import styled from "styled-components";

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([
    {
      brand: "Item 1",
      createdAt: "string",
      description: "Kkoaskoa aksdko akos kodko kaosdo kaoksd",
      id: 1,
      name: "Item 1",
      photo: "string",
      price: 250,
      updatedAt: "string",
    },
    {
      brand: "Item 2",
      createdAt: "string",
      description: "a0kisdo0 ikpaopks dkoasdko kaks dkoaoksd kooksd koaos",
      id: 2,
      name: "Item 2",
      photo: "string",
      price: 500,
      updatedAt: "string",
    },
  ]);

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
      <Header />
      <main>
        <MainSection>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
        </MainSection>
      </main>
    </>
  );
}

const MainSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.375rem;
`;
