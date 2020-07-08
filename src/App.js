import React from "react";

import ImageComponent from "./components/unsplash-image/image-component";
import SearchComponent from "./components/search/search-component";

function App() {
  return (
    <div className="App">
      <SearchComponent />
      <ImageComponent />
    </div>
  );
}

export default App;
