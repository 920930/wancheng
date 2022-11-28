<template>
  <ul class="grid md:grid-cols-3 my-10 container mx-auto gap-6">
    <li class="bg-gray-100 p-3">
      <NuxtLink to="/case" class="h-80 w-full block overflow-hidden">
        <div class="w-full h-full bg-center bg-cover hover:scale-105 duration-150" style="background-image: url('http://www.cdymzs.com/uploadfile/2022/1103/20221103052923922.jpg');"></div>
      </NuxtLink>
      <div class="relative">
        <div class="pt-2">
          <h3 class="text-xl font-bold">上善天成</h3>
          <p class="pt-1 text-sm text-gray-600">轻奢风格 | 三居室</p>
        </div>
        <NuxtLink to="" class="absolute right-4 top-2 -translate-y-1/2 flex flex-col items-center">
          <div class="w-20 h-20 bg-white shadow-md p-1.5 rounded-full mb-1">
            <div class="w-full h-full bg-cover rounded-full" style="background-image: url('http://www.cdymzs.com/uploadfile/2022/1103/20221103044938646.jpg')"></div>
          </div>
          <span>张向阳</span>
        </NuxtLink>
      </div>
    </li>
  </ul>
</template>

<script setup lang='ts'>
import {} from 'vue'

</script>

<style scoped lang="less">

</style>