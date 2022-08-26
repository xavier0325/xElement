<template>
  <footer class="el-footer" :style="{ height }">
    <slot />
  </footer>
</template>
<script lang="ts">
export default {
  name: "ElFooter",
}
</script>
<script setup lang="ts">
import { withDefaults } from "vue"
interface props {
  height?: string;
}
withDefaults(defineProps<props>(), {
  height: "60px",
})
</script>

<style lang="scss">
@import "../styles/mixin";
@include b(input) {
    padding: "$--footer-padding";
    box-sizing: "border-box";
    flex-shrink: 0;
    @include b(inner) {
        width: "300px";
    }
}
</style>
