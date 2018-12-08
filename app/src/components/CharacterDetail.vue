<template>
    <section v-if="character">
        <h1>{{character.name}}</h1>
        <ul>
            <li>House: {{character.house}}</li>
            <li>Age: {{character.age}}</li>
            <li>Alive? {{character.alive}}</li>
        </ul>
        <button @click="handleDelete">Delete</button>
    </section>
</template>

<script>
import api from '../services/api.js';
export default {
    data() {
        return {
            character: null
        };
    },
    methods: {
        handleDelete() {
            api.deleteCharacter(this.character.id)
                .then(() =>
                    this.$router.push('/characters'));
        }
    },
    created() {
        api.getCharacter(this.$route.params.id)
            .then(character => {
                this.character = character;
            });
    }
};
</script>

<style>

</style>
