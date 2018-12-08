<template>
    <section v-if="album">
        <h2>{{album.name}}</h2>
        <p class="album-art">
            <img :src="album.url">
        </p>
        <p>
            {{album.year}}
        </p>
        <p>
            {{album.description}}
        </p>
        <p>
            {{album.genre}}
        </p>    
        <p>
            {{album.rating}}
        </p>   
        <button @click="handleDelete">DELETE</button>
    </section>
</template>

<script>
import api from '../../services/api';

export default {
  data() {
    return {
      album:null
    };
  },
  created() {
    api.getAlbum(this.$route.params.id)
      .then(album => {
        this.album = album;
      });
  }, 
  methods: {
    handleDelete() {
      // console.log('I am the stitch that will remove:' this.album);
      api.deleteAlbum(this.album.id)
        .then(() => {
          this.$router.push('/albums');
        });
    }
  }
};
</script>

<style>
.album-art img {
  width:300px;
}
</style>
