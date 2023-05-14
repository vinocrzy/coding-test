import { NextPage, GetServerSideProps } from "next";
import axios from "axios";
import Link from "next/link";

interface Props {
  products: any[];
  category: string;
}

const Category: NextPage<Props> = ({ products, category }) => {
  //   console.log({ products });

  return (
    <div>
      <div className="container">
        <div className="product-holder">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 capitalize">
              {category}
            </h2>

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
                      ₹ {product?.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  //   console.log({ ctx });

  const { query } = ctx;

  const products = await axios?.get(
    `https://fakestoreapi.com/products/category/${query?.slug}`
  );

  return {
    props: { products: products?.data, category: query?.slug },
  };
};

export default Category;
