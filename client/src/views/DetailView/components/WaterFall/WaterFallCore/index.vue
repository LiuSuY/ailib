<template>
  <div class="ImageList_imgContainer">
    <Waterfall
      :list="items"
      :width="320"
      :gutter="16"
      :hasAroundGutter="false"
      :backgroundColor="'transparent'"
    >
      <template #item="{ item, url, index }">
        <div :style="{ height: item.height + 60 + 'px' }">
          <div :style="{ height: item.height + 'px' }">
            <img :src="item.url" class="ImageList_imgItem" />
          </div>
          <Card></Card>
        </div>
      </template>
    </Waterfall>
  </div>
</template>

<script setup lang="ts">
import { LazyImg, Waterfall } from "vue-waterfall-plugin-next";
import "vue-waterfall-plugin-next/dist/style.css";

import img1 from "../img/img1.webp";
import img2 from "../img/img2.webp";
import img3 from "../img/img3.webp";
import img4 from "../img/img4.webp";
import Card from "../../Card/index.vue";
import { onBeforeUnmount, onMounted, ref } from "vue";
const items = ref([
  { height: 640, url: img1 },
  { height: 480, url: img2 },
  { height: 640, url: img3 },
  { height: 480, url: img4 },
  { height: 213, url: img4 },
  { height: 640, url: img3 },
  { height: 640, url: img2 },
  { height: 640, url: img1 },
  { height: 480, url: img4 },
  { height: 512, url: img3 },
  { height: 640, url: img1 },
  { height: 480, url: img2 },
  { height: 640, url: img3 },
  { height: 480, url: img4 },
  { height: 213, url: img4 },
  { height: 640, url: img3 },
  { height: 640, url: img2 },
  { height: 640, url: img1 },
  { height: 480, url: img4 },
  { height: 512, url: img3 },
]);

const loading = ref(false);

const handleScroll = () => {
  const bottomDistance =
    document.body.clientHeight - window.innerHeight - window.scrollY;
  if (bottomDistance <= 200) {
    loading.value = true;
    for (let i = 0; i < 20; i++) {
      const min = 100;
      const max = 600;
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      items.value.push({ height: randomNumber, url: i % 4 == 0 ? img1 : img2 });
    }

    setTimeout(() => {
      loading.value = false;
    });
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
.ImageList_imgContainer {
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
}

.ImageList_imgItem {
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 14px;
  object-fit: cover;
  object-position: center top;
}
</style>
