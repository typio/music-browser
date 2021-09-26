<template>
  <h1>Albums</h1>
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

import AlbumCard from "@/components/AlbumCard.vue"; // @ is an alias to /src
import AlbumService from "@/services/AlbumService";

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
    AlbumService.getEvents()
      .then((response) => {
        // console.log("albums:", response.data.results);
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
