import Axios from "axios";

export const apiRoot = "https://api.unsplash.com";
export const accessKeys = "fuABrUOZFBWIGRIlXAVTo_OZ_1SxPQHmwzWL3vd4138";

export const SearchImage = async (query) => {
  const ourRequest = Axios.CancelToken.source();
  try {
    const response = await Axios.get(
      `${apiRoot}/search/photos?page=2&query=vacation&client_id=${accessKeys}&count=10`,
      { cancelToken: ourRequest.token }
    );
    const data = response.data;
    return data;
  } catch (e) {
    console.log(e);
  }
  return () => {
    ourRequest.cancel();
  };
};
