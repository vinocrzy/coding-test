import Link from "next/link";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";

const Header: React.FC = (props) => {
  const [category, setCategory] = useState<any[]>([]);

  useEffect(() => {
    axios?.get(`https://fakestoreapi.com/products/categories`).then((res) => {
      // console.log({ res });

      if (res?.data) {
        setCategory(res?.data);
      }
    });
  }, []);

  return (
    <header className="main-header container">
      <div className="menu">
        <nav>
          <ul>
            <li>
              <Link href={`/`}>Home</Link>
            </li>
            <li>
              <Link href={`#`}>About</Link>
            </li>
            <li className="has-submenu">
              <Link href={`#`}>Shop</Link>
              <ul className="sub-menu">
                {category?.map((cat) => (
                  <li key={cat}>
                    <Link href={`/category/${cat}`}>{cat}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link href={`#`}>FAQ</Link>
            </li>
            <li>
              <Link href={`#`}>Contact us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
