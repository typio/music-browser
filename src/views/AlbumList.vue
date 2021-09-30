<template>
  <h1 class="text-xl font-medium text-black">Albums</h1>
  <input type="search" placeholder="Artist/Album Name" v-model="term" />
  <div class="albums">
    <AlbumCard
      v-for="album in albums"
      :key="album.collectionId"
      :album="album"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AlbumCard from "@/components/AlbumCard.vue";
import AlbumService from "@/services/AlbumService";

export default defineComponent({
  name: "AlbumList",
  components: {
    AlbumCard,
  },
  data() {
    return {
      albums: null,
      term: "",
    };
  },
  updated() {
    AlbumService.getEvents(
      "https://itunes.apple.com/search?term=" +
        this.term +
        "&country=us&entity=album"
    )
      .then((response) => {
        this.albums = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });
  },
});
</script>

<style scoped>
.albums {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
