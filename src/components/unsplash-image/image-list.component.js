import React from "react";

const ImageList = (props) => {
  const { url, disc } = props;
  //   console.log(props);
  return (
    <div>
      <img src={url} alt={disc} />
    </div>
  );
};

export default ImageList;
