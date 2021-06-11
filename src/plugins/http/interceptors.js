export default (http) => {
  http.interceptors.response.use(
    response => response,
    error => {
      const { response } = error;

      if (!response) {
        return Promise.reject(error);
      }

      return Promise.reject(error);
    },
  );
};
