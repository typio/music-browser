<template>
  <h1>Albums</h1>
  <input type="search" placeholder="Artist/Album Name">
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

let term = "drake";

export default defineComponent({
  name: "AlbumList",
  components: {
    AlbumCard,
  },
  data() {
    return {
      albums: null,
    };
  },
  created() {
    if (term != undefined || term != null)
      AlbumService.getEvents(
        "https://itunes.apple.com/search?term=" +
          term +
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
