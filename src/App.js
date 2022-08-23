import SearchInput from "./SearchInput";
import DisplayProducts from "./DisplayProducts";
import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(({ data }) => {
        setCategories([...new Set(data.map((d) => d.category))]);
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((message) => console.log(message));
  }, []);

  const handleInput = (inputedValue) => {
    if (inputedValue === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((el) =>
          el.title.toLowerCase().includes(inputedValue.toLowerCase())
        )
      );
    }
  };
  return (
    <div>
      <SearchInput categoryOptions={categories} handleOnChange={handleInput} />
      <DisplayProducts products={filteredProducts} />
    </div>
  );
};

export default App;
