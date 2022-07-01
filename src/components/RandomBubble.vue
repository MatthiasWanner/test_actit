<script setup lang="ts">
import type { IBubbleProps } from '../types';
import { onMounted, ref } from 'vue';

import { getBubbleId, getRandomInt } from '../utils';

// Just use IBubbleProps interface throw vite compiler error
interface IProps {
  color: IBubbleProps['color'];
  nuance: IBubbleProps['nuance'];
  size: IBubbleProps['size'];
}

const props = defineProps<IProps>();

const componentId = ref<string>(getBubbleId(props, getRandomInt(100, 1000000)));

onMounted(() => {
  const element = document.querySelector(`.${componentId.value}`);

  if (element) {
    (element as HTMLBodyElement).style.top = `${getRandomInt(
      0,
      window.innerHeight + 1,
    )}px`;
    (element as HTMLBodyElement).style.left = `${getRandomInt(
      0,
      window.innerWidth + 1,
    )}px`;
  }
});
</script>

<template>
  <div
    :class="`${componentId} absolute rounded-full bg-${color}-${nuance} w-${size} h-${size}`"
  ></div>
</template>
