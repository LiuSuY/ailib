<script setup lang="ts"></script>

<template>
  <div class="ImageList_basic">
    <div class="ImageList_cardTitle">用了11个lora</div>
    <div class="ImageList_intro">
      <div class="ImageList_author">
        <img
          class="ImageList_avatar"
          src="@/assets/avator.webp"
        /><span class="ImageList_name">杜达</span
        ><span class="ImageList_time">2023/8/11</span>
      </div>
      <div class="ImageList_summary">
        <div class="ImageList_sumItem">
          <img class="ImageList_sumIcon" src="@/assets/icon/info.png" /><span
            class="ImageList_sumNum"
            >3</span
          >
        </div>
        <div class="ImageList_sumItem">
          <img class="ImageList_sumIcon" src="@/assets/icon/heart.png" /><span
            class="ImageList_sumNum"
            >39</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.ImageList_basic {
  margin-top: 8px;
  padding: 0 15px 0 9px;
}

.ImageList_cardTitle {
  color: #000;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
}

.ImageList_intro {
  display: flex;
  justify-content: space-between;
  height: 20px;
  margin-top: 2px;
}

.ImageList_author {
  display: flex;
  align-items: center;
}

.ImageList_avatar {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
}

.ImageList_name {
  max-width: 89px;
  margin-left: 8px;
  overflow: hidden;
  color: #000;
  font-size: 12px;
  line-height: 18px;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.ImageList_time {
  margin-left: 8px;
  color: #999;
  font-size: 20px;
  transform: scale(0.5);
  transform-origin: left;
}

.ImageList_summary {
  display: flex;
  align-items: flex-end;
}

.ImageList_sumItem {
  display: flex;
  align-items: center;
  margin-left: 6px;
}

.ImageList_sumIcon {
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.ImageList_sumNum {
  min-width: 10px;
  margin-left: 2px;
  color: #000;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
}
</style>
