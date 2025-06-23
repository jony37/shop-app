import "../app/App.css";

import Header from "../header/header";
import Home from "../home/home";
import Shop from "../shop/shop";
import Product from "../product/product";
import Footer from "../footer/footer";

import productImg from "../images/product-01.jpg";
import productImg2 from "../images/product-02.jpg";
import productImg3 from "../images/product-03.jpg";
import productImg4 from "../images/product-04.jpg";
import productImg5 from "../images/product-05.jpg";
import productImg6 from "../images/product-06.jpg";
import productImg7 from "../images/product-07.jpg";
import productImg8 from "../images/product-08.jpg";
import productImg9 from "../images/product-09.jpg";
import productImg10 from "../images/product-10.jpg";
import productImg11 from "../images/product-11.jpg";
import productImg12 from "../images/product-12.jpg";

import bannerImg1 from '../images/banner-01.jpg.webp'
import bannerImg2 from '../images/banner-02.jpg.webp'
import bannerImg3 from '../images/banner-03.jpg.webp'


function App() {
  const productData = [
    { tovarImg: productImg, tovarName: "Esprit Ruffle Shirt", price: "$16.64" },
    // {tovarImg: productImg2, tovarName: "Esprit Ruffle Shirt", price: "$16.64"},
    // {tovarImg: productImg3, tovarName: "Esprit Ruffle Shirt", price: "$16.64"},
    // {tovarImg: productImg4, tovarName: "Esprit Ruffle Shirt", price: "$16.64"},
    // {tovarImg: productImg5, tovarName: "Esprit Ruffle Shirt", price: "$16.64"},
    // {tovarImg: productImg6, tovarName: "Esprit Ruffle Shirt", price: "$16.64"},
    // {tovarImg: productImg7, tovarName: "Esprit Ruffle Shirt", price: "$16.64"},
    // {tovarImg: productImg8, tovarName: "Esprit Ruffle Shirt", price: "$16.64"},
    // {tovarImg: productImg9, tovarName: "Esprit Ruffle Shirt", price: "$16.64"},
    // {tovarImg: productImg10, tovarName: "Esprit Ruffle Shirt", price: "$16.64"},
    // {tovarImg: productImg11, tovarName: "Esprit Ruffle Shirt", price: "$16.64"},
    // {tovarImg: productImg12, tovarName: "Esprit Ruffle Shirt", price: "$16.64"},
  ];

  const BannerData = [
    {bannerImg:bannerImg1, bannerTitle: 'Woman', bannerSubtitle: 'Spring 2018'},
    {bannerImg:bannerImg2, bannerTitle: 'Men', bannerSubtitle: 'Spring 2018'},
    {bannerImg:bannerImg3, bannerTitle: 'Accessories', bannerSubtitle: 'New Trend'}

  ]

  return (
    <div>
      <Header/>
      <Home />
      <div className="container">
        <Shop  BannerData={BannerData}/>
        <Product productData={productData} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
