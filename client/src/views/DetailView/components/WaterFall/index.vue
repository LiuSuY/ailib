<script lang="ts" setup>
import WaterFall from "./WaterFallCore/index.vue";
</script>
<template>
  <div class="modelinfo_imgListWrap">
    <div class="ImageList_imgList">
      <div class="ImageList_head">
        <div class="ImageList_titleWrap">
          <div>返图区<span class="ImageList_num">350</span></div>
          <div class="ImageList_hotNewWrap">
            <div class="ImageList_hot ImageList_hotNewSelect">最热</div>
            <div>|</div>
            <div class="ImageList_new">最新</div>
          </div>
        </div>
        <div class="ImageList_pubWrap">
          <div class="ImageList_pub">
            <img src="./icons/pub.png" class="ImageList_pubIcon" />我要晒图
          </div>
        </div>
      </div>

      <div class="ImageList_noticeContent">
        <img
          src="./icons/noticeContentIcon.png"
          class="ImageList_noticeContentIcon"
        />
        <div class="ImageList_noticeContentTitle">作者通知：</div>
        <div class="ImageList_noticeContentDesc">
          新模型版本发布，生图灵感参考话题：#真实摄影#真实人像<br />
          不限于以上话题，大家可以选择自己擅长的方向进行创作哦~还可以搭配其他checkpoint/lora，如小怡同学。<br />
          效果优秀者将置顶
        </div>
      </div>
      <div style="position: relative">
        <WaterFall :colWidth="320" :gutter="16"></WaterFall>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.modelinfo_imgListWrap {
  width: 1440px;
  max-width: 1440px;
  margin: 39px -76px 0 -56px;
  padding: 36px 56px;
  background: #f7f7f7;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
}

.ImageList_imgList {
  width: 100%;
  font-family: PingFang SC;
}

.ImageList_head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 36px;
  color: #333;
  font-weight: 500;
  font-size: 20px;
  line-height: 36px;
}

.ImageList_titleWrap {
  display: flex;
  align-items: center;
}

.ImageList_pubWrap {
  display: flex;
}

.ImageList_num {
  margin-left: 6px;
  color: #828282;
  font-weight: 500;
  font-size: 16px;
  font-style: normal;
  line-height: 22px;
}

.ImageList_hotNewWrap {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 62px;
  color: #999;
  font-weight: 400;
  font-size: 14px;
  font-style: normal;
}

.ImageList_hot {
  margin-right: 12px;
  cursor: pointer;
}

.ImageList_new {
  margin-left: 12px;
  cursor: pointer;
}

.ImageList_hotNewSelect {
  color: #333;
}

.ImageList_pub {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 168px;
  height: 42px;
  color: #fff;
  font-size: 14px;
  background: #3162ff;
  border-radius: 12px;
  cursor: pointer;
}

.ImageList_pubIcon {
  width: 24px;
  height: 24px;
  margin-right: 15px;
}

.ImageList_noticeContent {
  display: flex;
  margin-top: 25px;
  padding-right: 24px;
  background: #fff9ef;
  border: 1px solid #ffe6bf;
  border-radius: 14px;
}

.ImageList_noticeContentIcon {
  width: 24px;
  height: 24px;
  margin-top: 21px;
  margin-left: 24px;
}

.ImageList_noticeContentTitle {
  margin-top: 23px;
  margin-left: 4px;
  color: #333;
  font-weight: 500;
  font-size: 16px;
  font-style: normal;
}

.ImageList_noticeContentDesc {
  flex: 1 1;
  margin-top: 23px;
  margin-bottom: 24px;
  color: #666;
  font-weight: 400;
  font-size: 16px;
  font-family: PingFang SC;
  font-style: normal;
  white-space: pre-wrap;
}
</style>
