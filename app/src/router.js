import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Albums from './components/albums/Albums.vue';
import AlbumDetail from './components/albums/AlbumDetail.vue';

export default new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/albums', component: Albums },
    { path: '/albums/:id', component: AlbumDetail },
    { path: '*', redirect: '/' }
  ]
});