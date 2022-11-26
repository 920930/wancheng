<template>
  <section class="bg-gray-100 mt-16 py-10">
    <AppTitle title="最新资讯" desc="实时分享品牌新闻资讯及最新优惠活动" />
    <section class="container mx-auto md:flex mt-6 px-3 md:px-0">
      <section class="md:w-5/12 group">
        <div class="md:h-96 h-48 overflow-hidden relative">
          <NuxtLink to="">
            <div class="bg-cover bg-center group-hover:scale-105 duration-150 w-full h-full" :style="`background-image: url(${top.img})`"></div>
          </NuxtLink>
          <aside class="absolute left-0 top-0 md:w-24 w-20 md:h-16 h-12 bg-red-600 text-gray-200 flex flex-col justify-center items-center font-bold">
            <p class="md:text-xl">{{top.created_at.split('-')[2]}}</p>
            <p class="text-sm md:text-base">{{top.created_at.split('-').slice(0, 2).join('-')}}</p>
          </aside>
        </div>
        <div class="bg-white md:py-6 py-2 md:pl-4 px-2">
          <NuxtLink to="/news" class="md:text-2xl font-bold text-gray-800 group-hover:text-red-600">{{top.title.slice(0, 22)}}...</NuxtLink>
          <p class="md:mt-3 mt-2 text-gray-500 text-sm md:text-base">{{top.description.slice(0, 30)}}...</p>
        </div>
      </section>
      <ul class="flex-1 md:ml-8 md:space-y-5 space-y-3 mt-3 pr-2 md:mt-0">
        <li class="bg-white py-3 flex group" v-for="item in datas">
          <div class="order-1 md:ml-6 ml-3 flex-1">
            <NuxtLink :to="`/news/${item.id}`" class="md:text-xl md:font-semibold text-gray-800 group-hover:text-red-600">{{item.title.slice(0, 32)}}...</NuxtLink>
            <p class="hidden md:block mt-2 text-gray-500 text-xs md:text-base">{{item.description.slice(0, 40)}}...</p>
          </div>
          <aside class="md:w-24 w-20 font-bold border-r border-slate-300 text-gray-700 text-center">
            <p class="md:text-xl text-sm">{{item.created_at.split('-')[2]}}</p>
            <p class="md:text-base text-sm">{{item.created_at.split('-').slice(0, 2).join('-')}}</p>
          </aside>
        </li>
      </ul>
    </section>
  </section>
</template>

<script setup lang='ts'>
const top = {
  "id": 6,
  "title": "厨房装修那些不能忽视的细节！",
  "img": "http://admin.qijiadianshang.com/uploads/images/2022/0622/1_20220622165208_5qotAKVjPM.jpg",
  "description": "生活里最平凡的浪漫，是柴米油盐，四季三餐，有烟火的地方。厨房，是个可以治愈人心的神奇之地，这里充满暖暖的人间烟火气。那么到底该怎么去设计一个厨房呢？",
  "created_at": "2022-06-22"
}
const datas = [
  {
    "id": 16,
    "title": "装修中的各种线条都有什么用？",
    "img": "http://admin.qijiadianshang.com/uploads/images/2022/0928/1_20220928140450_BCNLNawZUT.jpg",
    "description": "如我们经常听到的踢脚线、石膏线、波打线，有些是材料名称，有些是装饰造型，只听名字可能很难理解，下面就给大家详细介绍一下。 石膏线 石膏线原料为石膏粉，主要安装在墙面、顶面以及墙面与顶面夹角处，除防火、防潮、隔音、隔热等自身特性外，用在装修中",
    "created_at": "2022-09-28"
  },
  {
    "id": 15,
    "title": "阳台地面该不该铺地砖？可以这样处理",
    "img": "http://admin.qijiadianshang.com/uploads/images/2022/0926/1_20220926143911_vYlMhUj7wQ.jpg",
    "description": "当我们拿到新房后，其他房间如何设计一般都不会有什么分歧，可偏偏阳台这个没有具体功能划分的区域，能做的设计似乎并不算多，容易让人纠结。阳台铺地板之所以见的比较少，无非是因为地板不防水，这其实和你家阳台会不会经常接触到水有直接关系。  阳台不接",
    "created_at": "2022-09-26"
  },
  {
    "id": 14,
    "title": "现在最流行“挖墙”装衣橱！",
    "img": "http://admin.qijiadianshang.com/uploads/images/2022/0917/1_20220917174648_y3X5wWbedW.jpg",
    "description": "传统衣柜在现代的装修中不是很受欢迎，因为它本身需要占据一定的空间，现在卧室内基本的格局都是固定的，加上一个衣柜，会让整体的协调感破坏掉。就有很多人会选择&ldquo;挖墙&rdquo;装衣橱，这样的入墙式衣柜给人感觉就是全部隐藏在墙面内，让",
    "created_at": "2022-09-17"
  },
  {
    "id": 13,
    "title": "卫生间装修做好这5点，一定不踩坑",
    "img": "http://admin.qijiadianshang.com/uploads/images/2022/0828/1_20220828133929_q228NWeBUV.jpg",
    "description": "卫生间对一个家来说承担着非常重的任务，平时的洗漱、洗澡、洗衣服都要在这里进行，所以卫生间装修一定要格外注重质量。 1、淋浴房玻璃 通常情况下我们淋浴房都会用玻璃作为隔断，在很多人心里认为玻璃越厚质量越好，但其实玻璃过厚会导致淋浴房质量过大，",
    "created_at": "2022-08-28"
  },
  {
    "id": 12,
    "title": "家里的灯光设计一定要注意这些问题！",
    "img": "http://admin.qijiadianshang.com/uploads/images/2022/0819/1_20220819141435_dQeuym6JIy.jpg",
    "description": "室内照明是家居设计的核心内容，不同的灯光以及灯具可以改变家里的气氛。照明设计也因房间而异，在起居室放着的灯不一定适用于卧室或者厨房。照明必须反映每个空间的功能和给住户的感受。与室内装饰的任何其他部分一样，照明设计也在不断变化着。 &nbsp",
    "created_at": "2022-08-19"
  }
]
</script>

<style scoped lang="less">

</style>