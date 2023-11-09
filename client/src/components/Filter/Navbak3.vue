<script lang="ts" setup>
import { reactive, ref } from "vue";
const labels = reactive([
  "全部",
  "新手必备",
  "插画",
  "建筑及空间设计",
  "XL",
  "2.5D",
  "男生",
  "品牌及视觉设计",
  "中秋特辑",
  "机甲",
  "游戏",
  "中国风",
  "室内设计",
  "动漫",
  "工业设计",
  "pose",
  "国风季",
  "植物",
  "人文景观",
  "自然风景",
  "摄影",
  "汽车",
  "王者荣耀",
  "产品设计",
  "UI设计",
  "产品包装",
  "海报设计",
  "logo设计",
  "局部优化",
  "风格",
  "真实感",
]);
const activeLabel = ref("全部");
const tagBox = ref();

const tagBoxScroll = ref();

const handleLabel = (label: string) => {
  activeLabel.value = label;
};

const lastScrollLeft = ref(0);

const sumScroll = ref(true);

const hideButton = (container: HTMLElement) => {
  const isScrollRightmost =
    container.scrollLeft === container.scrollWidth - container.clientWidth;
  console.log(container);
  if (isScrollRightmost) {
    sumScroll.value = false;
  } else {
    sumScroll.value = true;
  }
};

const handleScroll = (e: Event) => {
  if (e.target) {
    const container = e.target as HTMLElement;
    console.log(container.scrollLeft);
    lastScrollLeft.value = container.scrollLeft;
    hideButton(container);
  }
};

const handlePrevPage = () => {
  const container = tagBox.value;
  const scrollContainer = container as HTMLElement;
  scrollContainer.scrollLeft -= container.clientWidth;
  const tagScrll = tagBoxScroll.value as HTMLElement;
  lastScrollLeft.value = scrollContainer.scrollLeft;
  tagScrll.style.transform = "translateX(0px)";
  hideButton(container);
};

const handleNextPage = () => {
  const container = tagBox.value;
  lastScrollLeft.value = container.clientWidth;
  const tagScrll = tagBoxScroll.value as HTMLElement;
  tagScrll.style.transform = `translateX(-1000px)`;
  hideButton(tagScrll);
};
</script>
<template>
  <div class="Filter_body tagBoxSelect" ref="tagBox" @scroll="handleScroll">
    <div class="Filter_tagBox" ref="tagBoxScroll">
      <div
        v-for="label in labels"
        :key="label"
        @click="handleLabel(label)"
        :class="
          activeLabel == label
            ? 'Filter_tagWrapperItemon'
            : 'Filter_tagWrapperItem'
        "
        class=""
      >
        <span
          :class="activeLabel == label ? 'Filter_tagSelected' : 'Filter_tagon'"
          >{{ label }}</span
        >
      </div>
    </div>
  </div>
  <div
    class="Filter_group2"
    v-show="lastScrollLeft > 0"
    @click="handlePrevPage"
  >
    <div class="Filter_iconCircleWrapper2">
      <svg
        class="Filter_iconIcon"
        width="7"
        height="12"
        viewBox="0 0 7 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 1L1 6L6 11"
          stroke-width="1.7"
          stroke-linejoin="round"
        ></path>
      </svg>
    </div>
  </div>
  <div class="Filter_group1" v-show="sumScroll" @click="handleNextPage">
    <div class="Filter_iconCircleWrapper">
      <svg
        class="Filter_iconIcon"
        width="7"
        height="12"
        viewBox="0 0 7 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L6 6L1 11"
          stroke-width="1.7"
          stroke-linejoin="round"
        ></path>
      </svg>
    </div>
  </div>
</template>

<style scoped lang="scss">
.Filter_body {
  position: relative;
  width: 100%;
  overflow-y: auto;
}

.Filter_tagBox {
  position: relative;
  display: flex;
  align-items: flex-end;
  width: -moz-fit-content;
  width: fit-content;
  transform: translate3d(0px, 0px, 0px);
  transition: all 0.5s ease-in-out;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.Filter_tagBox::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.Filter_tagBox::-webkit-scrollbar-thumb {
  background: fade(transparent, 60%);
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px transparent;
  opacity: 0.2;
}

.Filter_tagBox::-webkit-scrollbar-track {
  background: fade(transparent, 30%);
  border-radius: 0;
  -webkit-box-shadow: inset 0 0 5px transparent;
}

.Filter_tagWrapperItem {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  margin-right: 16px;
  padding: 0 12px;
  color: #333;
  border-radius: 19px;
  cursor: pointer;
}

.Filter_tagWrapperItem:hover {
  background-color: #f1f2f6;
  border-radius: 19px;
}

.Filter_tagWrapperItemon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  margin-right: 16px;
  padding: 0 12px;
  color: #000;
  background-color: #e9e9e9;
  border-radius: 19px;
}

.Filter_tagSelected {
  font-weight: 500;
}

.Filter_tagSelected,
.Filter_tagon {
  max-width: 112px;
  overflow: hidden;
  font-size: 14px;
  text-align: center;
  text-overflow: ellipsis;
}

.Filter_tagon {
  font-weight: 400;
}

.Filter_group1 {
  right: 0;
  background-image: linear-gradient(270deg, #fdffff 40%, hsla(0, 0%, 100%, 0));
}

.Filter_group1,
.Filter_group2 {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  line-height: normal;
  white-space: normal;
}

.Filter_group2 {
  left: 0;
  background-image: linear-gradient(270deg, hsla(0, 0%, 100%, 0) 40%, #fdffff);
}

.Filter_group2 .Filter_iconCircleWrapper2 {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-right: 68px;
  cursor: pointer;
}

.Filter_group2 .Filter_iconCircleWrapper2 .Filter_iconIcon {
  stroke: #191919;
}

.Filter_group2 .Filter_iconCircleWrapper2 .Filter_iconIcon:hover {
  stroke: #666;
}

.Filter_iconCircleWrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-left: 68px;
  cursor: pointer;
}

.Filter_iconCircleWrapper .Filter_iconIcon {
  stroke: #191919;
}

.Filter_iconCircleWrapper .Filter_iconIcon:hover {
  stroke: #666;
}

.Filter_iconCircle {
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
}

.Filter_iconRight {
  position: relative;
  width: 14px;
  height: 14px;
}
</style>
