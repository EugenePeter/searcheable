import React from "react";

import { Image } from "./image-list-component.styles";

const ImageList = (props) => {
  const { url, disc } = props;
  //   console.log(props);
  return <Image src={url} alt={disc} />;
  // return <img />;
};

export default ImageList;
