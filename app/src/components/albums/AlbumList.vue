<template>
    <ul v-if="albums">
      <li v-for="album in albums" :key="album.id">
        <RouterLink :to="`/albums/${album.id}`">{{album.name}}</RouterLink>
      </li>
    </ul>
</template>

<script>
export default {
  props: {
    albums: Array
  }
};
</script>

<style>

</style>
