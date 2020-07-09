import Axios from "axios";

const apiRoot = "https://api.unsplash.com";
const accessKeys = "fuABrUOZFBWIGRIlXAVTo_OZ_1SxPQHmwzWL3vd4138";

export const fetchData = async () => {
  const ourRequest = Axios.CancelToken.source();
  try {
    const response = await Axios.get(
      `${apiRoot}/photos/random?client_id=${accessKeys}&count=10`,
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
