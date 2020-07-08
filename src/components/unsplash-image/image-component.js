import React, { useEffect, useState } from "react";

import { fetchData } from "../../api/unsplash-api";
import ImageList from "./image-list.component";

const ImageComponent = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function recieveData() {
      try {
        const data = await fetchData();

        await setImages(...images, data);
      } catch (error) {
        console.log(error);
      }
    }
    recieveData();
  }, []);

  //   console.log(images);

  return (
    <div>
      {images
        ? images.map((image) => (
            <ImageList
              url={image.urls.thumb}
              key={image.id}
              disc={image.alt_description}
            />
          ))
        : ""}
    </div>
  );
};

export default ImageComponent;
