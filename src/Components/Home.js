import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return ( 
		<div className="home">
			{/* product cards */}
		<section id="products"> 
	<div className="container">
		<div className="products-header">
			<h2 id="header">popular products</h2>
			<p>Flash Sales | Deals you can't miss order now !!!!</p>
		</div>
		<div className="product product-1">
			<figure> <img src="https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/36/794886/1.jpg?4278"/>
				<figcaption>Apple IPhone 13 Pro, 6.1", 256GB + 6GB RAM (Dual SIM), Alpine Green</figcaption>
				<figcaption>$ 240.00</figcaption>
			</figure>
		</div>
		<div className="product product-2">
			<figure> <img src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/59/063576/1.jpg?1525"/>
				<figcaption>Vitron HTC4368FS,43" Inch FHD Smart Android TV Netflix Youtube AppStore</figcaption>
				<figcaption>$ 300.00</figcaption>
			</figure>
		</div>
		<div className="product product-3">
			<figure> <img src="https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/27/201433/1.jpg?5408"/>
				<figcaption>Fashion 16 Inch Laptop Backpack With USB Waterproof</figcaption>
				<figcaption>$ 48.00</figcaption>
			</figure>
		</div>
		<div className="product product-4">
			<figure> <img src="https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/15/224652/1.jpg?1582" alt="product-image"/>
				<figcaption>Vitron 2.1 CH Multimedia Speaker BT/USB/SD/FM - 9000W</figcaption>
				<figcaption>$ 89.00</figcaption>
			</figure>
		</div>
	</div>
			</section>
			{/* The brand collections */}
		<section id="collections">
	<div className="container">
		<div className="c-1">
			<div className="c-1-image-holder"> <img src="https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/79/365783/1.jpg?8050"/> </div>
		</div>
		<div className="c-2">
			<h2>featured Brands</h2>
			<hr />
			<div className="c-2-image-holder">
				<img className="left" src="https://bgr.com/wp-content/uploads/2020/10/apple-iphone-12-event-95.jpg?resize=1440,810" alt="" />
				<img className="right" src="https://cdn.mos.cms.futurecdn.net/stWxmxQxthCyMxKosjKikc-970-80.jpg.webp" alt="" />
					</div>
					<Link to="/products">
					<button  className="button">view all brands</button>
					</Link>
				</div>
				</div>
			</section>
			<section>
				<footer>
					<h3>Access-Shop</h3>
					<p>Designed by : Michael Kaburu | Contact : @infoaccessshop</p>
					<p>Copyright © 2022</p> 
				</footer>
			</section>
		</div>
	
		
	 );
}
 
export default Home;