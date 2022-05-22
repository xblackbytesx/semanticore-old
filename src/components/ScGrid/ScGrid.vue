<template>
  <component :is="element" class="sc-grid">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { withDefaults } from "vue";

withDefaults(
  defineProps<{
    element?: string;
  }>(),
  {
    element: "div",
  }
);
</script>

<style lang="postcss">
.sc-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
