<script setup lang="ts"></script>
<template>
  <div class="modelinfo_card">
    <div class="modelinfo_head">模型详情</div>
    <div class="modelinfo_body">
      <div class="modelinfo_item">
        <div class="modelinfo_label">类型</div>
        <div class="modelinfo_value">
          <div class="modelinfo_cardType">LORA</div>
        </div>
      </div>
      <div class="modelinfo_item">
        <div class="modelinfo_label">在线生成数</div>
        <div class="modelinfo_value">763</div>
      </div>
      <div class="modelinfo_item">
        <div class="modelinfo_label">下载量</div>
        <div class="modelinfo_value">299</div>
      </div>
      <div class="modelinfo_item">
        <div class="modelinfo_label">基础模型</div>
        <div class="modelinfo_value">SD 1.5</div>
      </div>
      <div class="modelinfo_item">
        <div class="modelinfo_label">触发词</div>
        <div class="modelinfo_value modelinfo_value">
          <div class="modelinfo_trigger">
            <span class="modelinfo_triggerTxt">Qing Kung</span>
            <div class="modelinfo_copy"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.modelinfo_card {
  margin-top: 16px;
  overflow: hidden;
  border: 1px solid #e8eaef;
  border-radius: 14px;
}

.modelinfo_card .modelinfo_head {
  height: 40px;
  padding: 0 17px;
  color: #4f4f4f;
  font-weight: 500;
  font-size: 14px;
  font-family: PingFang SC;
  font-style: normal;
  line-height: 40px;
}

.modelinfo_card .modelinfo_body {
  box-sizing: border-box;
  font-size: 12px;
  border-top: 1px solid #e8eaef;
}

.modelinfo_card .modelinfo_item {
  display: flex;
  justify-content: space-between;
}

.modelinfo_card .modelinfo_label {
  flex-shrink: 0;
  width: 92px;
  min-height: 34px;
  padding-top: 6px;
  padding-left: 17px;
  color: #2d2d2d;
  font-weight: 500;
  background: #f3f3f3;
  border-right: 1px solid #e8eaef;
}

.modelinfo_card .modelinfo_value {
  display: flex;
  flex-wrap: wrap;
  padding: 6px 10px 9px 13px;
}

.modelinfo_card .modelinfo_cardType {
  height: 20px;
  margin-left: -8px;
  padding: 0 8px;
  line-height: 20px;
  background: #f1f2f6;
  border: none;
  border-radius: 14px;
}
</style>
