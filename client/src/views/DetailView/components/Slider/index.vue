<script setup lang="ts">
import Card from "@/components/Card/index.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import img1 from "./img/img1.webp";
import img2 from "./img/img2.webp";
import img3 from "./img/img3.webp";
import img4 from "./img/img4.webp";
</script>

<template>
  <swiper
    class="cusSwiper"
    :allow-touch-move="true"
    :auto-height="true"
    :slides-per-group="2"
    :spaceBetween="16"
    :modules="[Navigation]"
    :slides-per-view="2"
    :autoplay="true"
    navigation
  >
    <swiper-slide>
      <Card type="1" url="/imageinfo" :img-url="img1"></Card>
    </swiper-slide>
    <swiper-slide>
      <Card type="2" url="/imageinfo" :img-url="img2"></Card>
    </swiper-slide>
    <swiper-slide>
      <Card type="2" url="/imageinfo" :img-url="img3"></Card>
    </swiper-slide>
    <swiper-slide>
      <Card type="1" url="/imageinfo" :img-url="img4"></Card>
    </swiper-slide>
    <swiper-slide>
      <Card type="2" url="/imageinfo" :img-url="img1"></Card>
    </swiper-slide>
  </swiper>
</template>

<style scoped lang="scss">
.cusSwiper ::v-deep .swiper-button-disabled {
  display: none;
  cursor: none;
}

.cusSwiper ::v-deep {
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
</style>
