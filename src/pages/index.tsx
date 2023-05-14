import Image from "next/image";

import { NextPage, GetStaticProps } from "next";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";

interface Props {
  products: any[];
  categories: any[];
}

const Home: NextPage<Props> = ({ products, categories }) => {
  // console.log({ products });

  return (
    <>
      <Head>
        <title>Coding Test brainvalleysolutions</title>
        <meta name="description" content="Coding Test brainvalleysolutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className="banner">
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:py-24">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  We sell lifestyle
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  suscipit congue lacus, sit amet semper elit sagittis vel.
                  Curabitur commodo tellus tortor, id condimentum velit varius
                  nec.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="product-holder">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Featured Products
              </h2>

              <div className="category-list">
                {categories?.map((item) => (
                  <div className="category" key={item}>
                    <Link href={`/category/${item}`}>{item}</Link>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products?.map((product) => (
                  <div className="group relative" key={product?.id}>
                    <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={product?.image}
                        alt={product?.title}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <Link href={`/product/${product?.id}`}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            ></span>
                            {product?.title}
                          </Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product?.category}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        {product?.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await axios?.get(
    `https://fakestoreapi.com/products?limit=4`
  );
  const categories = await axios?.get(
    `https://fakestoreapi.com/products/categories`
  );
  // console.log({ products });

  return {
    props: { products: products?.data, categories: categories?.data },
  };
};

export default Home;
