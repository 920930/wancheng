<template>
  <section class="md:py-9 bg-[url('/images/index/footer-form.jpg')] mb-3 md:mb-0">
    <div class="container mx-auto flex text-gray-300 items-end space-x-5">
      <h3 class="text-4xl font-bold">ONLINE RESERVATIONS</h3>
      <span>在线预约到店即可领取精美礼品一份</span>
    </div>
    <section class="container mx-auto pt-8 flex space-x-10">
      <AppInput name="name" class="w-96" label="姓名" />
      <AppInput name="tel" class="flex-1" label="电话" />
      <button class="bg-red-600 w-52 text-white rounded">提交</button>
    </section>
  </section>
  <section class="md:py-9 bg-center bg-[url('/images/index/footer-bg.jpg')] mb-3 md:mb-0">
    <section class="container mx-auto text-gray-300 flex">
      <section class="flex-1 text-teal-600">
        <p>全国统一服务热线</p>
        <h3 class="text-5xl font-bold mt-5">028-80801088</h3>
      </section>
      <aside><img src="http://www.qijiadianshang.com/images/wechat.png" class="w-32" alt=""></aside>
    </section>
  </section>
  <section class="bg-black text-center">
    <p class="text-gray-300 py-3 text-sm">
      <span>地址：成都高新区吉泰二路266号18栋2楼附205号</span>
      <span>蜀ICP备2022005621号-1</span>
    </p>
  </section>
</template>

<script lang='ts' setup>
import {ref} from 'vue'
</script>

<style lang='less' scoped>

</style>