import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import axios from "axios";

interface Props {
  product: any;
}

const Products: NextPage<Props> = ({ product }) => {
  //   console.log({ product });

  return (
    <div>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={product?.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest capitalize">
                {product?.category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product?.title}
              </h1>

              <p className="leading-relaxed">{product?.description}</p>

              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ₹{product?.price}
                </span>
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await axios?.get(`https://fakestoreapi.com/products`);

  const paths = products?.data?.map((product: any) => ({
    params: { slug: `${product.id}` },
  }));

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx;

  //   console.log({ ctx });

  const product = await axios?.get(
    `https://fakestoreapi.com/products/${params?.slug}`
  );
  // console.log({ products });

  return {
    props: { product: product?.data },
    revalidate: 1,
  };
};

export default Products;
