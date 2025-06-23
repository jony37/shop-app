import "../product-card/product-card.css";

const ProductCard = ({ tovarImg, tovarName, price }) => {
  return (
    <div className="product-card">
      <div className="product-card__img">
        <img src={tovarImg} alt="aaaa" />
        <button className="product-card__btn">Quick View</button>
      </div>
      <div className="product-text">
        <div className="d-flex justify-content-between">
          <p className="product-card-title">{tovarName}</p>
          <i class="fa-regular fa-heart"></i>
        </div>
        <p className="product-card__price">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
