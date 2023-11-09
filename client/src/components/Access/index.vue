<script setup lang="ts">
const props = defineProps<{
  fontSize: number;
  list: Array<{
    status: "success" | "error";
    title: string;
  }>;
}>();
</script>
<template>
  <div class="modelinfo_access">
    <slot name="head" v-if="$slots.head"></slot>
    <div class="modelinfo_head" v-else>模型许可范围</div>
    <div
      class="modelinfo_accessItem"
      v-for="(item, index) in props.list"
      :key="index"
    >
      <img
        v-if="item.status === 'success'"
        src="./images/tick.png"
        class="modelinfo_accessIcon"
      />
      <img
        v-else-if="item.status === 'error'"
        src="./images/close.png"
        class="modelinfo_accessIcon"
      />
      <img v-else src="./images/circle.png" class="modelinfo_accessIcon" />
      <div
        class="modelinfo_accessDesc"
        :style="{ 'font-size': fontSize + 'px' }"
      >
        {{ item.title }}
      </div>
    </div>
    <slot name="accessTip" v-if="$slots.accessTip"></slot>
    <div class="modelinfo_accessTip" v-else>
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
