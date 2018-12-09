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
            <StarRating :rating="album.rating"/>
        </p>   
        <button @click="handleDelete">DELETE</button>
    </section>
</template>

<script>
import api from '../../services/api';
import StarRating from 'vue-star-rating';

export default {
  data() {
    return {
      album:null
    };
  },
  created() {
    api.getAlbum(this.$route.params.id)
      .then(album => {
        console.log(typeof album.rating);
        album.rating = parseInt(album.rating); 
        this.album = album;
      });
  }, 
  components:{
    StarRating
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
