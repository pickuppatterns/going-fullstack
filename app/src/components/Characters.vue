<template>
    <section>
        <h1>Characters</h1>
        <ul>
            <li v-for="character in characters" 
            :key="character.name">
            {{character.name}}
            </li>
        </ul>
    </section>
</template>

<script>
import api from '../services/api.js';
export default {
    data() {
        return {
            characters: null
        };
    },
    created() {
        api.getCharacters().then(characters => {
            console.log(characters);
            this.characters = characters;
        });
    }
};
</script>

<style>

</style>
