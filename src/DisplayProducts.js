import "./App.css";
const DisplayProduct = ({ products }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((el) => {
        return (
          <div className="card">
            <img src={el.image} alt="SlikaNeka" />
            <div>
              <h4 className="category">{el.title}</h4>
              <p className="description">{el["description"]}</p>
              <span className="price">{el["price"]}</span>
            </div>
          </div>
        );
      })}
      {/* {[<div>{"radi"}</div>, <div>{"Dzelo"}</div>, <div>{"Janjos"}</div>]} */}
    </div>
  );
};
export default DisplayProduct;
