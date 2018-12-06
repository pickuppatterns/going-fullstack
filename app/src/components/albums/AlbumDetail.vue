<template>
    <section v-if="album">
        <h2>{{album.name}}</h2>
        <p>
            {{album.year}}
        </p>
        <p>
            {{album.description}}
        </p> 
        <p>
            {{album.rating}}
        </p>   
    </section>
</template>

<script>
import api from '../../services/api';

export default {
  data() {
    return {
      student:null
    };
  },
  created() {
    api.getAlbum(this.$route.params.id)
      .then(album => {
        this.album = album;
      });
  }
};
</script>

<style>

</style>
