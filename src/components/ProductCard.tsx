import styles from "../styles/ProductCard.module.css";

type CardProps = {
  name: string;
  price: string;
  imgSrc: string;
};

const ProductCard = ({ name, price, imgSrc }: CardProps) => {
  return (
    <div className={styles.card}>
      <img src={imgSrc} alt={name} width="400" />
      <span className={styles.name}>{name}</span>
      <span className={styles.price}>{`$${price}`}</span>
    </div>
  );
};

export default ProductCard;
