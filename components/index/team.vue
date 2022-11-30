<template>
  <section class="pt-16 bg-[url('/images/index/team-bg.jpg')] pb-24 bg-center">
    <AppTitle title="万城龙邦·至尊整装" desc="让大宅大有不同，缔造您的专属完美装修方案" whiteColor />
    <ul class="container mx-auto px-32 grid grid-cols-2 md:gap-x-96 gap-y-16 text-gray-400 md:mt-40 text-sm">
      <li class="text-right pr-48">
        <div class="border-b pb-1.5 mb-2.5 text-teal-600 border-gray-500">擅长多元化风格诠释 <span class="text-xl">更专业</span></div>
        <p>精英设计团队平均从业经验8-18年专</p>
        <span>注解决户型结构问题</span>
      </li>
      <li class="pl-48">
        <div class="border-b pb-1.5 mb-2.5 text-teal-600 border-gray-500"><span class="text-xl">更严格</span> 全程节点验收质量把控</div>
        <p>129项严格验收节点，所有细节符合</p>
        <span>国家、行业标准及严格的企业标准</span>
      </li>
      <li class="text-right pr-48">
        <div class="border-b pb-1.5 mb-2.5 text-teal-600 border-gray-500">一个团队服务一个家 <span class="text-xl">更用心</span></div>
        <p>每一个家都有一个团队全程服务每个</p>
        <span>环节无缝对接，为您完美着想</span>
      </li>
      <li class="pl-48">
        <div class="border-b pb-1.5 mb-2.5 text-teal-600 border-gray-500"><span class="text-xl">更个性</span> 专属个性化独案订制</div>
        <p>根据客户要求和户型条件，订制打造</p>
        <span>每房屋追求功能与美学的极致生活</span>
      </li>
    </ul>
  </section>

  <section class="bg-gray-100">
    <section class="container mx-auto relative bg-white px-14 py-10 -top-10 shadow-lg">
      <h3 class="text-xl font-bold">100+线上搭配规划师</h3>
      <p class="mt-2">基装设计师 + 软装设计师 + 家电和智能规划师 = 万城龙邦家装规划师</p>
      <i class="w-14 border-b-2 inline-block my-3"></i>
      <AppSwiper :data="data" isBreak :hasPagination="false">
        <template #default="{value}">
          <NuxtLink to="" class="h-40 md:h-96 block bg-cover" :style="`background-image: url('${value.img}')`"></NuxtLink>
          <section class="bg-gray-100 h-48 md:h-52 pt-3 px-2 md:px-3 relative">
            <section class="flex items-center justify-between">
              <h3 class="md:text-2xl text-lg font-bold">{{value.name}}</h3>
              <p class="inline-block text-xs md:text-base md:ml-4 ml-2 text-yellow-600 rounded-md bg-yellow-500 bg-opacity-30 md:px-2 px-1 py-1">首席设计师</p>
            </section>
            <section class="mt-2 md:mt-3 text-sm md:text-base">从业经验：<span class="text-gray-600">{{value.timer}}年</span></section>
            <section class="mt-2 md:mt-3 text-sm md:text-base">设计理念：<span class="text-gray-600">{{value.info.idea.length > 24 ? value.info.idea.slice(0, 24)+'...' : value.info.idea}}</span></section>
            <section class="absolute text-sm md:text-base bottom-3 left-3 right-3 flex justify-between">
              <NuxtLink to="" class="md:px-3 px-2 md:py-2 py-1 block bg-red-500 text-white">立即咨询</NuxtLink>
              <NuxtLink to="" class="md:px-3 px-2 md:py-2 py-1 block bg-gray-200">预约TA</NuxtLink>
            </section>
          </section>
        </template>
        <template #swiper-wrapper-end>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </template>
      </AppSwiper>
    </section>
  </section>
</template>

<script setup lang='ts'>
import { IUser, IWebSite } from '@/config/tyings'
import { PropType } from 'vue';

