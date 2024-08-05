import styles from "../Deal/styles.module.css";
import dealImg from "../../../assets/img/deal_ofthe_week.png";
import { Button } from "antd";
import Countdown from "react-countdown";

const Ended = () => <span>Deal has ended!</span>;

const DealOfWeek = () => {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Ended />;
    } else {
      return (
        <div className={styles.countdown}>
          <div className={styles.timeCircle}>
            {hours} <span>hours</span>
          </div>
          <div className={styles.timeCircle}>
            {minutes} <span>min</span>{" "}
          </div>
          <div className={styles.timeCircle}>
            {seconds} <span>sec</span>{" "}
          </div>
        </div>
      );
    }
  };

  return (
    <section className={styles.dealWrapper}>
      <div className="img">
        <img src={dealImg} alt="dealoftheweek" />
      </div>
      <div className={styles.content}>
        <h3>Deal Of The Week</h3>
        <Countdown
          date={Date.now() + 1000 * 60 * 60 * 24}
          renderer={renderer}
        />
        <div className={styles.btn}>
          <Button>Shop Now</Button>
        </div>
      </div>
    </section>
  );
};

export default DealOfWeek;
