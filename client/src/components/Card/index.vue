<script setup lang="ts">
import router from "@/router";

const props = defineProps({
  type: {
    type: String,
    default: "1",
  },
  url: {
    type: String,
    default: "/Detail",
  },
  imgUrl: {
    type: String,
    default: "",
  },
  piclabel: {
    type: Boolean,
    default: false,
  },
});

const handleDetail = () => {
  router.push(props.url);
};
</script>

<template>
  <div
    v-if="props.type == '1'"
    class="modelList_groupItemWaterFall mainImage"
    style="width: 100%; left: 0px; top: 0px; height: 100%"
  >
    <span
      @click="handleDetail"
      target="_blank"
      class="modelList_block44 modelList_block4"
      rel="noreferrer"
      style="width: 100%px; height: 100%; background: rgb(241, 242, 246)"
    >
      <div class="ant-image" style="width: 100%; height: 100%x">
        <img
          class="mainImage ant-image-img"
          src="@/assets/banner.webp"
          width="100%"
          height="100%"
          style="height: 100%; width: 100%"
        />
      </div>
    </span>
  </div>
  <div
    v-if="props.type == '2'"
    class="modelList_groupItemWaterFall mainImage"
    style="top: 0px; height: 100%"
  >
    <span
      href="javascript:;"
      @click="handleDetail"
      target=""
      class="modelList_block44 modelList_block4"
      rel="noreferrer"
      style="width: 100%; height: 100%; background: rgb(241, 242, 246)"
    >
      <a-image
        :src="props.imgUrl"
        style="width: 100%; height: 100%"
        :preview="false"
      ></a-image>
      <img
        v-if="props.piclabel"
        class="modelList_piclabel"
        src="@/assets/icon/djicon.png"
      />
      <div class="modelList_tagWrapper1">
        <span class="modelList_tag17" style="font-weight: 500">LORA</span>
      </div>
      <div class="modelList_containerModelFootter">
        <div
          style="
            display: flex;
            width: 100%;
            padding-bottom: 6px;
            align-items: center;
          "
        >
          <span class="modelList_subtitle">None-复古失真胶片-纯净版</span>
        </div>
        <div class="modelList_wrapper">
          <div class="modelList_group7">
            <div class="modelList_colItem1">
              <img
                class="modelList_dot5"
                src="@/assets/icon/yx.png"
                style="width: 14px; height: 14px"
              />
              <span class="modelList_label1">165</span>
            </div>
            <div class="modelList_colItem1">
              <img
                class="modelList_dot5"
                src="@/assets/icon/dd.png"
                style="width: 14px; height: 14px"
              />
              <span class="modelList_label1">129</span>
            </div>
            <div class="modelList_colItem1">
              <img
                class="modelList_dot5"
                src="@/assets/icon/cc.png"
                style="width: 14px; height: 14px"
              />
              <span class="modelList_word">6</span>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modelList_headIcon"
        style="width: 100px; display: flex; flex-direction: row"
      >
        <div class="modelList_photo">
          <img
            :src="props.imgUrl"
            style="width: 18px; height: 18px; border-radius: 9px"
          />
        </div>
        <span class="modelList_text">None_</span>
      </div>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.modelList_groupItemWaterFall {
  margin-right: 0;
  border-radius: 12px;
}

.mainImage .ant-image {
  overflow: hidden;
  border-radius: 14px;
}

.modelList_block4 {
  margin-bottom: 16px;
}

.modelList_block44,
.modelList_block4 {
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 100%;
  min-width: 304px;
  min-height: 150px;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
}

.modelList_block4 {
  margin-bottom: 16px;
}

.modelList_block44,
.modelList_block4 {
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 100%;
  min-width: 304px;
  min-height: 150px;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
}

a {
  text-decoration: none;
}

.modelList_piclabel {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 75px;
  height: 24px;
}

.modelList_tagWrapper1 {
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 21px;
  padding-right: 8px;
  padding-left: 8px;
  line-height: 12px;
  white-space: nowrap;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 11px;
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  transition: transform;
}

.modelList_tag17 {
  color: #fff;
  font-size: 12px;
  text-align: left;
}

.modelList_containerModelFootter {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 304px;
  height: 166px;
  padding: 106px 12px 12px;
  background: linear-gradient(180deg, transparent 12.6%, rgba(0, 0, 0, 0.7));
}

.modelList_headIcon {
  position: absolute;
  bottom: 12px;
  left: 12px;
  z-index: 0;
  width: 20px;
  height: 20px;
}

.modelList_wrapper {
  position: relative;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: flex-end;
  width: 100%;
}

.modelList_group7 {
  display: flex;
  align-items: center;
  padding-top: 4px;
  border-radius: 14px;
}

.modelList_group7 .modelList_colItem1 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 14px;
  margin-right: 4px;
  border-radius: 7px;
}

.modelList_dot5 {
  width: 10px;
  height: 10px;
  margin-right: 2px;
  margin-left: 4px;
}

.modelList_label1,
.modelList_likeNum {
  color: #fff;
  font-size: 10px;
  white-space: nowrap;
  text-align: left;
}

.modelList_label1 {
  line-height: 10px;
}

.modelList_subtitle {
  position: relative;
  max-width: calc(100% - 58px);
  overflow: hidden;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  text-align: left;
  text-overflow: ellipsis;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
}

.modelList_word {
  color: #fff;
  font-size: 10px;
  line-height: 10px;
  white-space: nowrap;
  text-align: left;
}

.modelList_headIcon img {
  object-fit: cover;
}

.modelList_text {
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  white-space: nowrap;
  color: #fff;
  padding-left: 4px;
  text-shadow: rgba(0, 0, 0, 0.25) 0px 1px 1px;
}

.modelList_photo {
  width: 20px;
  height: 20px;
  padding: 1px;
  border-radius: 10px;
  background: rgb(255, 255, 255);
  display: flex;
  align-items: content;
}
</style>
