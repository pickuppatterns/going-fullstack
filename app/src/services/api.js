// let genres = null;

const getOptions = (method, data) => {
  return {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
};
export default {

  getAlbums() {
    return fetch('/api/albums')
      .then(response => response.json());
  },
  getAlbum(id) {
    return fetch(`/api/albums/${id}`)
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
  },
  updateAlbum(album) {
    return fetch(
      `/api/albums/${album.id}`, 
      getOptions('PUT', album)
    )
      .then(response => response.json());
  },
  deleteAlbum(id) {
    console.log(id);
    return fetch(`/api/albums/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json());
  }
};