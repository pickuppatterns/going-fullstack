<template>
    <section>
        <h1>Characters</h1>
        <AddCharacter :onAdd="handleAdd" />
        <ul v-if="characters">
            <li v-for="character in characters" 
            :key="character.id">
            {{character.name}}
            </li>
        </ul>
    </section>
</template>

<script>
import AddCharacter from './AddCharacter';
import api from '../services/api.js';
export default {
    data() {
        return {
            characters: null
        };
    },
    components: {
        AddCharacter
    },
    created() {
        api.getCharacters().then(characters => {
            this.characters = characters;
        });
    },
    methods: {
        handleAdd(character) {
            console.log('would add', character);
            return api.addCharacter(character).then(saved => {
                console.log(saved);
                this.characters.push(saved);
            });
        }
    }
};
</script>

<style>

</style>
