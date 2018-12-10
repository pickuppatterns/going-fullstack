<template>
    <section v-if="album">
      <div class="album-header">
        <h2>{{album.name}}</h2>
        <EditAlbum 
         :album="album"
         :onEdit="handleEdit"/>
        <button @click="handleDelete">DELETE🗑</button>
      </div>
      <div class="album-body">
        <p class="album-art">
            <img :src="album.url">
        </p>
        <p>
            {{album.year}}
        </p>
        <p>
            {{album.genre}}
        </p>    
        <p>
            <StarRating :rating="album.rating"/>
        </p> 
      </div>
      <div class="album-description">
            {{album.description}}
      </div>  
    </section>
</template>

<script>
import api from '../../services/api';
import StarRating from 'vue-star-rating';
import EditAlbum from './EditAlbum';

export default {
  data() {
    return {
      album: null
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
    StarRating,
    EditAlbum
  },
  methods: {
    handleEdit(album){
      return api.updateAlbum(album)
        .then(updated => {
          this.album = updated;
        });
    },
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
.album-header{
  /* border:3px solid deeppink; */
  width:50%;
  margin:0 auto;
  padding:1.5%;
  color:whitesmoke;
  height:150px;
  text-align: center;
  text-transform: uppercase; 
  background-color:rgb(171, 100, 144);
}
.album-art img {
  width:300px;
}
.album-body{
  /* border:3px solid deeppink; */
  width:50%;
  margin:0 auto;
  padding:1.5%; 
}
.album-description{
  float:right;
}
</style>
