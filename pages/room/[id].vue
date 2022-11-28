<template>
  <section class="bg-slate-100 md:py-12">
    <section class="container mx-auto box-border">

      <section class="bg-white md:p-6 flex flex-col md:flex-row">
        <div class="md:flex-1 bg-cover bg-center md:mr-8 h-48 md:h-auto" :style="`background-image: url('${room.img}')`"></div>
        <div class="md:w-100 md:py-7 p-3 md:p-0">
          <h2 class="md:text-2xl text-lg font-bold">{{room.title}} | {{room.area}}平米</h2>
          <p class="md:my-8 my-3 text-sm">{{room.description}}</p>
          <div class="border-b pb-3">
            <span class="text-yellow-600 text-sm md:text-base"><i class="iconfont icon-time mr-1 text-black"> 开工时间：</i>{{room.time}}</span>
            <span @click="openGd = true" class="float-right cursor-pointer text-red-500 font-bold text-sm md:text-base">预约看工地</span>
          </div>
          <ul class="grid grid-cols-2 md:gap-7 gap-3 md:h-60 h-40 md:mt-10 mt-3 md:text-sm">
            <li class="bg-cover bg-top relative" :style="`background-image: url('${room.member.img}')`">
              <span class="absolute bottom-0 w-full text-center bg-black bg-opacity-50 text-slate-200 py-1">工长：{{room.member.name}}</span>
            </li>
            <li class="bg-cover bg-top relative" :style="`background-image: url('${room.user.img}')`">
              <span class="absolute bottom-0 w-full text-center bg-black bg-opacity-50 text-slate-200 py-1">设计师：{{room.user.name}}</span>
            </li>
          </ul>
        </div>
      </section>

      <section class="bg-white md:mt-8 mt-3 md:grid grid-cols-4" v-for="item in room.content">
        <section class="md:border-r flex md:justify-center items-center pl-2 md:pl-0 pt-2 md:pt-0 -mb-3 md:-mb-0">
          <i class="iconfont icon-xiangmu icon"></i>
          <div class="md:ml-3 ml-1">
            <p class="md:mb-2.5 md:text-2xl font-bold text-green-600">项目进度：</p>
            <span class="md:text-2xl text-sm">{{state[item.state]}}</span>
          </div>
        </section>
        <section class="w-full col-span-3 md:p-5 p-3">
          <LayoutSwiper :breakpoints="breakpoints" :datas="item.images" v-slot="{data}">
            <div class="md:h-80 h-44 w-full bg-cover bg-center" :style="`background-image: url(${data});`"></div>
          </LayoutSwiper>
          <p class="md:mt-5 mt-2 text-sm leading-6">{{item.text}}</p>
        </section>
      </section>

    </section>

    <Dialog v-model:open="openGd" meidaWidth height="h-100" top-img="/images/baojia/floor-gd.jpg">
      <div class="relative mt-10">
        <label class="absolute text-red-600 top-1/2 -translate-y-1/2 -translate-x-3">*</label>
        <input :class="[{'border-red-500': stateRef.name}]" class="w-full border text-sm p-2.5 rounded-md hover:border-cyan-600 focus:border-cyan-600 outline-none" placeholder="您的称呼" v-model.trim="formData.name">
        <span v-show="stateRef.name" class="absolute left-1 bottom-0 text-xs translate-y-4 text-red-500">您的中文称呼</span>
      </div>
      <div class="relative my-5">
        <label class="absolute text-red-600 top-1/2 -translate-y-1/2 -translate-x-3">*</label>
        <input :class="[{'border-red-500': stateRef.phone}]" class="w-full border text-sm p-2.5 rounded-md hover:border-cyan-600 focus:border-cyan-600 outline-none" placeholder="您的联系电话" v-model.trim="formData.phone">
        <span v-show="stateRef.phone" class="absolute left-1 bottom-0 text-xs translate-y-4 text-red-500">您的联系电话</span>
      </div>
      <div class="relative my-5">
        <label class="absolute text-red-600 top-1/2 -translate-y-1/2 -translate-x-3">*</label>
        <input class="w-full border text-sm p-2.5 rounded-md hover:border-cyan-600 focus:border-cyan-600 outline-none" placeholder="预约参观时间" v-model.trim="formData.note">
      </div>
      <button @click="formBtn" class="w-full bg-red-600 text-sm py-2.5 text-white rounded-lg active:bg-green-600">马上预约</button>
    </Dialog>

    <div v-if="successData.isShow" class="absolute z-50 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 p-2 text-white rounded-md text-sm">{{successData.msg}}</div>
  </section>
</template>

<script lang='ts' setup>
import { getContent } from '@/api'
import { IRoom } from '@/config/tyings'
import { IWebSite } from '@/config/tyings';
import { messagePost } from '@/api'
const changeTitle = inject<(str: string) => void>('changeTitle'),
      openGd = ref(false),
      successData = reactive({
        isShow: false,
        msg: ''
      })

const breakpoints = {
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
const route = useRoute();
const room = await getContent<IRoom>('room', route.params.id as string);
const { state } = inject<IWebSite>('website');

useHead({
  title: room.title + room.area + '平米' + state[room.state],
  meta: [
    {name: 'keywords', content: `${room.title},${state[room.state]}`},
    {name: 'description', content: room.description},
  ]
})
onMounted(() => changeTitle(room.title))

// 表单提交状态
const stateRef = reactive({
  name: false,
  phone: false,
})

// 表单数据
const formData = reactive({
  name: '',
  phone: '',
  floor: '',
  area: '',
  note: '',
  path: useRoute().fullPath,
  timer: 0,
})
const checkPhone =() => /^1[3456789]\d{9}$/g.test(formData.phone)
// 提交
const formBtn = async () => {
  stateRef.name = formData.name.length > 0 ? false : true;
  stateRef.phone = formData.phone.length > 0 && checkPhone() ? false : true;
  if(stateRef.phone || stateRef.name) return;
  // 预约时间嫁接
  formData.note.length > 0 && (formData.note = '预约参观工地时间：' + formData.note);
  const ret = await messagePost<{code: number, msg: string}>(formData);

  if(ret.code === 200){
    successData.isShow = true
    successData.msg = ret.msg
    formData.name = ''
    formData.phone = ''
    formData.area = ''
  } else {
    successData.isShow = true
    successData.msg = ret.msg
  }

  setTimeout(() => {
    successData.isShow = false
    successData.msg = ''
  }, 3000)
}
</script>

<style lang='less' scoped>
.icon{
  font-size: 50px;
}
@media(min-width: 768px){
  .icon{
    font-size: 80px;
  }
}
</style>