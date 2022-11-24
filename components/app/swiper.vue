<template>
  <swiper
    :modules="modules"
    :navigation="{
      hideOnClick: true,
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    }"
    :pagination="{ clickable: true }"
    :autoplay="{ delay }"
    :breakpoints="breakpoints"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>
      <div class="md:h-110 h-52 w-full bg-cover bg-center" :style="`background-image: url(http://www.cdymzs.com/uploadfile/2022/0309/20220309024541610.jpg);`"></div>
    </swiper-slide>
    <swiper-slide>
      <div class="md:h-110 h-52 w-full bg-cover bg-center" :style="`background-image: url(http://www.cdymzs.com/uploadfile/2022/0309/20220309024541610.jpg);`"></div>
    </swiper-slide>
    <swiper-slide>
      <div class="md:h-110 h-52 w-full bg-cover bg-center" :style="`background-image: url(http://www.cdymzs.com/uploadfile/2022/0309/20220309024541610.jpg);`"></div>
    </swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
  import { PropType, computed } from 'vue';
  // import Swiper core and required modules
  import ISwiper, { Navigation, Pagination, A11y, Autoplay, EffectCube, EffectFade } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

  const props = defineProps({
    pagination: {
      type: Object as PropType<{width?: String, bgColor?: String, activeBgColor?: string}>,
      default: {width: '15px', bgColor: 'white', activeBgColor: 'red'}
    },
    delay: {
      type: Number,
      default: 5000
    },
    isBreak: {
      type: Boolean,
      default: false
    }
  })

  const modules = [Navigation, Pagination, A11y, Autoplay, EffectCube, EffectFade];
  const breakpoints = computed(() => {
    if(props.isBreak){
      return {
        320: { //当屏幕宽度大于等于320
          slidesPerView: 2,
          spaceBetween: 10
        },
        768: { //当屏幕宽度大于等于768
          slidesPerView: 3,
          spaceBetween: 15
        },
        1280: {  //当屏幕宽度大于等于1280
          slidesPerView: 4,
          spaceBetween: 20
        }
      }
    } else {
      return undefined;
    }
  })

  const onSwiper = (swiper: ISwiper) => {
    console.log(swiper);
  };
  const onSlideChange = () => {
    console.log('slide change');
  };

</script>

<style scoped lang="less">
.swiper :deep(.swiper-pagination-bullet){
  width: v-bind('props.pagination.width');
  -webkit-border-radius: 4px;
  border-radius: 4px;
  background-color: v-bind('props.pagination.bgColor');
  &.swiper-pagination-bullet-active {
    background-color: v-bind('props.pagination.activeBgColor');
    -webkit-transition: all 1s ease;
    transition: all 1s ease;
  }
}
</style>