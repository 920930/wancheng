<template>
  <section class="md:py-9 bg-[url('/images/index/footer-form.jpg')] mb-3 md:mb-0">
    <div class="container mx-auto flex text-gray-300 items-end space-x-5">
      <h3 class="text-4xl font-bold">ONLINE RESERVATIONS</h3>
      <span>在线预约到店即可领取精美礼品一份</span>
    </div>
    <section class="container mx-auto pt-8 flex space-x-10">
      <AppInput name="name" class="w-96" label="姓名" />
      <AppInput name="tel" class="flex-1" label="电话" />
      <button class="bg-red-600 w-52 text-white rounded" @click="fetchBtn">提交</button>
    </section>
  </section>
  <section class="md:py-9 bg-center bg-[url('/images/index/footer-bg.jpg')] mb-3 md:mb-0">
    <section class="container mx-auto text-gray-300 flex">
      <section class="flex-1 text-teal-600">
        <p>全国统一服务热线</p>
        <h3 class="text-5xl font-bold mt-5">{{web.tel}}</h3>
      </section>
      <aside><img src="http://www.qijiadianshang.com/images/wechat.png" class="w-32" alt=""></aside>
    </section>
  </section>
  <section class="bg-black text-center">
    <p class="text-gray-400 py-3 text-sm space-x-4">
      <span>地址：{{web.address}}</span>
      <span>{{web.beian}}</span>
    </p>
  </section>
</template>

<script lang='ts' setup>
import { useForm } from "vee-validate";
import * as yup from "yup";
import { IWebSite } from '@/config/tyings'

const { web } = inject<IWebSite>('website') as IWebSite;

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