<script lang="ts" setup>
import { ref } from 'vue';
import NavItem from '../NavItem/index.vue';

const listIndex = ref(1);

const handleSwitch = (val: number) => {
  listIndex.value = val;
}
</script>

<template>
  <div class="mantine-top w-220px">
    <div class="flex w-full flex-col">
      <div class="px-4">
        <div class="px-3 pt-4 leading-none">
          <span class="text-xs font-normal text-gray-400">探索</span>
        </div>
        <ul class="py-4 space-y-2">
          <NavItem :class="listIndex == 1 ? 'active' : ''" @click="handleSwitch(1)">
            <template #icon>
              <span class="i-tabler:home mr-8px text-18px"></span>
            </template>
            哩布首页
          </NavItem>
          <NavItem :class="listIndex == 2 ? 'active' : ''" @click="handleSwitch(2)">
            <template #icon>
              <span class="i-tabler:home mr-8px text-18px"></span>
            </template>
            作品灵感
          </NavItem>
        </ul>
        <div class="h-[1px] border-b border-gray-100 dark:border-[#ffffff]/5"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.mantine-top {
  flex: 1 1 0%;
}

.item-inner {
  position: relative;
  display: block;
  padding: 12px 8px;
  cursor: pointer;
}

.item-box {
  border-radius: 8px;
  border: 1px dashed transparent;

  &.active {
    background-color: var(--color-background-secondary);
    color: var(--color-text);
  }
}

.active {
  .item-arrow {
    position: absolute;
    left: -17px;
    top: 56%;
    transform: translateY(-50%);
    width: 32px;
    height: 76px;
    display: inline-block;
    background-repeat: no-repeat;
    background-position: 0;
    background-size: 32px 76px;
    animation: item-arrow-show .3s ease-in-out;
    background-image: url('../images/active.png');
  }


  .icon-active {
    background-image: linear-gradient(90deg, #2d28ff, #1a7dff);
  }
}




@keyframes item-arrow-show {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }

  100% {
    transform: translateY(-50%);
    opacity: 1;
  }
}


@media screen and (max-width: 750px) {
  #hiddenInMobile {
    display: none;
  }
}
</style>
