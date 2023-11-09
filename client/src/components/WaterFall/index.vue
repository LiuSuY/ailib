<template>
  <div id="waterfall" ref="waterfallRef">
    <div v-for="(item, index) in waterfallList" ref="waterfallItemRef" class="item" :style="{
      height: item.height + 'px',
      width: '304px',
      marginBottom: '16px',
    }">
      <div class="overflow-hidden rounded-14px w-100% h-100%">
        <Card type="2" :imgUrl="item.url" :piclabel="index % 2 == 0" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, onUpdated } from "vue";
import Card from "../Card/index.vue";

const screenWidth = ref();
const mobilePoints = ref(750);
const gap = ref(16);

const waterfallRef = ref();

const waterfallItemRef = ref();



const props = defineProps<{
  list: Array<{ url: string }>;
}>();

const waterfallList = ref();

const handleWaterfall = (
  columns = Math.floor(
    waterfallRef.value.offsetWidth / waterfallItemRef.value[0].offsetWidth,
  ),
) => {
  let container = waterfallRef.value;
  let items = waterfallItemRef.value;

  let itemWidth = items[0].offsetWidth + gap.value;
  let columnHeight = [];

  for (let i = 0; i < columns; i++) {
    columnHeight[i] = 0;
  }

  for (let i = 0; i < items.length; i++) {
    let minHeight = Math.min.apply(null, columnHeight);
    let minIndex = columnHeight.indexOf(minHeight);

    items[i].style.position = "absolute";
    items[i].style.top = minHeight + "px";
    items[i].style.left = itemWidth * minIndex + "px";

    columnHeight[minIndex] += items[i].offsetHeight + gap.value;
  }

  container.style.height = Math.max.apply(null, columnHeight) + "px";
};

const loading = ref(false);

const mobileCols = ref(false);

const handleResize = () => {
  screenWidth.value = window.innerWidth;
  if (screenWidth.value <= mobilePoints.value) {
    mobileCols.value = true;
    handleWaterfall(1);
  } else {
    mobileCols.value = false;
    handleWaterfall();
  }
};

const handleScroll = () => {
  const bottomDistance =
    document.body.clientHeight - window.innerHeight - window.scrollY;
  if (bottomDistance <= 200) {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      handleWaterfall();
    });
  }
};


onUpdated(() => {
  waterfallList.value = props.list;
  setTimeout(() => {
    handleWaterfall();
  },100)
})

onMounted(() => {
  window.addEventListener("resize", handleResize);
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
  window.removeEventListener("scroll", handleScroll);
});


</script>
