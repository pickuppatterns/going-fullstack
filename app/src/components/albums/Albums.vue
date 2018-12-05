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

export default {

};
</script>

<style>

</style>
