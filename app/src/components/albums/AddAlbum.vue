<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="album.name" placeholder="Name" required>
    <input v-model="album.url" placeholder="URL" required>
    <input v-model.number="album.year" type="number" placeholder="Year" min="1925" required>
    <select v-model.number="album.genreId"  placeholder="genre" required>
      <option value="1">Country</option>
      <option value="2">Western</option>
    </select>
    <input v-model="album.description" placeholder="Description" required>
    <StarRating v-model="album.rating"/>
    <button>ADD IT</button>
  </form>
</template>
<script>
import StarRating from 'vue-star-rating';
function initAlbum() {
  return {
    name: '',
    year: 0,
    description: '',
    genreId: 0,
    rating: 0
  };
}
export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      album: initAlbum()
    };
  },
  components:{
    StarRating
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.album)
        .then(() => {
          this.album = initAlbum();
        });
    }
  }
};
</script>

<style>
input {
   display: block;
   padding: 10px;
   width:250px;
   background-color: #e8eeef;
   color: black;
   box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
   margin: 5px 0 10px 0;
   font-size: 15px;
   text-align: left;
  }
  input:focus {
  background-color: #f7ffe0;
  border-radius: 5px;
  outline:none;
}
</style>
