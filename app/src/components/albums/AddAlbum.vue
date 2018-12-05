<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="album.name" required>
    <button>ADD IT</button>
  </form>
</template>

<script>
export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      album: {
        name: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.album)
        .then(() => {
          this.album = { name: '' };
        });
    }
  }
};
</script>

<style>
