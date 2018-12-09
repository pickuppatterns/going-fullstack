<template>
  <section>
    <button @click="show = true">ADD A NEW ALBUM</button>
    <Modal v-if="show" :onClose="() => show = false">
      <AlbumForm :onEdit="handleAdd"/>
    </Modal>
  </section> 
</template>

<script>
import AlbumForm from './AlbumForm';
import Modal from '../shared/Modal';

export default {
  props: {
    onAdd: Function
  }, 
  data() {
    return {
      show: false
    };
  },
  components: {
    AlbumForm, 
    Modal
  },
  methods: {
    handleAdd(album) {
      return this.onAdd(album)
        .then(() => this.show = false);
    }
  }
};
</script>

<style>

</style>
