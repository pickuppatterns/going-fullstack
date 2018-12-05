export default {
  getAlbums() {
    return fetch('api/albums')
      .then(response => response.json());
  }
};