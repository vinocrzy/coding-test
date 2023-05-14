import Layout from "@/Layout";
import "@/styles/globals.css";
import "@/styles/main.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <Layout page={router.route}>
      <Component {...pageProps} />
    </Layout>
  );
}
