<template>
    <form @submit.prevent="handleSubmit">
        <label>Name: 
            <input v-model="character.name" required>
        </label>
        <label>House: 
            <select v-if="houses"
                v-model="character.housesId">
                <option value="-1" disabled>Select a house!</option>
                <option v-for="house in houses"
                    :key="house.id" 
                    :value="house.id" required>
                    {{house.name}}    
                </option>
            </select>
        </label>
        <label>Alive: 
            <select v-model="character.alive">
                <option value="true">Yes!</option>
                <option value="false">No!</option>
            </select>
        </label>
       <label>Age:
            <input type="number" v-model="character.age" required>
        </label>
        <button>Add</button>
    </form>
</template>

<script>
import api from '../services/api.js';

function initCharacter() {
    return {
        name: '',
        housesId: '-1',
        alive: '',
        age: '',
    };
}

export default {
    props: {
        onAdd: Function
    },
    data() {
        return {
            character: initCharacter(),
            houses: null
        };
    },
    methods: {
        handleSubmit() {
            this.onAdd(this.character)
                .then(() => {
                    this.character = initCharacter();
                });
        }
    },
    created() {
        api.getHouses()
            .then(houses => {
                this.houses = houses;});
    }
};
</script>

<style scoped>
form {
    border: 1px solid black;
    width: 50vw;
    display: flex;
    margin: auto;
    padding: 10px;
    flex-direction: column; 
    justify-content: space-between;
}
label {
    display: block;
}
input {
    margin: auto;
    width: 25vw;
}
button {
    margin: auto;
    width: 25%;
}
</style>
