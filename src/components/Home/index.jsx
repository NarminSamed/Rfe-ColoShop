import styles from "../Home/styles.module.css";
import { Tabs, Card, Row, Col, Button } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { CardContext } from "../../context/Card.jsx";
import { Link } from "react-router-dom";



const NewArrival = () => {
  const { addToCard } = useContext(CardContext);
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  };

  const renderProducts = (category) => {
    const filteredProducts =
      category === "all"
        ? products
        : products.filter((product) => product.category === category);
    return (
      <Row gutter={[16, 16]}>
        {filteredProducts.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <div className={styles.cardContainer}>
              <Card
                hoverable
                cover={<img alt={product.title} src={product.image} />}
              >
                     <Link to={`/product/${product.id}`}>
            <Card.Meta title={product.title} />
          </Link>
          <p>Price: ${product?.price}</p>
                <div className={styles.cardActions}>
                  <Button type="primary" onClick={() => addToCard(product)}>
                    Add to Card
                  </Button>
                </div>
                <div
                  className={`${styles.heartIcon} ${
                    favorites.includes(product.id) ? styles.active : ""
                  }`}
                  onClick={() => toggleFavorite(product.id)}
                >
                  {favorites.includes(product.id) ? (
                    <HeartFilled />
                  ) : (
                    <HeartOutlined />
                  )}
                </div>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    );
  };

  const items = [
    {
      key: "1",
      label: "All",
      children: renderProducts("all"),
    },
    {
      key: "2",
      label: "Womens",
      children: renderProducts("women"),
    },
    {
      key: "3",
      label: "ACCESSORIES",
      children: renderProducts("accessories"),
    },
    {
      key: "4",
      label: "MENS",
      children: renderProducts("men"),
    },
  ];

  return (
    <section className={styles.arrivalWrapper}>
      <div className={styles.arrivalTitle}>
        <h2>New Arrival</h2>
        <span className={styles.line}></span>
      </div>
      <div className="tabs">
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </section>
  );
};

export default NewArrival;
