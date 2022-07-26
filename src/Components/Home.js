import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return ( 
		<div className="home">
		<section id="products"> 
	<div className="container">
		<div className="products-header">
			<h2>popular products</h2>
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
			
		</div>
	
		
	 );
}
 
export default Home;