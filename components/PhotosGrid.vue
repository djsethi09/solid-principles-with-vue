<template>
  <div>
    <h3>Happy Photos with Carousel</h3>
    <v-carousel hide-delimiters cycle height="400" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(slide, i) in photos" :key="i">
        <CarouselItem :item="{title:slide.title,url:slide.url}" />
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { IPhoto } from "~/types/Photo";
import CarouselItem from "@/components/CarouselItem.vue";
@Component({ components: { CarouselItem } })
export default class PhotosGrid extends Vue {
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