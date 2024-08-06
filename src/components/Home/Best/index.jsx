import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "antd";
import styles from "../Best/styles.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const { Meta } = Card;

export const BestSeller = () => {
  const [products, setProducts] = useState([]);

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

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.bestWrapper}>
      <h2>Best Sellers</h2>
      <Slider {...sliderSettings}>
        {products.map((product) => (
          <div key={product.id}>
            <Card
              style={{ width: 300, margin: "0 auto" }}
              hoverable
              cover={<img alt={product.title} src={product.image} />}
            >
              <Meta
                title={product.title}
                description={
                  <div style={{ textAlign: "center" }}>
                    <span
                      style={{
                        fontSize: "1.2rem",
                        color: "red",
                        fontWeight: "bold",
                      }}
                    >
                      ${product.price}
                    </span>
                  </div>
                }
              />
            </Card>
          </div>
        ))}
      </Slider>
    </section>
  );
};
