<template>
    <ul v-if="albums">
      <li v-for="album in albums" :key="album.id">
        {{album.name}}
      </li>
    </ul>
</template>

<script>
export default {
  props: {
    albums: null
  }
};
</script>

<style>

</style>
