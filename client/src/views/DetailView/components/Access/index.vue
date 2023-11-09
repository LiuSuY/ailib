<script setup></script>
<template>
  <div class="modelinfo_access">
    <div class="modelinfo_head">模型许可范围</div>
    <div class="modelinfo_accessItem">
      <img src="@/assets/icon/tick.png" class="modelinfo_accessIcon" />
      <div class="modelinfo_accessDesc">使用模型用于生图</div>
    </div>
    <div class="modelinfo_accessItem">
      <img src="@/assets/icon/close.png" class="modelinfo_accessIcon" />
      <div class="modelinfo_accessDesc">使用模型进行模型融合</div>
    </div>
    <div class="modelinfo_accessItem">
      <img src="@/assets/icon/circle.png" class="modelinfo_accessIcon" />
      <div class="modelinfo_accessDesc">不可自行出售生成的图片</div>
    </div>
    <div class="modelinfo_accessItem">
      <img src="@/assets/icon/circle.png" class="modelinfo_accessIcon" />
      <div class="modelinfo_accessDesc">不可出售模型或融合后的模型</div>
    </div>
    <div class="modelinfo_accessTip">
      *许可范围为模型创作者设置，使用者需按规范使用模型
    </div>
  </div>
</template>
<style lang="scss" scoped>
.modelinfo_access {
  margin-top: 16px;
  padding: 0 17px;
}

.modelinfo_access .modelinfo_head {
  height: 20px;
  color: #4f4f4f;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}

.modelinfo_access .modelinfo_accessItem {
  display: flex;
  align-items: center;
  height: 14px;
  margin-top: 6px;
  color: #999;
}

.modelinfo_access .modelinfo_accessIcon {
  width: 12px;
  height: 12px;
  margin-right: 6px;
}

.modelinfo_access .modelinfo_accessDesc {
  font-size: 12px;
  transform-origin: left;
}

.modelinfo_access .modelinfo_accessTip {
  margin-top: 2px;
  color: #aeaeae;
  font-size: 12px;
  font-family: PingFang SC;
  line-height: 22px;
  white-space: nowrap;
  transform-origin: left;
}
</style>