defineProps({
  datas: {
    type: Array as PropType<Omit<IUser, 'rooms' | 'cases'>[]>,
    default: []
  }
})
const data = [
  {
    "id": 38,
    "name": "杨敏",
    "img": "http://admin.qijiadianshang.com/uploads/images/2022/0607/1_20220607112521_JcbRjaKbiU.jpg",
    "timer": 9,
    "level": 1,
    "info": {
      "edu": "四川美术学院",
      "idea": "一个愉悦的空间、一种尊贵的生活、一方独享的天地，都在这里寻求最合适的表达。",
      "style": [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8"
      ]
    },
    "cases": []
  },
  {
    "id": 37,
    "name": "刘蕾",
    "img": "http://admin.qijiadianshang.com/uploads/images/2022/0607/1_20220607112406_USvE73CB1l.jpg",
    "timer": 8,
    "level": 3,
    "info": {
      "edu": "四川传媒学院",
      "idea": "从实用的角度，到超载的发挥，构成艺术的主体！",
      "style": [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8"
      ]
    },
    "cases": []
  },
  {
    "id": 36,
    "name": "凌妍雯",
    "img": "http://admin.qijiadianshang.com/uploads/images/2022/0607/1_20220607112309_z6hr5ztn5T.jpg",
    "timer": 3,
    "level": 1,
    "info": {
      "edu": "四川国际标榜职业学院",
      "idea": "合理划分空间，让设计融入生活，营造自然，品味，格调。",
      "style": [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8"
      ]
    },
    "cases": []
  },
  {
    "id": 35,
    "name": "徐慧",
    "img": "http://admin.qijiadianshang.com/uploads/images/2022/0607/1_20220607112214_sko7Z065IH.jpg",
    "timer": 8,
    "level": 3,
    "info": {
      "edu": "四川师范大学",
      "idea": "设计是一种感受、一种心态、一种舒适的、开心的生活方式。",
      "style": [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8"
      ]
    },
    "cases": []
  },
  {
    "id": 34,
    "name": "王月",
    "img": "http://admin.qijiadianshang.com/uploads/images/2022/0607/1_20220607112120_wxdFNVWeGb.jpg",
    "timer": 7,
    "level": 1,
    "info": {
      "edu": "四川城市职业学院",
      "idea": "因生活而设计，因设计而美好。",
      "style": [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8"
      ]
    },
    "cases": []
  },
  {
    "id": 33,
    "name": "曲艺璇",
    "img": "http://admin.qijiadianshang.com/uploads/images/2022/0607/1_20220607111930_pa3ExBBcRO.jpg",
    "timer": 5,
    "level": 3,
    "info": {
      "edu": "哈尔滨现代艺术设计职业学院",
      "idea": "设计源于生活，生活因设计而改变！成就空间和谐，让设计物有所值，让细节缔造完美！",
      "style": [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8"
      ]
    },
    "cases": [
      {
        "id": 20,
        "user_id": 33,
        "img": "http://admin.qijiadianshang.com/uploads/images/2022/0622/1_20220622163131_HtKhJRxcWU.jpg"
      }
    ]
  },
  {
    "id": 31,
    "name": "卢勤",
    "img": "http://admin.qijiadianshang.com/uploads/images/2022/0607/1_20220607111730_0uuI2psfU7.jpg",
    "timer": 9,
    "level": 0,
    "info": {
      "edu": "成都艺术职业学院",
      "idea": "室内设计的目的就是创造满足人们物质和精神生活需要的室内环境。",
      "style": [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8"
      ]
    },
    "cases": []
  },
  {
    "id": 30,
    "name": "蒋兴全",
    "img": "http://admin.qijiadianshang.com/uploads/images/2022/0607/1_20220607111311_vFr2I1ZnAm.jpg",
    "timer": 6,
    "level": 1,
    "info": {
      "edu": "四川大学锦江学院",
      "idea": "艺术源于生活，而生活是艺术的来源，在生活中追求艺术之美的存在。",
      "style": [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8"
      ]
    },
    "cases": []
  },
  {
    "id": 29,
    "name": "蒋皓",
    "img": "http://admin.qijiadianshang.com/uploads/images/2022/0605/1_20220605175223_q0x8O9jhEF.jpg",
    "timer": 12,
    "level": 0,
    "info": {
      "edu": "四川美术学院",
      "idea": "以人为本，用简约明快的手法表现居室空。",
      "style": [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8"
      ]
    },
    "cases": [
      {
        "id": 17,
        "user_id": 29,
        "img": "http://admin.qijiadianshang.com/uploads/images/2022/0618/1_20220618163633_XpaSPmRkMJ.jpg"
      },
      {
        "id": 26,
        "user_id": 29,
        "img": "http://admin.qijiadianshang.com/uploads/images/2022/0729/1_20220729100638_srhMGzOx1o.jpg"
      }
    ]
  },
  {
    "id": 27,
    "name": "顾佳婧",
    "img": "http://admin.qijiadianshang.com/uploads/images/2022/0605/1_20220605174907_ccDOH7EpZj.jpg",
    "timer": 7,
    "level": 1,
    "info": {
      "edu": "四川师范大学",
      "idea": "一切设计由概念出发，围绕功能进行细节设计。",
      "style": [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8"
      ]
    },
    "cases": []
  }
]
</script>

<style lang='less' scoped>
.swiper-button-prev, .swiper-button-next{
  position: absolute;
  top: 46%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, .7);
  background-color: rgba(0, 0, 0, .7);
}
.swiper-button-prev, .swiper-button-next{
  padding: 20px 16px;
}
.swiper-button-prev:after, .swiper-button-next:after, .swiper-button-next-banner {
  font-size: 26px;
}
@media(min-width: 768px){
  .swiper-button-prev{
    padding: 35px 26px 35px 20px;
  }
  .swiper-button-next{
    padding: 35px 20px 35px 26px;
  }
  .swiper-button-prev:after, .swiper-button-next-banner {
    font-size: 36px;
  }
}
</style>