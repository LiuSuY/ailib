<script lang="ts" setup>
import { reactive, ref } from "vue";
import { LeftOutlined, RightOutlined } from "@ant-design/icons-vue";
const labelIndex = ref(0);
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
const currentPage = ref(0);

const maxPage = ref(3);
const handleLabel = (index: number) => {
  labelIndex.value = index;
};

const handleNextPage = () => {
  if (currentPage.value + 1 >= maxPage.value) {
    currentPage.value = maxPage.value;
  } else {
    currentPage.value = currentPage.value + 1;
  }
};

const handlePrevPage = () => {
  if (currentPage.value - 1 <= 0) {
    currentPage.value = 0;
  } else {
    currentPage.value = currentPage.value - 1;
  }
};
</script>
<template>
  <div class="tagBoxSelect">
    <div class="filter_tagBox" style="translate3d(0px, 0px, 0px)">
      <div
        class="filter_tagWrapperItem"
        :style="[labelIndex == index ? 'background-color:#e9e9e9' : '']"
        v-for="(label, index) in labels"
        :key="label"
        @click="handleLabel(index)"
      >
        <span
          :class="labelIndex == index ? 'filter_tagSelected' : 'filter_tagon'"
          >{{ label }}</span
        >
      </div>
    </div>
  </div>
  <div class="filter_group_Left" v-if="currentPage > 0" @click="handlePrevPage">
    <div class="filter_iconCircleWrapper">
      <LeftOutlined :style="{ fontSize: '12px', fontWeight: 600 }" />
    </div>
  </div>
  <div
    class="filter_group_Right"
    v-if="currentPage < maxPage"
    @click="handleNextPage"
  >
    <div class="filter_iconCircleWrapper">
      <RightOutlined :style="{ fontSize: '12px', fontWeight: 600 }" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tagBoxSelect {
  position: relative;
  width: 100%;
  overflow-y: auto;
}

.filter_tagBox {
  position: relative;
  display: flex;
  align-items: flex-end;
  width: -moz-fit-content;
  width: fit-content;
  transition: all 0.5s ease-in-out;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.filter_tagSelected {
  max-width: 112px;
  overflow: hidden;
  font-size: 14px;
  text-align: center;
  text-overflow: ellipsis;
  font-weight: 500;
}

.filter_tagWrapperItem {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  margin-right: 16px;
  padding: 0 12px;
  color: #000;
  border-radius: 19px;
  cursor: pointer;
}

.filter_tagon {
  font-weight: 400;
  max-width: 112px;
  overflow: hidden;
  font-size: 14px;
  text-align: center;
  text-overflow: ellipsis;
}

.filter_group_Left {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  line-height: normal;
  white-space: normal;
  left: 0;
  background-image: linear-gradient(270deg, #fdffff 40%, hsla(0, 0%, 100%, 0));
}

.filter_group_Right {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  line-height: normal;
  white-space: normal;
  right: 0;
  background-image: linear-gradient(270deg, #fdffff 40%, hsla(0, 0%, 100%, 0));
}

.filter_iconCircleWrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-left: 68px;
  cursor: pointer;
}
</style>
