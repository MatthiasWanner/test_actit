<script setup lang="ts">
import type { IBubbleProps } from '../types';

// Just use IBubbleProps interface throw vite compiler error
interface IProps {
  color: IBubbleProps['color'];
  nuance: IBubbleProps['nuance'];
  size: IBubbleProps['size'];
}

defineProps<IProps>();
</script>

<template>
  <div :class="`rounded-full bg-${color}-${nuance} w-${size} h-${size}`"></div>
</template>
