<template>
  <section>
    <button @click="show = true">EDIT ✎</button>
    <Modal v-if="show" :onClose="() => show = false">
      <AlbumForm 
       :onSubmit="handleEdit"
       :albumToEdit="album"
       label="Update"/>
    </Modal>
  </section> 
</template>

<script>
import AlbumForm from './AlbumForm';
import Modal from '../shared/Modal';

export default {
  props: {
    onEdit: Function,
    album: Object
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
    handleEdit(album) {
      return this.onEdit(album)
        .then(() => this.show = false);
    }
  }
};
</script>

<style>

</style>
