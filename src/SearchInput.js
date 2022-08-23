import { useRef } from "react";
import "./SearchInput.css";
const SearchInput = ({ handleOnChange, categoryOptions }) => {
  const selectRef = useRef();
  const handleSelect = () => {
    console.log(selectRef.current.value);
  };
  return (
    <header>
      <input
        placeholder="search by name"
        onChange={(event) => {
          handleOnChange(event.target.value);
        }}
      />
      <label htmlFor="categrory"> Select category: </label>
      <select onChange={handleSelect} ref={selectRef} id="category">
        {categoryOptions.map((c) => (
          <option>{c}</option>
        ))}
      </select>
    </header>
  );
};

export default SearchInput;
