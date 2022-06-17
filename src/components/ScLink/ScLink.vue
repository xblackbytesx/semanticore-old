<template>
  <a v-if="$slots" :src="src" class="sc-link">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import { withDefaults } from "vue";

withDefaults(
  defineProps<{
    src: string;
  }>(),
  {
    src: "javascript:void(0)",
  }
);
</script>
