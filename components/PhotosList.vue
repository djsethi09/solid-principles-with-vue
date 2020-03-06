<template>
  <div>
    <h3>Happy Photos with List</h3>
    <v-data-table :headers="headers" :items="photos" sort-by="title" class="elevation-1">
      <template v-slot:item.thumbnailUrl="{ item }">
        <v-img width="50" :src="item.thumbnailUrl" />
      </template>
    </v-data-table>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { IPhoto } from "../types/Photo";
@Component
export default class PhotosList extends Vue {
  @Prop({
    default: () => {
      [];
    }
  })
  photos!: IPhoto[];
  @Prop({
    default: () => {
      [];
    }
  })
  headers!: any[];
}
</script>