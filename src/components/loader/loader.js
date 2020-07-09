import React from "react";

import { LoaderWrapper } from "./loading.styles";

export const Loader = () => {
  return (
    <LoaderWrapper>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderWrapper>
  );
};
