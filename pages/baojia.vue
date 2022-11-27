<template>
  <section class="bg-[url('/images/baojia/banner.jpg')] bg-cover bg-center h-110"></section>
  <AppTitle title="算算我家装修要花多少钱" desc="5秒快速报价，装修预算早知道！" class="my-10" />
  <section class="container mx-auto flex mb-10 space-x-10">
    <img src="/images/baojia/price_leftbg.jpg" alt="">
    <section class="space-y-6 flex-1">
      <div class="flex items-end space-x-5"><h3 class="text-2xl">装修计算器</h3> <span>已有数万客户通过此功能获取报价</span></div>
      <AppInput label="姓名" name="name" />
      <AppInput label="电话" name="tel" />
      <div class="flex justify-between space-x-5">
        <AppInput label="楼盘名称" name="loupan" class="flex-1" />
        <AppInput label="面积" name="area" class="flex-1" />
      </div>
      <AppInput label="户型" name="huxing" />
      <button class="bg-red-600 w-full py-2 text-white">立即报价</button>
    </section>
    <aside class="w-80">
      <h3 class="text-2xl mb-5">您家的装修预算：</h3>
      <ul class="border p-4 text-sm overflow-y-auto space-y-3 h-52 mb-4 text-gray-500 scroll" ref="userRef">
        <li class="flex justify-between"><span>赵**</span><span>153****6859</span><span>成功报价</span></li>
        <li class="flex justify-between"><span>黄**</span><span>187****6656</span><span>成功报价</span></li>
        <li class="flex justify-between"><span>张**</span><span>188****6549</span><span>成功报价</span></li>
        <li class="flex justify-between"><span>张**</span><span>186****6245</span><span>成功报价</span></li>
        <li class="flex justify-between"><span>夏**</span><span>139****5624</span><span>成功报价</span></li>
        <li class="flex justify-between"><span>李**</span><span>132****8656</span><span>成功报价</span></li>
        <li class="flex justify-between"><span>刘**</span><span>158****4897</span><span>成功报价</span></li>
        <li class="flex justify-between"><span>言**</span><span>156****1545</span><span>成功报价</span></li>
        <li class="flex justify-between"><span>武**</span><span>188****2543</span><span>成功报价</span></li>
        <li class="flex justify-between"><span>张**</span><span>138****8001</span><span>成功报价</span></li>
        <li class="flex justify-between"><span>朱**</span><span>158****4897</span><span>成功报价</span></li>
        <li class="flex justify-between"><span>杨**</span><span>188****6549</span><span>成功报价</span></li>
      </ul>
      <div class="bg-[url('/images/baojia/server_tel.jpg')] bg-cover bg-center h-20"></div>
    </aside>
  </section>
  <section class="bg-slate-100 py-12">
    <AppTitle title="成功网络报价即享4大超值福利" desc="线上报价智能预算，线下专享增值服务" />
    <ul class="container mx-auto grid grid-cols-2 md:grid-cols-4 mt-7 gap-5">
      <li class="bg-white text-center py-8">
        <h3 class="text-5xl text-gray-500 font-bold border-b-4 inline-block">01</h3>
        <div class="iconfont icon-lianxishouhou mt-2" style="font-size: 60px;"></div>
        <div class="text-xl font-bold mb-2">专属家居顾问</div>
        <span class="text-gray-500">1对1专属顾问，全天即时回复</span>
        <AppTel />
      </li>
      <li class="bg-white text-center py-8">
        <h3 class="text-5xl text-gray-500 font-bold border-b-4 inline-block">02</h3>
        <div class="iconfont icon-thin-_pencil_rul mt-2" style="font-size: 60px;"></div>
        <div class="text-xl font-bold mb-2">免费上门量房</div>
        <span class="text-gray-500">专业团队上门，免费精准量房</span>
        <AppTel />
      </li>
      <li class="bg-white text-center py-8">
        <h3 class="text-5xl text-gray-500 font-bold border-b-4 inline-block">03</h3>
        <div class="iconfont icon-shejiguifan mt-2" style="font-size: 60px;"></div>
        <div class="text-xl font-bold mb-2">免费设计方案</div>
        <span class="text-gray-500">行业设计精英，引领时尚潮流</span>
        <AppTel />
      </li>
      <li class="bg-white text-center py-8">
        <h3 class="text-5xl text-gray-500 font-bold border-b-4 inline-block">04</h3>
        <div class="iconfont icon-liwulipin mt-2" style="font-size: 60px;"></div>
        <div class="text-xl font-bold mb-2">精美到店礼品</div>
        <span class="text-gray-500">赠送家装礼包，助力家居豪装</span>
        <AppTel />
      </li>
    </ul>
  </section>
  <AppTitle title="我们的报价更受欢迎" desc="报价项目全面覆盖，预算明细一目了然！" class="my-10" />
  <ul class="container mx-auto mb-10 space-y-10">
    <li class="flex items-center space-x-10 border-b">
      <span class="text-5xl font-bold bg-teal-800 p-2 text-white rounded">01</span>
      <i class="iconfont icon-liwulipin mt-2" style="font-size: 60px;"></i>
      <div class="flex-1">
        <span class="text-2xl font-bold">最具参考价值</span>
        <p class="mt-2 text-gray-500">以装饰行业多年实践经验为基础，行业资深专家研发系统，更具参考价值的报价。</p>
      </div>
      <span class="border px-5 py-2 rounded-md">更靠谱</span>
    </li>
    <li class="flex items-center space-x-10 border-b">
      <span class="text-5xl font-bold bg-teal-800 p-2 text-white rounded">02</span>
      <i class="iconfont icon-liwulipin mt-2" style="font-size: 60px;"></i>
      <div class="flex-1">
        <span class="text-2xl font-bold">类别更加全面</span>
        <p class="mt-2 text-gray-500">施工项目分门别类，一应俱全，项目、人工、主材一清二楚，报价详细，价格透明。</p>
      </div>
      <span class="border px-5 py-2 rounded-md">更靠谱</span>
    </li>
    <li class="flex items-center space-x-10 border-b">
      <span class="text-5xl font-bold bg-teal-800 p-2 text-white rounded">03</span>
      <i class="iconfont icon-liwulipin mt-2" style="font-size: 60px;"></i>
      <div class="flex-1">
        <span class="text-2xl font-bold">步骤更加容易</span>
        <p class="mt-2 text-gray-500">在线填写只需输入面积等房屋信息，5秒钟免费报价立即查看。</p>
      </div>
      <span class="border px-5 py-2 rounded-md">更靠谱</span>
    </li>
  </ul>
</template>

<script setup lang='ts'>
const userRef = ref<HTMLElement>();

onMounted(() => {
  const height = userRef.value!.getBoundingClientRect().height;
  console.log(userRef.value!.getBoundingClientRect())
  console.log(height)
  console.log(userRef.value!.scrollTop)
  console.log(userRef.value!.scrollHeight)
  window.onload = function () {
    setInterval(() => {
    if(userRef.value!.scrollTop >= height) {
      userRef.value!.scrollTop = 0;
    } else {
      userRef.value!.scrollTop = userRef.value!.scrollTop + 1;
    }
  }, 50)
  }
  
})
</script>

<style scoped lang="less">
.scroll::-webkit-scrollbar{
  display: none;
}
</style>