import { Link } from "react-router-dom";
import styles from "../styles/ProductCard.module.css";

type CardProps = {
  id: number;
  brand: string;
  name: string;
  price: string;
  imgSrc: string;
};

const ProductCard = ({ id, brand, name, price, imgSrc }: CardProps) => {
  return (
    <div className={styles.card}>
      <img src={imgSrc} alt={name} width="400" />
      <span className={styles.brand}>{brand}</span>
      <Link to={`/shop/${id}`} className={styles.name}>
        {name}
      </Link>
      <span className={styles.price}>{`$${price}`}</span>
    </div>
  );
};

export default ProductCard;
