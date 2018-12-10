<template>
  <form @submit.prevent="onSubmit(album)">
    <input v-focus v-model="album.name" placeholder="Name" required>
    <input v-model="album.url" placeholder="URL" required>
    <input v-model.number="album.year" type="number" placeholder="Year" min="1925" required>
    <select v-model.number="album.genreId"  placeholder="genre" required>
      <option value="1">Country</option>
      <option value="2">Western</option>
    </select>
    <input v-model="album.description" placeholder="Description" required>
    <StarRating v-model="album.rating"/>
    <button>{{label || 'ADD'}}</button>
  </form>
</template>
<script>
import StarRating from 'vue-star-rating';
function initAlbum() {
  return {
    name: '',
    url:'',
    year: 0,
    description: '',
    genreId: 0,
    rating: 0
  };
}
export default {
  props: {
    onSubmit: Function,
    label: String,
    albumToEdit: Object

  },
  data() {
    return {
      album: this.albumToEdit
        ? Object.assign ({}, this.albumToEdit) 
        : initAlbum(),
      genres: null
    };
  },
  components:{
    StarRating
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
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   margin-top: 60px;
  }
  input:focus {
  background-color: #f7ffe0;
  border-radius: 5px;
  outline:none;
}
</style>
