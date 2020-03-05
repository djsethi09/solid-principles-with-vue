<!--
1. This componet does it all - Fetches the photos, displays them in list, does a complete crud here -SRP ->divide list, divide dialog, crud methods in separate files
2. This component is inflexible to show Cards instead of List of photos -> OCP -> use Slot in Home.vue, PhotosList -> <slot/> -> PhotoTable, PhotoGrid
3. The API methods will be fetch and axios -> but we have to have a single parent class- should be independent of axios vs fetch - LSP
4. ISP - both Card and Row component should not have all the fields passed to components, just pass required props
5. DIP - All the API classes should implement API interface, and Home.vue should depend on IAPI, rather than API. Depend on Abstractions 
-->
<template>
  <Photos :photos="photos" :headers="headers" />
</template>
<script>
import Photos from "../components/Photos";
import Api from "../api/Api";
export default {
  components: {
    Photos: Photos
  },

  data: () => ({
    photos: [],
    headers: [
      {
        text: "Id",
        align: "start",
        sortable: false,
        value: "id"
      },
      { text: "Title", value: "title", sortable: true },
      { text: "Thumbnail", value: "thumbnailUrl" }
    ]
  }),
  created() {
    //this.initialize();
    this.fetchTodos();
  },
  methods: {
    async fetchTodos() {
      const api = new Api("albums/1/photos");
      this.photos = await api.fetch();
    }
  }
};
</script>