<template>
  <section class="container mx-auto flex items-center justify-center text-sm md:text-base">
    <button class="border py-1 px-2" :class="modelValue === 1 ? 'bg-gray-100' : 'bg-white'" :disabled="modelValue === 1" @click="prevBtn">上一页</button>
    <section class="mx-8 text-slate-600 text-sm">{{modelValue}}/{{pages}}</section>
    <button class="border py-1 px-2" :class="modelValue === pages ? 'bg-gray-100' : 'bg-white'" :disabled="pages === modelValue" @click="nextBtn">下一页</button>
  </section>
</template>

<script lang='ts' setup>
const props = withDefaults(defineProps<{
  total: number
  modelValue: number
  size?: number
}>(), {
  total: 10,
  modelValue: 1,
  size: 10
})

const emits = defineEmits(['update:modelValue', 'change'])

const pages = computed(() => props.total > props.size ? Math.ceil(props.total / props.size) : 1)

const prevBtn = () => {
  if(props.size < props.total){
    emits('update:modelValue', props.modelValue - 1)
    emits('change')
  }
}
const nextBtn = () => {
  if(props.size < props.total){
    emits('update:modelValue', props.modelValue + 1)
    emits('change')
  }
}
</script>

<style lang='less' scoped>

</style>