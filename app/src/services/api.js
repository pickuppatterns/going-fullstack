export default {
    getCharacters() {
        return fetch('/api/characters')
            .then(response => response.json());
    }
};