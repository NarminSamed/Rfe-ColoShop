import styles from "../Home/styles.module.css";
import NewArrival from "../../components/Home";
import DealOfWeek from "../../components/Home/Deal/index.jsx";
import { Button } from "antd";
import banner1 from "../../assets/img/banner_1.jpg";
import banner2 from "../../assets/img/banner_2.jpg";
import banner3 from "../../assets/img/banner_3.jpg";
import { BestSeller } from "../../components/Home/Best/index.jsx";
import Blog from "../../components/Home/Blog/index.jsx";
import Footer from '../../components/Home/Footer/index.jsx';

const Home = () => {
  return (
    <section>
      <section className={styles.homeWrapper}>
        <div className={styles.mainText}>
          <span>SPRING / SUMMER COLLECTION 2017</span>
          <h1>Get up to 30% Off New Arrivals</h1>
          <Button className={styles.shopBtn}>Shop Now</Button>
        </div>
      </section>
      <div className="cardWrapper">
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col}>
              <div
                className={styles.bannerItem}
                style={{ backgroundImage: `url(${banner1})` }}
              >
                <div className={styles.bannerCategory}>
                  <a href="">womens</a>
                </div>
              </div>
            </div>
            <div className={styles.col}>
              <div
                className={styles.bannerItem}
                style={{ backgroundImage: `url(${banner2})` }}
              >
                <div className={styles.bannerCategory}>
                  <a href="">accessories</a>
                </div>
              </div>
            </div>
            <div className={styles.col}>
              <div
                className={styles.bannerItem}
                style={{ backgroundImage: `url(${banner3})` }}
              >
                <div className={styles.bannerCategory}>
                  <a href="">mens</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewArrival />
      <DealOfWeek />
      <BestSeller />
      <Blog />
      <Footer />
    </section>
  );
};

export default Home;
