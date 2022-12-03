<template>
  <AppHeader />
  <NuxtPage/>
  <AppFooter />
</template>

<script setup lang="ts">
import type { Ref } from 'vue';
import { IWebSite } from '@/config/tyings';
const appConfig = useAppConfig()

const website = reactive<IWebSite>({
  web: {
    title: '万城龙邦 - 成都装饰装修设计公司',
    keywords: '万城龙邦,成都装饰,成都装修,成都设计',
    description: '万城龙邦',
    name: '万城龙邦',
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
const topTitle = ref('万城龙邦')

const { data } = await useFetch(appConfig.url + '/website');
const web = data as Ref<IWebSite>;
website.web = web.value.web;
website.area = web.value.area;
website.huxing = web.value.huxing;
website.level = web.value.level;
website.space = web.value.space;
website.state = web.value.state;
website.style = web.value.style;
website.year = web.value.year;
website.banner = web.value.banner;
website.product = web.value.product;

provide('website', website)
provide('topTitle', topTitle)
provide('changeTitle', (title: string) => topTitle.value = title)
</script>

<style>
@import '//at.alicdn.com/t/c/font_3785749_hatoh817zsn.css';
@media(min-width: 769px) {
  .banner{
    height: 700px;
  }
  .swiper-button-prev, .swiper-button-next{
    /* position: absolute; */
    /* top: 50%; */
    /* transform: translateY(-50%); */
    color: rgba(255, 255, 255, .7);
    background-color: rgba(0, 0, 0, .7);
  }
  .swiper-button-prev{
    padding: 35px 26px 35px 20px;
  }
  .swiper-button-next{
    padding: 35px 20px 35px 26px;
  }
  .swiper-button-prev:after, .swiper-button-next:after, .swiper-button-next-banner {
    font-size: 36px;
  }
}
@media (max-width: 768px) {
  .banner{
    height: 300px;
  }
  .swiper-button-prev, .swiper-button-next{
    display: none;    
  }
}

</style>