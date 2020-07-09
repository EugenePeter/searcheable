import React from "react";

import ImageComponent from "./components/unsplash-image/image-component";
import SearchComponent from "./components/search/search-component";
import HeaderComponent from "./components/header/header.component";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <ImageComponent />
    </div>
  );
}

export default App;
