import axios from "axios";
import { APIUrls } from "../helpers/urls";
import { getAuthTokenFromLocalStorage } from "../helpers/utils";
async function getPosts() {
  const url = APIUrls.fetchPosts();

  try {
    const result = await axios(url, {
      headers: {
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    });
    console.log(result.data);
    return result.data;
  } catch (e) {
    return [{}];
  }
}
export const getFollowers = async (userCredential, dispatch) => {
  // dispatch({ type: "LOGIN_START" });
  try {
    const url = APIUrls.fetchFollowers();
    const result = await axios(url, {
      headers: {
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    });
    console.log(result);
    return result.data;
  } catch (err) {
    // dispatch({ type: "LOGIN_FAILED", payload: err });
    console.log(err);
    return [];
  }
};

// axios({
//   method: 'post',
//   url: '/user/12345',
//   data: {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   }
// });

export const createPost = async (postData) => {
  try {
    const url = APIUrls.submitPost();
    console.log(url);

    const result = await axios({
      method: "post",
      url: url,
      data: { body: postData },
      headers: { Authorization: `Bearer ${getAuthTokenFromLocalStorage()}` },
    });

    console.log(result);
    return result.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default getPosts;
