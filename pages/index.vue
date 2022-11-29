<template>
  <IndexBanner />
  <IndexProduct />
  <IndexCase />
  <IndexComm />
  <IndexTeam />
  <IndexHall />
  <IndexNews />
</template>

<script setup lang='ts'>
import { IWebSite } from '@/config/tyings';
const { web } = inject('website') as IWebSite

useHead({
  title: web.title,
  meta: [
    {name: 'keywords', content: web.keywords},
    {name: 'description', content: web.description},
  ]
})
</script>

<style scoped>

</style>