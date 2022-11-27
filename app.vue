<template>
  <AppHeader />
  <NuxtPage/>
  <AppFooter />
</template>

<script setup lang="ts">
import { IWebSite } from '@/config/tyings'
const website = reactive<IWebSite>({
  web: {
    title: '龙城万邦',
    keywords: '龙城万邦',
    description: '龙城万邦',
    name: '龙城万邦',
    tel: '18982016786',
    kefu: '',
    address: '成都市金牛区韦家碾一路118号红星美凯龙金牛商场5楼3号厅E8073',
    beian: '蜀ICP备2022005621号-1',
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
@import '//at.alicdn.com/t/c/font_3785749_g4ngnefyh7.css';

</style>