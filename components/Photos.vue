<template>
  <div id="photos">
    <v-data-table :headers="headers" :items="photos" sort-by="title" class="elevation-1">
      <template v-slot:item.thumbnailUrl="{ item }">
        <v-img width="50" :src="item.thumbnailUrl" />
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  props: { photos: {}, headers: {} }
};
</script>