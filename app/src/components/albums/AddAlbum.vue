<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="album.name" placeholder="Name" required>
    <input v-model="album.year" type="number" placeholder="Year" min="1925" required>
    <input v-model="album.description" placeholder="Description" required>
    <input v-model="album.rating" type="number" min="1" max="5" placeholder="Rating" required>
    <button>ADD IT</button>
  </form>
</template>

<script>
function initAlbum() {
  return {
    name: '',
    year: '',
    description: '',
    rating: ''
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
[input] {
  width:150px;
}
</style>
