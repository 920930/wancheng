<template>
  <header class="w-full fixed h-16 shadow-lg border-b z-40 bg-slate-800 md:bg-white">
    <section class="container mx-auto relative">
      <NuxtLink to="/" class="flex justify-center md:inline-block">
        <img src="http://www.cdymzs.com/statics/pc/images/logo.jpg" class="inline-block h-9 md:h-16" alt="logo" />
      </NuxtLink>
      <ul class="hidden md:inline-flex ml-72 h-20 space-x-16 pt-7">
        <li v-for="(nav, i) in navs" class="group">
          <NuxtLink :to="nav.url" class="flex items-center hover:text-red-600">
            {{nav.title}}
            <span v-show="nav.children">
              <i class="iconfont icon-caret-down group-hover:hidden duration-200"></i>
              <i class="iconfont icon-caret-up hidden group-hover:inline-block duration-200"></i>
            </span>
          </NuxtLink>
          <div 
            v-show="nav.children"
            class="absolute left-0 w-full top-20 shadow-lg justify-center bg-white space-x-32 group-hover:flex hidden py-3 text-gray-600"
            >
            <NuxtLink :to="child.url" v-for="child in nav.children" class="flex flex-col items-center hover:text-red-600">
              <i class="iconfont" :class="child.icon" style="font-size: 35px"></i>
              <p>{{child.title}}</p>
            </NuxtLink>
          </div>
        </li>
      </ul>
      
      <section class="hidden md:inline-flex float-right mt-5 items-center">
        <i class="iconfont icon-lianxi" style="font-size: 26px"></i>
        <span class="ml-2">{{web.tel}}</span>
      </section>
    </section>
    <div class="md:hidden overflow-x-scroll w-full overflow-hidden whitespace-nowrap text-gray-300 pt-1 scro">
      <NuxtLink v-for="item in mnavs" :to="item.url" class="w-100 px-3">{{item.title}}</NuxtLink>
    </div>
  </header>
  <div class="h-16"></div>
</template>

<script lang='ts' setup>
import { IWebSite } from '@/config/tyings';
const { web } = inject('website') as IWebSite
const navs = [
  {title: '首页', url: '/'},
  {title: '新房整装', url: '/house', children: [
    {title: '新房整装', url: '/house', icon: 'icon-gonglve'},
    {title: '定制软装', url: '/ruanzhuang', icon: 'icon-ruanzhuang'},
    {title: '旧房翻新', url: '/old', icon: 'icon-yemianzhuangxiu'}
  ]},
  {title: '智能报价', url: '/baojia'},
  {title: '案例实景', url: '/case', children: [
    {title: '美图案例', url: '/case?type=1', icon: 'icon-xingzhuang-tupian'},
    {title: 'VR实景', url: '/case?type=0', icon: 'icon-VR'},
    {title: '在建工地', url: '/room', icon: 'icon-icon1'}
  ]},
  {title: '设计团队', url: '/team'},
  {title: '家装指南', url: '/news', children: [
    {title: '装修攻略', url: '/news?cate=1', icon: 'icon-taiji'},
    {title: '装修日记', url: '/news?cate=2', icon: 'icon-book'},
    {title: '常见问题', url: '/news?cate=3', icon: 'icon-wentijieda'},
  ]},
  {title: '关于我们', url: '/about', children: [
    {title: '品牌介绍', url: '/about', icon: 'icon-huiyuanhuangguanguanjun-xianxing'},
    {title: '公司动态', url: '/news?cate=4', icon: 'icon-book'},
  ]},
]
const mnavs = [
  {title: '首页', url: '/'},
  {title: '新房整装', url: '/house'},
  {title: '定制软装', url: '/ruanzhuang'},
  {title: '旧房翻新', url: '/old'},
  {title: '美图案例', url: '/case?type=1'},
  {title: 'VR实景', url: '/case?type=0'},
  {title: '在建工地', url: '/room'},
  {title: '设计团队', url: '/team'},
  {title: '装修攻略', url: '/news?cate=1'},
  {title: '装修日记', url: '/news?cate=2'},
  {title: '常见问题', url: '/news?cate=3'},
  {title: '品牌介绍', url: '/about'},
]
</script>

<style lang='less' scoped>
.scro::-webkit-scrollbar{
  display: none; /* Chrome Safari */
}
</style>