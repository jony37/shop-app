import '../shop/shop.css';
import ShopCard from './shop-card/shop-card';

const Shop = ({BannerData}) => {
  return (
    <div className='shop-boss-div d-flex justify-content-center'>
      {
        BannerData.map(item => (
          <ShopCard img = {item.bannerImg} title = {item.bannerTitle} subtitle = {item.bannerSubtitle}/>
        ))
      }
    </div>
  )
}

export default Shop