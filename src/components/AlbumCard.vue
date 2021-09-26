<template>
  <div class="album-card">
    <h2>{{ album.collectionName }}</h2>
    <img v-bind:src="album.artworkUrl100" alt="" style="width: 10vw; height: 10vw" />
    <h3>{{ album.artistName }}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AlbumCard',
  props: {
    album: Object,
  },
});
</script>

<style scoped></style>
