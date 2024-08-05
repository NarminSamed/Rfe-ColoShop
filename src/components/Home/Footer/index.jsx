

import { FacebookFilled, InstagramFilled } from '@ant-design/icons'; 
import styles from '../Footer/styles.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <div className={styles.newsletterText}>
        <h2>Newsletter</h2>
        <p>Subscribe to our newsletter and get 20% off your first purchase</p>
        </div>
        <form className={styles.newsletterForm}>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className={styles.footerLinks}>
        <ul>
          <li><a href="#">Blog</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
      </div>
      <div className={styles.socialMedia}>
      <a href="#"><FacebookFilled style={{ fontSize: '20px', color: '#333' }} /></a>
      <a href="#"><InstagramFilled style={{ fontSize: '20px', color: '#333' }} /></a>
      </div>
      <div className={styles.footerBottom}>
        <p>©2018 All Rights Reserved. This template is made with <span role="img" aria-label="heart">❤️</span> by Colorlib</p>
      </div>
    </footer>
  );
}

export default Footer;
