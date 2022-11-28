<template>
  <ul class="grid md:grid-cols-3 my-10 container mx-auto gap-6">
    <li class="bg-gray-100 p-3" v-for="item of cases" :key="item.id">
      <NuxtLink to="/case" class="h-80 w-full block overflow-hidden relative">
        <div class="w-full h-full bg-center bg-cover hover:scale-105 duration-150" :style="`background-image: url(${item.img});`"></div>
        <i v-if="item.type === 0" class="absolute bg-gray-700 top-5 right-5 text-center text-white px-3 bg-opacity-80">VR</i>
      </NuxtLink>
      <div class="relative">
        <div class="pt-2">
          <h3 class="text-xl font-bold">{{item.title}}</h3>
          <p class="pt-1 text-sm text-gray-600">{{style[item.style]}} | {{huxing[item.huxing]}}</p>
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
import {IWebSite} from '@/config/tyings'
const { web, style, huxing } = inject<IWebSite>('website') as IWebSite;
const route = useRoute();
console.log(route.query)
watch(() => route.query, (val) => console.log(val))
const cases = [
  {
    "id": 29,
    "title": "79㎡老房一居改两居",
    "img": "http://admin.qijiadianshang.com/uploads/images/2022/0804/1_20220804162025_fPZoR17HPu.jpg",
    "type": 0,
    "huxing": 1,
    "area": 79,
    "style": 1,
    "user_id": 30,
    "created_at": "2022-08-04",
    "user": {
      "id": 30,
      "name": "蒋兴全",
      "img": "http://admin.qijiadianshang.com/uploads/images/2022/0607/1_20220607111311_vFr2I1ZnAm.jpg",
      "level": 1
    }
  },
  {
    "id": 28,
    "title": "90㎡简单色彩北欧风",
    "img": "http://admin.qijiadianshang.com/uploads/images/2022/0802/1_20220802152753_RIOqAc0ZMd.jpg",
    "type": 1,
    "huxing": 1,
    "area": 90,
    "style": 1,
    "user_id": 4,
    "created_at": "2022-08-02",
    "user": {
      "id": 4,
      "name": "唐龙",
      "img": "http://admin.qijiadianshang.com/uploads/images/2022/0506/1_20220506101210_nuzM3J05Ti.jpg",
      "level": 1
    }
  },
  {
    "id": 27,
    "title": "120㎡的简约风三房",
    "img": "http://admin.qijiadianshang.com/uploads/images/2022/0730/1_20220730152156_s6j3RJEXiJ.jpg",
    "type": 0,
    "huxing": 2,
    "area": 120,
    "style": 2,
    "user_id": 21,
    "created_at": "2022-07-30",
    "user": {
      "id": 21,
      "name": "赵梦颖",
      "img": "http://admin.qijiadianshang.com/uploads/images/2022/0528/1_20220528151318_DDt7PqTadG.jpg",
      "level": 1
    }
  },
  {
    "id": 26,
    "title": "82㎡满满的人间烟火味",
    "img": "http://admin.qijiadianshang.com/uploads/images/2022/0729/1_20220729100638_srhMGzOx1o.jpg",
    "type": 1,
    "huxing": 2,
    "area": 82,
    "style": 2,
    "user_id": 29,
    "created_at": "2022-07-29",
    "user": {
      "id": 29,
      "name": "蒋皓",
      "img": "http://admin.qijiadianshang.com/uploads/images/2022/0605/1_20220605175223_q0x8O9jhEF.jpg",
      "level": 0
    }
  },
  {
    "id": 25,
    "title": "138㎡自然简约温馨之家",
    "img": "http://admin.qijiadianshang.com/uploads/images/2022/0726/1_20220726165916_1Dif6XGsOd.png",
    "type": 1,
    "huxing": 3,
    "area": 138,
    "style": 2,
    "user_id": 25,
    "created_at": "2022-07-26",
    "user": {
      "id": 25,
      "name": "邓鑫宇",
      "img": "http://admin.qijiadianshang.com/uploads/images/2022/0605/1_20220605174452_K5V20FVIlL.jpg",
      "level": 4
    }
  },
  {
    "id": 24,
    "title": "150㎡现代简约风大平层",
    "img": "http://admin.qijiadianshang.com/uploads/images/2022/0716/1_20220716154831_zxDzdfGTxu.jpg",
    "type": 1,
    "huxing": 3,
    "area": 150,
    "style": 2,
    "user_id": 14,
    "created_at": "2022-07-16",
    "user": {
      "id": 14,
      "name": "杨川东",
      "img": "http://admin.qijiadianshang.com/uploads/images/2022/0528/1_20220528113622_MX1QLzTJrP.jpg",
      "level": 0
    }
  },
  {
    "id": 23,
    "title": "140㎡现代北欧风",
    "img": "http://admin.qijiadianshang.com/uploads/images/2022/0627/1_20220627172501_mphjd6u5dp.jpg",
    "type": 1,
    "huxing": 2,
    "area": 140,
    "style": 1,
    "user_id": 2,
    "created_at": "2022-06-27",
    "user": {
      "id": 2,
      "name": "李恭玲",
      "img": "http://admin.qijiadianshang.com/uploads/images/2022/0425/1_20220425175739_0cMqXe8UTy.png",
      "level": 1
    }
  },
  {
    "id": 22,
    "title": "100㎡现代原木——温馨格调",
    "img": "http://admin.qijiadianshang.com/uploads/images/2022/0624/1_20220624172326_RqxD4U1HUO.jpg",
    "type": 1,
    "huxing": 2,
    "area": 100,
    "style": 1,
    "user_id": 9,
    "created_at": "2022-06-24",
    "user": {
      "id": 9,
      "name": "陈卓",
      "img": "http://admin.qijiadianshang.com/uploads/images/2022/0527/1_20220527172902_IokYciHgVd.jpg",
      "level": 4
    }
  },
  {
    "id": 21,
    "title": "96㎡淡雅灰杏色柔美三居",
    "img": "http://admin.qijiadianshang.com/uploads/images/2022/0623/1_20220623160938_tiazCHfV0E.jpg",
    "type": 1,
    "huxing": 7,
    "area": 96,
    "style": 2,
    "user_id": 5,
    "created_at": "2022-06-23",
    "user": {
      "id": 5,
      "name": "何娟",
      "img": "http://admin.qijiadianshang.com/uploads/images/2022/0527/1_20220527165516_cgIwNB4aya.jpg",
      "level": 1
    }
  },
  {
    "id": 20,
    "title": "保利爱尚里",
    "img": "http://admin.qijiadianshang.com/uploads/images/2022/0622/1_20220622163131_HtKhJRxcWU.jpg",
    "type": 1,
    "huxing": 2,
    "area": 108,
    "style": 2,
    "user_id": 33,
    "created_at": "2022-06-22",
    "user": {
      "id": 33,
      "name": "曲艺璇",
      "img": "http://admin.qijiadianshang.com/uploads/images/2022/0607/1_20220607111930_pa3ExBBcRO.jpg",
      "level": 3
    }
  },
  {
    "id": 19,
    "title": "北欧知识城",
    "img": "http://admin.qijiadianshang.com/uploads/images/2022/0622/1_20220622162012_GsTvxC5WBn.jpg",
    "type": 1,
    "huxing": 2,
    "area": 104,
    "style": 4,
    "user_id": 17,
    "created_at": "2022-06-22",
    "user": {
      "id": 17,
      "name": "杨晓凤",
      "img": "http://admin.qijiadianshang.com/uploads/images/2022/0528/1_20220528144057_4jxu0x3vCq.jpg",
      "level": 1
    }
  },
  {
    "id": 18,
    "title": "北延风景",
    "img": "http://admin.qijiadianshang.com/uploads/images/2022/0620/1_20220620163042_bJe9ecrnY6.jpg",
    "type": 1,
    "huxing": 1,
    "area": 99,
    "style": 8,
    "user_id": 19,
    "created_at": "2022-06-20",
    "user": {
      "id": 19,
      "name": "杜鹃",
      "img": "http://admin.qijiadianshang.com/uploads/images/2022/0528/1_20220528144404_P7NF5yKTkB.jpg",
      "level": 1
    }
  }
]

</script>

<style scoped lang="less">

</style>