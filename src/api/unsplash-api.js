import Axios from "axios";

const apiRoot = "https://api.unsplash.com";
const accessKeys = "ANM58e8pfXCdO6sYR_JJoR1LKhCLyIJtqC2l1sNAvyE";

export const fetchData = async () => {
  const ourRequest = Axios.CancelToken.source();
  try {
    const response = await Axios.get(
      `${apiRoot}/photos/random?client_id=${accessKeys}&count=10`,
      { cancelToken: ourRequest.token }
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
    return { error };
  }

  // return () => {
  //   ourRequest.cancel();
  // };
};
