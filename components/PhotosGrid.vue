<template>
  <v-carousel hide-delimiters cycle height="400" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(slide, i) in photos" :key="i">
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card class="mx-auto" max-width="344">
            <v-img :src="slide.url"></v-img>
            <v-card-text>
              <h2 class="title primary--text">{{slide.title}}</h2>
            </v-card-text>
            <v-fade-transition>
              <v-overlay v-if="hover" absolute color="#036358"></v-overlay>
            </v-fade-transition>
          </v-card>
        </template>
      </v-hover>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  props: { photos: {}, headers: {} }
};
</script>