<template>
  <div class="relative">
    <div id="waterfall" ref="waterfallRef">
      <div v-for="(item, index) in waterfallList" ref="waterfallItemRef" class="item" :style="{
        height: item.height + 'px',
        width: '292px',
        marginBottom: '16px',
      }">
        <div class="overflow-hidden rounded-14px w-100% h-100%">
          <Card type="2" :imgUrl="item.url" :piclabel="index % 2 == 0" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, onUpdated, reactive } from "vue";
import Card from "../Card/index.vue";
import { useRequest } from "alova";
import { getList } from "@/api/list";

const screenWidth = ref();
const mobilePoints = ref(750);
const gap = ref(16);

const waterfallRef = ref();

const waterfallItemRef = ref();

const emits = defineEmits(['scroll']);


const waterfallList = ref();


const pages = reactive({
  current: 1,
  size: 10
})

const { onError, onSuccess, send: GetScroll } = useRequest(pages => getList(pages), {
  immediate: false,
  initialData: {
    data: [],
    size: 10,
    total: 0,
    current: 1
  }
});

GetScroll(pages);

onSuccess((res) => {
  const { data } = res;
  let result: Array<{ url: string }> = data.data.data
  if (!waterfallList.value) {
    waterfallList.value = result;
  } else {
    waterfallList.value = waterfallList.value.concat(result);
  }

});
onError((res) => {
  console.log(res)
});

const handleWaterfall = (
  column?: number
) => {
  if (!waterfallItemRef.value || !waterfallItemRef.value[0]) return;
  const columns = column || Math.floor(
    waterfallRef.value.offsetWidth / waterfallItemRef.value[0].offsetWidth,
  )
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
    pages.current = pages.current += 1;
    GetScroll(pages);
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      handleWaterfall();
    });
  }
};


onUpdated(() => {
  setTimeout(() => {
    handleWaterfall();
  }, 100)
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
