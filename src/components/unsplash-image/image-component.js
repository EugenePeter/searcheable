import React, { useEffect, Fragment } from "react";
import { connect, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import InfiniteScroll from "react-infinite-scroll-component";

import { fetchImageActionStart } from "../../redux/default-images/images.actions";

import ImageList from "./image-list.component";
import {
  selectDefaultImage,
  fetchImage,
} from "../../redux/default-images/image.selector";

import { Loader, LoaderCircle } from "../loader/loader";
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

  const error = useSelector((state) => state.defaultImages.error);
  const defaultImages = defaultImage || [];

  return (
    <Fragment>
      {isFetching > 0 && <Loader />}
      {error ? (
        <LoaderCircle />
      ) : (
        <InfiniteScroll
          dataLength={defaultImages.length} //This is important field to render the next data
          next={fetchData}
          hasMore={true}
        >
          <ImageWrapper>
            {!defaultImages && error
              ? ""
              : defaultImages.map((image) => (
                  <ImageList
                    key={image.id}
                    disc={image.alt_description}
                    url={image.urls}
                  />
                ))}
          </ImageWrapper>
        </InfiniteScroll>
      )}
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
