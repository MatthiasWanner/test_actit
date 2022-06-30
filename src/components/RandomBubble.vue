<script setup lang="ts">
interface IProps {
  color: string;
  size: string;
}
defineProps<IProps>();
</script>

<template>
  <div :class="`rounded-full ${size} ${color}`"></div>
</template>
