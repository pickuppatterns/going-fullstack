<template>
  <section>
    <header>
    <h2>THE UNDISPUTABLE GUIDE TO THE GREATEST ALBUMS OF ALL TIME</h2>
    
    <AddAlbum :onAdd="handleAdd"/>
    <AlbumList :albums="albums"/>

    </header>
  </section>
</template>

<script>
import api from '../../services/api';
import AddAlbum from './AddAlbum';
import AlbumList from './AlbumList';

export default {
  data() {
    return {
      albums: null,
      error: null
    };
  },
  components: {
    AddAlbum,
    AlbumList
  },
  created() {
    api.getAlbums()
      .then(albums => {
        this.albums = albums;
      })
      .catch(err => {
        this.error = err;
      });
  },
  methods: {
    handleAdd(album) {
      return api.addAlbum(album)
        .then(saved => {
          this.albums.push(saved);
        });
    }
  }
};
</script>

<style lang="postcss" scoped>
h2 {
  text-decoration: none;
  font-weight: 600;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #7dad86;
  margin-top: 75px;
}
</style>