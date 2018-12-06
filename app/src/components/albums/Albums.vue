<template>
  <section>
    <h2>Albums</h2>
    
    <AddAlbum :onAdd="handleAdd"/>
    <AlbumList :albums="albums"/>

    
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
</style>