<template>
     <div class = "grid-list"> 
      <ul class="albums" v-if="albums">
        <li v-for="album in albums" :key="album.id" >
          <div class="album_list">
          <RouterLink :to="`/albums/${album.id}`"><h2>{{album.name}}</h2></RouterLink>
          </div>
          <RouterLink :to="`/albums/${album.id}`"><img :src="album.url"></RouterLink>
        </li>
      </ul>
    </div> 
</template>

<script>
export default {
  props: {
    albums: Array
  }
};
</script>

<style>
.album_list{
  height:70px;
}
.albums {
  display: grid;
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
    grid-gap: 10px;
  grid-auto-rows: 500px;
}
  .albums li {
    list-style: none;
    text-align: center;
    text-transform: uppercase;
    color:antiquewhite;
    background-color: rgb(97, 96, 99);
    width: 350px;
    height: 450px;
    padding: 15px;
    margin: 25px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
  .albums a {
    text-decoration: none;
  }
  .albums a:hover {
    color:blueviolet;
  }
  .albums a:visited {
    color:rgb(130, 202, 132);
  }
  .albums img {
    width: 100%;
  }

</style>
