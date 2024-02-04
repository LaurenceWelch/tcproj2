class DataApi {
  get() {
    return fetch('https://jsonplaceholder.typicode.com/posts/');
  }
}

export default new DataApi();
