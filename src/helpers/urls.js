const API_ROOT = `http://127.0.0.1:8000/api`;

export const APIUrls = {
  login: () => `${API_ROOT}/login/`,
  signup: () => `${API_ROOT}/signup/`,
  submitPost: () => `${API_ROOT}/posts`,
  fetchPosts: (page = 1, limit = 5) =>
    `${API_ROOT}/posts?page=${page}&limit=${limit}`,
  fetchFollowers: (page = 1, limit = 5) =>
    `${API_ROOT}/users/1/followers?page=${page}&limit=${limit}`,
};
