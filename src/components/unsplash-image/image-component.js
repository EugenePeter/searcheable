import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import InfiniteScroll from "react-infinite-scroll-component";

import { fetchImageActionStart } from "../../redux/default-images/images.actions";

import ImageList from "./image-list.component";
import {
  selectDefaultImage,
  fetchImage,
} from "../../redux/default-images/image.selector";

import { Loader } from "../loader/loader";
import { ImageWrapper } from "./image-list-component.styles";

const ImageComponent = (props) => {
  const { fetchDefaultImage, defaultImage, isFetching } = props;

  useEffect(() => {
    fetchData();
  }, [fetchDefaultImage]);

  useEffect(() => {
    if (!isFetching) {
      // alert(isFetching);
      console.dir(defaultImage);
    }
  }, [isFetching, defaultImage]);

  console.log(isFetching);

  const fetchData = () => {
    fetchDefaultImage();
  };

  return (
    <Fragment>
      {isFetching > 0 && <Loader />}
      <InfiniteScroll
        dataLength={defaultImage.length} //This is important field to render the next data
        next={fetchData}
        hasMore={true}
      >
        <ImageWrapper>
          {defaultImage
            ? defaultImage.map((image) => (
                <ImageList
                  url={image.urls.thumb}
                  key={image.id + 1}
                  disc={image.alt_description}
                />
              ))
            : ""}
        </ImageWrapper>
      </InfiniteScroll>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchDefaultImage: () => dispatch(fetchImageActionStart()),
});

// const mapStateToProps = createStructuredSelector({
//   selectDefaultImage,
// });

const mapStateToProps = createStructuredSelector({
  defaultImage: selectDefaultImage,
  isFetching: fetchImage,
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageComponent);
