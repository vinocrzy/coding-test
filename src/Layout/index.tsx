import { useContext, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<{ page: string; children: any }> = ({
  children,
  page,
}) => {
  return (
    <>
      <Header />
      <main className={`page-main`}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
