<template>
  <section class="bg-gray-100 p-6 md:flex w-full">
    <div class="md:w-80">
      <section class="bg-white p-3">
        <section class="flex">
          <NuxtLink
            class="w-16 h-16 bg-cover rounded-md"
            :to="`/team/${dataValue.user.id}`"
            :style="`background-image: url('${dataValue.user.img}')`">
          </NuxtLink>
          <div class="ml-3 flex flex-col justify-evenly">
            <h3>设计师：<NuxtLink :to="`/team/${dataValue.user.id}`">{{dataValue.user.name}}</NuxtLink></h3>
            <span class="text-sm text-gray-500">从业经验：{{year[dataValue.user.timer]}}</span>
          </div>
        </section>
        <aside class="text-sm mt-3 text-gray-600">设计理念：{{dataValue.user.info.idea}}</aside>
        <p class="space-x-4 text-sm text-gray-600">
          <span v-for="item in dataValue.user.info.style" class="border mt-2 inline-block px-2 rounded-xl">{{style[item]}}</span>
        </p>
      </section>
      <section class="mt-5 bg-white p-3">
        <h3 class="text-center font-bold text-lg">{{dataValue.user.name}}最新作品</h3>
        <ul class="mt-2 space-y-3">
          <li v-for="(item, i) in dataValue.user.cases" :key="item.id" class="group" :class="{'border-b pb-2': dataValue.user.cases.length - 1 != i}">
            <NuxtLink :to="`/case/${item.id}`" class="block h-52 bg-cover mb-2" :style="`background-image: url('${item.img}')`"></NuxtLink>
            <NuxtLink :to="`/case/${item.id}`" class="group-hover:text-red-600">{{item.title}}</NuxtLink>
            <p class="text-sm text-gray-600">{{style[item.style]}} | {{huxing[item.huxing]}}</p>
          </li>
        </ul>
      </section>
    </div>
    <div class="w-1/2 flex-1 md:mx-5">
      <section class="bg-white px-5 py-4">
        <h4 class="text-center font-bold text-2xl border-b mb-2 pb-1">{{dataValue.title}}</h4>
        <AppSwiper :data="dataValue.content">
          <template #default="{value}">
            <div class="w-full h-110 bg-center bg-cover" :style="`background-image: url('${value}')`"></div>
          </template>
          <template #swiper-container-end>
            <span class=" absolute z-50">dsfsfddsffsd</span>
          </template>
        </AppSwiper>
        <ul>
          <li>上一页</li>
          <li>上一页</li>
        </ul>
      </section>
    </div>
    <div class="md:w-80 bg-white">333</div>
  </section>
</template>

<script lang='ts' setup>
import { ICase, IWebSite } from '@/config/tyings'
import { useForm } from "vee-validate";
import * as yup from "yup";

const { web, style, huxing, year } = inject<IWebSite>('website') as IWebSite;
const appConfig = useAppConfig();
const route = useRoute();
const { data } = await useFetch(appConfig.url + '/case/' + route.params.id);
const dataValue = data.value as ICase;

const validationSchema = yup.object({
  name: yup.string().required("姓名必填"),
  tel: yup.string().matches(/^1[3-9]\d{9}$/, '手机号不正确').required("手机号必填"),
});

const { handleSubmit } = useForm({
  validationSchema,
});

const fetchBtn = handleSubmit(async (value) => {
  console.log(value)
});

</script>

<style lang='less' scoped>

</style>