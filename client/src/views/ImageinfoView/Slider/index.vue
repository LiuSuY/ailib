<script setup lang="ts">
import Card from "@/components/Card/index.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const props = defineProps<{
  list: Array<{ url: string }>;
}>();
</script>

<template>
  <swiper
    class="cusSwiper imageinfo_customImageWrapper"
    :allow-touch-move="true"
    :auto-height="false"
    :slides-per-group="1"
    :spaceBetween="32"
    :modules="[Navigation]"
    :slides-per-view="1"
    :autoplay="true"
    navigation
  >
    <swiper-slide
      class="imageinfo_imgBox relative"
      v-for="(item, index) in props.list"
      :key="index"
    >
      <div class="imageinfo_longBannerBox h-100%">
        <a-image
          class="ant-image-img imageinfo_longBanner w-100%"
          :src="item.url"
          :previewMask="false"
        />
        <div class="imageinfo_imgDown">
          <img src="../images/download3.png" class="imageinfo_copyImg" />
          <span>下载原图</span>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style scoped lang="scss">
.cusSwiper ::v-deep .swiper-button-disabled {
  display: none;
  cursor: none;
}

.cusSwiper ::v-deep {
  .swiper-button-prev {
    left: 40px;
  }

  .swiper-button-next {
    right: 40px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    background-color: hsla(0, 0%, 100%, 1);

    position: absolute;
    top: 50%;
    z-index: 3;
    width: 46px;
    height: 46px;
    transform: translateY(-50%);
    cursor: pointer;
    border-radius: 50%;

    &::after {
      font-size: 14px;
      color: black;
      position: absolute;
      z-index: 1;
      cursor: pointer;
    }
  }

  div.ant-image {
    position: relative;
    display: flex;
    justify-content: center;
    height: 100%;
  }
}

.imageinfo_imgBox {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
}

.imageinfo_longBannerBox {
  position: relative;
  display: flex;
  justify-content: center;
}

.imageinfo_longBannerBox {
  position: relative;
  display: flex;
  justify-content: center;
}

.imageinfo_longBannerBox .ant-image-mask-info {
  opacity: 0;
}

.ant-image {
  position: relative;
  display: inline-block;
}

.imageinfo_longBannerBox .imageinfo_imgDown img {
  margin-right: 4px;
}

.imageinfo_longBannerBox .imageinfo_copyImg {
  height: 20px;
}

.imageinfo_longBanner {
  cursor: pointer;
}

.imageinfo_customImageWrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  min-width: 482px;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.imageinfo_longBannerBox .imageinfo_imgDown {
  position: absolute;
  right: 32px;
  bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 98px;
  height: 28px;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 21px;
  cursor: pointer;
}
</style>
