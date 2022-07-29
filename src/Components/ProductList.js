import React from "react";
import Product from "./Product";

const ProductList = ({ productContainer }) => {
  const productsArray = productContainer.map((product) => {
    return (
      <Product
        key={product.id}
        name={product.name}
        image={product.image}
        description={product.description}
        category={product.category}
        code={product.code}
      />
    );
  });

  return (
    <div>
      <div className="product-list">
        <div className="products-header">
          <h2 id="header">Top Selling Items</h2>
          <hr />
          <p>
            <span> Black Friday | order now !!!!</span>
          </p>
        </div>
      </div>
      <div id="container-products">			{productsArray}
			</div>
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
 
export default ProductList;