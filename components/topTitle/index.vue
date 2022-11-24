<template>
  <h3 class="text-center md:text-4xl text-xl font-bold relative text-gray-700">
    <span>{{title}}</span>
    <p class="text-gray-500 uppercase text-xs md:text-4xl absolute left-1/2 top-4 -translate-x-1/2 opacity-10">{{english}}</p>
    <p class="text-center text-sm md:text-base mt-2 md:mt-4 font-medium">{{desc}}</p>
  </h3>
</template>

<script setup lang='ts'>
  withDefaults(defineProps<{
    title: string;
    desc: string;
    english?: string;
  }>(), {
    english: 'WANCHENG LONGBANG'
  })
</script>

<style scoped lang="less">

</style>