import React from "react";

import { Image } from "./image-list-component.styles";

const ImageList = (props) => {
  const { url, disc } = props;
  //   console.log(props);
  const urls = (url || {}).regular || {};
  return <Image src={urls} alt={disc} />;
  // return <img />;
};

export default ImageList;
