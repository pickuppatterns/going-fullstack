export default {

  getAlbums() {
    return fetch('/api/albums')
      .then(response => response.json());
  },

  addAlbum(album) {
    return fetch('/api/albums', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(album)
    })
      .then(response => response.json());
  }
};