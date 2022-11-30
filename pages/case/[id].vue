<template>
  <section class="w-96 border ml-10 bg-gray-500 bg-opacity-60 p-6 space-y-10">
    <AppInput name="name" class="w-96" label="姓名" />
    <AppInput name="tel" class="flex-1" label="电话" />
    <button class="bg-red-600 w-52 text-white rounded" @click="fetchBtn">提交</button>
  </section>
</template>

<script lang='ts' setup>
import { useForm } from "vee-validate";
import * as yup from "yup";

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