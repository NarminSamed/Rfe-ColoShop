import styles from "../Header/styles.module.css";
import {
  DownOutlined,
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Dropdown, message, Space, Badge } from "antd";
import { useContext } from "react";
import { CardContext } from "../../context/Card.jsx";
import { Link } from "react-router-dom";

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const items = [
  { label: "CAD", key: "1" },
  { label: "AUD", key: "2" },
  { label: "EUR", key: "3" },
  { label: "GPA", key: "4" },
];

const Header = () => {
  const { cardItems } = useContext(CardContext);

  return (
    <section className={styles.headerWrapper}>
      <div className={styles.headerBlack}>
        <p>FREE SHIPPING ON ALL U.S ORDERS OVER $50</p>
        <div>
          <Dropdown
            menu={{
              items,
              onClick,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space className={styles.dropdownLink}>
                USD
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>

      <div className={styles.navbarWrapper}>
        <div className={styles.logo}>
          <h2>ColoShop</h2>
        </div>
        <div className={styles.navLinks}>
          <ul className={styles.menuLink}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.navRight}>
          <SearchOutlined className={styles.icon} />
          <UserOutlined className={styles.icon} />
          <Badge count={cardItems.length} showZero>
            <ShoppingCartOutlined className={styles.icon} />
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default Header;
