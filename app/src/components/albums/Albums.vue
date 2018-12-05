<template>
    <section>
        <h2>Albums</h2>
        <AddAlbum :onAdd="handleAdd"/>

        <ul v-if="albums">
            <li v-for="album in albums" :key="album.id">
                {{album.name}}
            </li>
        </ul>
    </section>
</template>

<script>
import api from '../../services/api';
import AddAlbum from './AddAlbum';
export default { 
  data() {
    return {
      albums: null,
      error: null
    };
  },
  components: {
    AddAlbum
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

<style>

</style>
