import '../shop-card/shop-card.css'

const ShopCard = ({img, title, subtitle}) => {
  return (
    <div className="shop-card-boss-div">
        <div className="d-flex">
            <div className='shop-text'>
            <h4 className="shop-card__title">
                {title}
            </h4>
            <p>{subtitle}</p>
            </div>
        </div>
      <div className="shop-card-img">
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default ShopCard
