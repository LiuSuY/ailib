<script setup>
import { ref } from 'vue';
const tagList = ref([
    { label: 'Turbo', value: 'Turbo' },
    { label: '游戏角色', value: '游戏角色' },
    { label: '3D', value: '3D' },
    { label: '电商', value: '电商' },
    { label: '美女', value: '美女' },
    { label: 'XL', value: 'XL' },
])
import Slider from './Slider/index.vue';
const tagIndex = ref < Number > (1);
</script>
<template>
    <div class="relative mb-4">
        <img src="./images/bg.svg" class="absolute z-0 -top-5 -left-5 h-auto pointer-events-none" alt="开启你的灵感来源" />
        <div class="relative flex flex-row items-center banner-box">
            <form class="banner-search">
                <div class="input-wrapper relative flex flex-row items-center rounded-md origin-left mr-10px">
                    <input type="text"
                        class="relative z-10 flex-1 pl-3 pr-24 self-stretch bg-background outline-none rounded text-sm text-black/80 dark:text-white placeholder:text-gray-400 font-medium"
                        maxlength="128" placeholder="搜索模型/图片/用户名寻找灵感" value="">
                    <button
                        class="flex items-center justify-center absolute z-10 right-[6px] w-20 h-8 bg-gradient-to-r from-[#1b7bff] to-[#2269ff] text-white overflow-hidden rounded">
                        <i class="i-carbon:search text-size-15px text-color-[rgb(255, 255, 255)]"></i>
                        <span class="ml-1 text-sm">搜索</span>
                    </button>
                </div>
                <div class="flex items-center flex-wrap max-lg:w-auto max-lg:self-center mt-4">
                    <span class="flex-shrink-0 mr-2 text-sm text-[#666] dark:text-white/60">推荐词：</span>
                    <a v-for="(item, index) in tagList" target="_blank" :class="tagIndex == index ? 'tagActive' : ''"
                        class="flex items-center flex-shrink-0 h-6 mr-2 px-2 bg-white dark:bg-[#1C1D29] dark:bg border border-transparent hover:border-#cccdd3 rounded-full text-sm text-#222"
                        href="/search?keyword=Turbo">{{ item.label }}</a>
                </div>
            </form>
            <div class="relative overflow-hidden rounded-lg flex-1 ml-[18px] banner-content">
                <Slider :list="[
                    { url: 'http://127.0.0.1:3000/images/b21182909319ccbc3984c4b608e49953922dbd01be56c95e730e950680f3e08d.webp' },
                    { url: 'http://127.0.0.1:3000/images/006a0426f26290f8e223325015ac8ade1b637358ccbcb33bf135163e1a6f0b13.webp' },
                    { url: 'http://127.0.0.1:3000/images/d42c13b68b596f4b99f48f1f5bb2564c8de3b6af613ddc900141804ec1d16899.webp' },
                    { url: 'http://127.0.0.1:3000/images/898fc34967a21bbdcc0184e58a3efddd4d784b236eb90fb0f493403b646d695f.webp' },
                    { url: 'http://127.0.0.1:3000/images/2b312ef98665f47735da053021f7ebabaf5f03f3af521f96fd3348b0acc2744c.webp' },
                    { url: 'http://127.0.0.1:3000/images/920ddfa97b175dac71ccca7ca62d898b03da1256399497f83d2dbf7adfa4d7a9.webp' }
                ]"></Slider>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.banner-search {
    display: flex;
    flex-direction: column;
    min-width: 428px;
    width: 36.73%;
    min-height: 82px;
}

.input-wrapper {
    min-height: 44px;
    padding: 2px;
    background-color: #2596ff;
    background-image: linear-gradient(to right bottom, #2596ff, #297fff);
    box-shadow: 0 2px 10px rgba(0, 0, 0, .05);
}

.tagActive {
    border-color: #cccdd3;
}

@media screen and (max-width: 1180px) {
    .banner-box {
        flex-direction: column;
    }
}


@media (max-width: 1180px) {
    .banner-content {
        width: 100%;
        margin-top: 1rem;
        margin-left: 0;
    }

}
</style>