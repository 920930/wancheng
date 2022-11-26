<template>
  <AppHeader />
  <NuxtPage/>
  <AppFooter />
</template>

<script setup lang="ts">
import { IWebSite } from '@/config/tyings'
const website = reactive<IWebSite>({
  web: {
    title: '',
    keywords: '',
    description: '',
    name: '',
    tel: '',
    kefu: '',
    address: '',
    beian: '',
  },
  area: [],
  huxing: [],
  level: [],
  space: [],
  state: [],
  style: [],
  year: [],
  banner: [],
  product: [],
});
provide('website', website)

const topTitle = ref('万城龙邦')
provide('topTitle', topTitle)
provide('changeTitle', (title: string) => topTitle.value = title)
</script>

<style>
@import '//at.alicdn.com/t/c/font_3785749_45nxrd3pn1b.css';

</style>