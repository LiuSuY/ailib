<script setup lang="ts">
import Slider from "./Slider/index.vue";
import back from "./images/arrow_left.png";
import router from "@/router";
import ModelInfoCard from "./components/ModelInfoCard/index.vue";
import Access from "./components/Access/index.vue";
import Comment from "./components/Comment/index.vue";
import test from "./images/test.webp";
import test2 from "./images/test2.webp";
import test3 from "./images/test3.webp";
import test4 from "./images/test4.webp";
import test5 from "./images/test5.webp";
import test6 from "./images/test6.webp";
import { ref } from "vue";

const list = ref([
  { url: test },
  { url: test2 },
  { url: test3 },
  { url: test4 },
  { url: test5 },
  { url: test6 },
]);

const handleBack = () => {
  router.go(-1);
};
</script>
<template>
  <div class="imageinfo_imageDetailpage">
    <div class="imageinfo_back" @click="handleBack">
      <img :src="back" alt="" />
    </div>
    <div class="imageinfo_imgpageContainer">
      <div class="imageinfo_imgpagesliderView">
        <div class="imageinfo_blockElement">
          <Slider :list="list"></Slider>
        </div>
      </div>
      <div class="imageinfo_imageDetailMask">
        <div style="min-width: 420px">
          <div class="InfoBox_mod">
            <div class="InfoBox_header">
              <div class="InfoBox_group">
                <img
                  style="width: 60px; height: 60px"
                  src="./images/photo.webp"
                />
              </div>
              <div class="InfoBox_block">关注</div>
            </div>
            <div class="InfoBox_info">
              <h4></h4>
              <div class="InfoBox_remark">
                <div></div>
              </div>
              <p class="InfoBox_time">2023-10-13</p>
            </div>
            <div class="InfoBox_likeArea">
              <div class="InfoBox_itemWrapper">
                <img
                  src="./images/heart.png"
                  alt=""
                  style="width: 28px; height: 28px; cursor: pointer"
                />
                <span class="InfoBox_itemText">0</span>
              </div>
              <div class="InfoBox_itemWrapper">
                <img
                  src="./images/comment.png"
                  alt=""
                  style="width: 24px; height: 24px"
                />
                <span class="InfoBox_itemText">0</span>
              </div>
            </div>
            <ModelInfoCard></ModelInfoCard>
            <div class="mb-[20px]">
              <Access></Access>
            </div>
            <Comment></Comment>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.imageinfo_imageDetailpage {
  width: 100%;
  padding: 40px 100px;
  overflow: auto;
  background-color: #eee;
}

.imageinfo_imageDetailpage .imageinfo_back {
  position: absolute;
  top: 40px;
  left: 23px;
  z-index: 12;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
}

.imageinfo_imageDetailpage .imageinfo_back img {
  width: 25px;
  height: 21px;
}

.imageinfo_imageDetailpage .imageinfo_imgpageContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1240px;
  height: calc(100vh - 80px);
  margin: 0 auto;
  overflow: hidden;
  background-color: #fff;
  border-radius: 32px;
}

.imageinfo_imgpagesliderView {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 652px;
  height: 100%;
  border-right: 1px solid #ddd;
}

.imageinfo_blockElement {
  height: inherit;
  overflow: hidden;
}

.imageinfo_imageDetailMask {
  width: 589px;
  height: 100%;
  padding: 30px 44px;
  overflow-y: auto;
  background-color: #fff;
}

.InfoBox_mod {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 420px;
}

.InfoBox_mod .InfoBox_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
}

.InfoBox_mod .InfoBox_header .InfoBox_group {
  display: flex;
  align-items: center;
  font-size: 24px;
}

.InfoBox_mod .InfoBox_header .InfoBox_group img {
  margin-right: 16px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
}

.InfoBox_header .InfoBox_block {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 68px;
  height: 40px;
  color: #fff;
  background: #384455;
  border-radius: 12px;
  cursor: pointer;
}

.InfoBox_mod .InfoBox_info .InfoBox_remark {
  margin-bottom: 20px;
  color: #333;
  font-weight: 500;
  font-size: 14px;
  font-family: PingFang SC;
  font-style: normal;
  line-height: 20px;
}

.InfoBox_mod .InfoBox_info .InfoBox_time {
  margin-bottom: 20px;
  color: #999;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
}

.InfoBox_likeArea {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 16px 0 12px;
}

.InfoBox_mod .InfoBox_likeArea {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 16px 0 12px;
}

.InfoBox_mod .InfoBox_likeArea .InfoBox_itemWrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 8px;
}

.InfoBox_mod .InfoBox_likeArea .InfoBox_itemText {
  margin-left: 2px;
  color: #616161;
  font-weight: 600;
  font-size: 14px;
  font-style: normal;
  line-height: 16px;
}
</style>
