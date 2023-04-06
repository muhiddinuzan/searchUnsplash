import { useState } from "react";
function SearchPhoto({ search }) {
  const [valueInput, setValue] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(valueInput);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <h2>Search for Unsplash</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Which image are you looking for?</label>
        <input value={valueInput} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchPhoto;
