<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card class="mx-auto" max-width="344">
        <v-img :src="item.url"></v-img>
        <v-card-text>
          <h2 class="title primary--text">{{item.title}}</h2>
        </v-card-text>
        <v-fade-transition>
          <v-overlay v-if="hover" absolute color="#036358"></v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import ICarouselItem from "@/types/CarouselItem";
@Component
export default class CarouselItem extends Vue {
  @Prop({ type: Object, required: true }) readonly item!: ICarouselItem;
}
</script>