<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted, onUpdated, ref } from 'vue';

import RandomBubble from './components/RandomBubble.vue';
import { IBubbleProps } from './types';
import { getBubbleId, getRandomInt, randomizeBubbleProps } from './utils';

const bubblesProps = ref<IBubbleProps[]>(
  new Array(getRandomInt(50, 201)).fill(null).map(() => randomizeBubbleProps()),
);

const displayTime = ref<number>(getRandomInt(10, 100));

const refreshBubbleArray = () => {
  const randomIndex = getRandomInt(0, bubblesProps.value.length);
  bubblesProps.value.splice(randomIndex, 1, randomizeBubbleProps());
};

const handleAnimation = () => {
  setTimeout(refreshBubbleArray, displayTime.value);
  displayTime.value = getRandomInt(10, 100);
};

onMounted(() => {
  handleAnimation();
});

onUpdated(() => {
  handleAnimation();
});
</script>

<template>
  <RandomBubble
    v-for="(singleProps, index) in bubblesProps"
    :key="getBubbleId(singleProps, index)"
    :class="`m-auto`"
    :color="singleProps.color"
    :nuance="singleProps.nuance"
    :size="singleProps.size"
  />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
</style>
