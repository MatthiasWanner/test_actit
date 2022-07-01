<script setup lang="ts">
import type {
  TailwindColor,
  TailwindFixedSize,
  TailwindNuance,
} from '../types';

interface IProps {
  color: TailwindColor;
  nuance: TailwindNuance;
  size: TailwindFixedSize;
}
defineProps<IProps>();
</script>

<template>
  <div :class="`rounded-full bg-${color}-${nuance} w-${size} h-${size}`"></div>
</template>
