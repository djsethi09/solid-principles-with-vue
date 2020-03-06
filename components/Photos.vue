<template >
  <div id="photos">
    <slot />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Inject, Provide } from "vue-property-decorator";
import { IPhoto } from "../types/Photo";
@Component
export default class Photos extends Vue {
  @Prop({
    default: () => {
      [];
    }
  })
  photos!: IPhoto[];
}
</script>