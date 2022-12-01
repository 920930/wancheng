<template>
  <header class="w-full fixed h-20 shadow-lg border-b z-50 bg-white">
    <section class="container mx-auto relative">
      <span class="absolute top-0">
        <img src="http://www.cdymzs.com/statics/pc/images/logo.jpg" class="inline-flex h-16" alt="logo" />
      </span>

      <ul class="inline-flex ml-72 h-20 space-x-16 pt-7">
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
      
      <section class="inline-flex float-right mt-5 items-center">
        <i class="iconfont icon-lianxi" style="font-size: 26px"></i>
        <span class="ml-2">{{web.tel}}</span>
      </section>
    </section>
  </header>
  <div class="h-20"></div>
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
  {title: '关于我们', url: '/', children: [
    {title: '品牌介绍', url: '', icon: 'icon-huiyuanhuangguanguanjun-xianxing'},
    {title: '公司动态', url: '', icon: 'icon-book'},
    {title: '联系我们', url: '', icon: 'icon-lianxishouhou'},
  ]},
]
const item = ref([]);

const menuEvent = (index: number, children: any) => {
  console.log(123)
  if(children && children.length) {
    item.value = children
  } else {
    item.value = []
  }
}
</script>

<style lang='less' scoped>

</style>