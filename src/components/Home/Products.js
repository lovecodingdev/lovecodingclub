import { products } from "../../constants";
import "../../styles/products.css";

const Products = () => {
  return (
    <div className="products">
      <h1>
        Products <b>I have done.</b>
      </h1>

      <div className="top-icons">
        <div className="icon">
          <img src="/icon1.png" />
        </div>
        <div className="icon">
          <img src="/icon2.png" />
        </div>
      </div>
      <div className="product-list">
        {products.map((product, i) => {
          return (
            <div className="product" key={i}>
              <div
                style={{
                  backgroundImage: "url('/white-mask.png')",
                }}
              >
                <div style={{ height: "200px" }}>
                  {" "}
                  <img
                    src={product.img}
                    width="250px"
                    style={{ borderRadius: "10px" }}
                  />
                </div>

                <a href={product.url} target="_blank">
                  {product.title}
                </a>
                <p>{product.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bottom-icons">
        <div className="icon">
          <img src="/icon3.png" />
        </div>
      </div>
    </div>
  );
};

export default Products;
