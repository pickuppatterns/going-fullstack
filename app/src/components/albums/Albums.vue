<template>
    <section>
        <h2>Albums</h2>
        <AddAlbum :onAdd="handleAdd"/>

        <ul v-if="albums">
            <li v-for="album in albums" :key="album.id">
                {{album.name}}
            </li>
        </ul>
    </section>
</template>

<script>
// import api from '../../services/api';
// import AddAlbum from './AddAlbum';
export default {

};
</script>

<style>

</style>
