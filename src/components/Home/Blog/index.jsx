import image1 from '../../../assets/img/blog_1.jpg'; 
import image2 from '../../../assets/img/blog_2.jpg';
import image3 from '../../../assets/img/blog_3.jpg';
import styles from '../Blog/styles.module.css';

const Blog = () => {
  const cards = [
    {
      image: image1,
      title: "Here are the trends I see coming this fall",
      author: "BY ADMIN",
      date: "DEC 01, 2017",
    },
    {
      image: image2,
      title: "Here are the trends I see coming this fall",
      author: "BY ADMIN",
      date: "DEC 01, 2017",
    },
    {
      image: image3,
      title: "Here are the trends I see coming this fall",
      author: "BY ADMIN",
      date: "DEC 01, 2017",
    },
  ];

  return (
    <div className={styles.blogContainer}>
      {cards.map((card, index) => (
        <div className={styles.card} key={index}>
          <img src={card.image} alt={`Card ${index + 1}`} />
          <div className={styles.cardContent}>
            <h3>{card.title}</h3>
            <p>{card.author} | {card.date}</p>
            <a href="#">Read more</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;
