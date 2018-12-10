<template>
  <div class="app">
      <header>
        <nav>
        <RouterLink to='/'>HOME</RouterLink>  |  
        <RouterLink to='/albums'>ALBUMS</RouterLink>
        </nav>
        </header>
  <main>
    <RouterView></RouterView>
  </main>
  </div>
</template>

<script>


export default {};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
header {
  margin: 0 auto;
  padding:0 24%;
  height: 15%;
  /* background-color:aquamarine;    */
}

header a {
  text-decoration: none;
  font-weight: 400;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #9f688a;
  margin-top: 60px;
          }
nav{
  margin: 20px 0 0 ;
  color: #ffffff;
  padding: 10px 0;
      }
</style>
