import "../product/product.css";
import ProductCard from "./product-card/product-card";

const Product = ({ productData }) => {
  console.log(productData);

  return (
    <div className="mt-5 mb-5">
      <div className="product">
        <h1 className="product-title fw-bold">Product Overview</h1>

        <div className="product-filter pt-4 d-flex justify-content-between">
          <nav className="d-flex aligin-items-center">
            <li className="active">All Products</li>
            <li>Women</li>
            <li>Men</li>
            <li>Bag</li>
            <li>Shoes</li>
            <li>Watches</li>
          </nav>
          <div className="product-btns">
            <button type="button">
              <i className="fa-solid fa-filter"></i>
              Filter
            </button>
            <button type="button">
              <i className="fa-solid fa-search"></i>
              Filter
            </button>
          </div>
        </div>

        <div className="productCards d-flex align-items-center">
          {productData.map((item) => (
            <ProductCard
              tovarImg={item.tovarImg}
              tovarName={item.tovarName}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
