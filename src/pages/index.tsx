import Head from "next/head";
import ProductCard from "@/components/Product/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import fetchData from "@/scripts/fetchData";
import handleProductData from "@/scripts/handleProductData";
import isObjectWithProducts from "@/scripts/isObjectWithProducts";
import styled from "styled-components";

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
      <Header />
      <MainContent>
        <MainSection>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
        </MainSection>
      </MainContent>
      <Footer />
    </>
  );
}

const MainContent = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainSection = styled.section`
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 5rem 0;
  gap: 1.375rem;
`;
