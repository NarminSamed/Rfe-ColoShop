import styles from "../Header/styles.module.css";
import {
  DownOutlined,
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Dropdown, message, Space, Badge, Drawer, Button } from "antd";
import { useContext, useState } from "react";
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
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

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
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/addproducts">Add Product</Link>
            </li>
          </ul>
        </div>

        <div className={styles.navRight}>
          <SearchOutlined className={styles.icon} />
          <UserOutlined className={styles.icon} />
          <Badge count={cardItems.length} showZero>
            <ShoppingCartOutlined className={styles.icon} />
          </Badge>
          <Button
            className={styles.hamburgerButton}
            icon={<MenuOutlined />}
            onClick={showDrawer}
          />
        </div>

        <Drawer
          title="Menu"
          placement="right"
          onClose={closeDrawer}
          visible={drawerVisible}
          className={styles.drawer}
        >
          <ul className={styles.drawerMenu}>
            <li>
              <Link to="/" onClick={closeDrawer}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={closeDrawer}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeDrawer}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeDrawer}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/addproducts" onClick={closeDrawer}>
                Add Product
              </Link>
            </li>
          </ul>
        </Drawer>
      </div>
    </section>
  );
};

export default Header;
