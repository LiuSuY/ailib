<script setup lang="ts">
import Card from "@/components/Card/index.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Navigation, Thumbs, FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import { ref } from "vue";

const props = defineProps<{
  list: Array<{ url: string }>;
}>();

const thumbsSwiper = ref();

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
};

const cursorRef = ref();

const handleCurrent = (e: Event) => {
  const target = e.target as HTMLElement;
  const parent = target.closest(".minSwiper");
  const parentInfo = parent?.getBoundingClientRect()!;
  const tartgetInfo = target.getBoundingClientRect();
  const cursorInfo = cursorRef.value.getBoundingClientRect();
  if (cursorInfo.left < tartgetInfo.left) {
    cursorRef.value.style.transform = `translate3d(${Math.abs(
      tartgetInfo.left - parentInfo.left - cursorInfo.width / 2 - 2,
    )}px, 0 , 0)`;
  }
  if (tartgetInfo.right < cursorInfo.left) {
    cursorRef.value.style.transform = `translate3d(${Math.abs(
      tartgetInfo.left - parentInfo.left - 2,
    )}px , 0 , 0)`;
  }
};

const handleSlidChange = (swiper: any) => {
  const { activeIndex } = swiper;
  // cursorRef.value.style.transform = `translate3d(${
  //   activeIndex * 120
  // }px , 0 , 0)`;
};
</script>

<template>
  <div style="height: 600px" class="modelinfo_content">
    <swiper
      class="cusSwiper"
      @slide-change="handleSlidChange"
      :keyboard="true"
      :cssMode="true"
      :allow-touch-move="true"
      :auto-height="true"
      :slides-per-group="2"
      :spaceBetween="16"
      :freeMode="true"
      :mousewheel="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :scrollbar="true"
      :modules="[Navigation, Mousewheel, Thumbs]"
      :slides-per-view="2"
      :navigation="{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }"
    >
      <swiper-slide
        style="height: 600px"
        v-for="(item, index) in props.list"
        :key="index"
      >
        <Card type="2" url="/imageinfo" :img-url="item.url"></Card>
      </swiper-slide>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </swiper>
  </div>
  <!-- <div style="height: 60px" class="flex mt-10px">
    <swiper
      @swiper="setThumbsSwiper"
      :freeMode="true"
      :watchSlidesProgress="true"
      :allow-touch-move="true"
      :slides-per-view="props.list.length"
      :spaceBetween="0"
      :modules="[FreeMode, Thumbs]"
      class="minSwiper"
    >
      <swiper-slide
        v-for="(item, index) in props.list"
        :key="index"
        @click="handleCurrent"
      >
        <div class="miniPic" style="height: 60px; width: 60px">
          <img class="thumb_img" :src="item.url" />
        </div>
      </swiper-slide>
      <div class="cursor" ref="cursorRef"></div>
    </swiper>
  </div> -->
</template>

<style scoped lang="scss">
.cusSwiper ::v-deep .swiper-button-disabled {
  display: none;
  cursor: none;
}

.cusSwiper ::v-deep {
  position: relative;

  .swiper-button-prev,
  .swiper-button-next {
    background-color: hsla(0, 0%, 100%, 0.75);
    width: 40px;
    height: 40px;
    border-radius: 50%;

    &::after {
      font-size: 12px;
      color: black;
      position: absolute;
      z-index: 1;
      cursor: pointer;
    }
  }
}

.miniPic {
  width: 60px;
  height: 60px;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.4s;
  padding: 2px;
  position: relative;

  img {
    height: 56px;
    width: 56px;
    border-radius: 2px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: 0.2s;
    box-shadow:
      0 0 0 2px transparent,
      inset 0 0 0 2px transparent;
  }
}

.cursor {
  position: absolute;
  left: 0;
  top: 0;
  width: 120px;
  height: 60px;
  border-radius: 4px;
  border: 2px solid red;
  transition: 0.2s;
  z-index: 10;
}

.thumb_img {
  height: 56px;
  width: 56px;
  border-radius: 2px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.2s;
  box-shadow: 0 0 0 2px transparent;
}

.minSwiper ::v-deep {
  .swiper-slide {
    width: 60px !important;
  }

  .swiper-wrapper {
    height: 60px !important;
  }
}
</style>
