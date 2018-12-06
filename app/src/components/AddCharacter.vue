<template>
    <form @submit.prevent="handleSubmit">
        <label>Name: 
            <input v-model="character.name" required>
        </label>
        <label>
            Fandom:
            <input type="text" v-model="character.fandom" required>
        </label>
        <label>Cool: 
            <select v-model="character.cool">
                <option value="true">Yes!</option>
                <option value="false">No!</option>
            </select>
        </label>
       <label>Age:</label>
            <input type="number" v-model="character.age" required>
        <button>Add</button>
    </form>
</template>

<script>

function initCharacter() {
    return {
        name: '',
        fandom: '',
        cool: '',
        age: '',
    };
}

export default {
    props: {
        onAdd: Function
    },
    data() {
        return {
            character: initCharacter()
        };
    },
    methods: {
        handleSubmit() {
            this.onAdd(this.character).then(() => {
                this.character = initCharacter();
            });
        }
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
