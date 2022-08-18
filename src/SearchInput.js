const SearchInput = ({ handleOnChange }) => {
  return (
    <input
      onChange={(event) => {
        handleOnChange(event.target.value);
      }}
    />
  );
};

export default SearchInput;
