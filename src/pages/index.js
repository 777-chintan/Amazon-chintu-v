import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ items }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* Header */}
      <Header />

      <main className="max-w-screen-xl m-auto">
        {/* Banner */}
        <Banner />

        {/* Items */}
        <ProductFeed items={items} />
      </main>

    </div>
  );
}

export async function getServerSideProps(context){
    const items= await fetch('https://fakestoreapi.com/products').then(
      res => res.json()
    );

    return {
      props:{
        items,
      },
    };
}
