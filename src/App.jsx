import Search from "./Component/SearchPhoto";
import searchImages from "./api";
import { useState } from "react";
import ListArray from "./Component/ListArray";

function App() {
  const [images, setImages] = useState([])
  const handleSubmit = async (output) => {
    const result = await searchImages(output);
    setImages(result);
  };
  return (
    <div className="App">
      <Search search={handleSubmit} />
      <ListArray imagesPlaceHolder={images} />
    </div>
  );
}

export default App;
