<script lang="ts" setup>
import NavItem from '../NavItem/index.vue';
</script>

<template>
  <div class="mantine-footer w-220px">
    <ul class="px-4">
      <NavItem>
        <template #icon>
          <span class="i-tdesign:user mr-8px"></span>
        </template>
        个人中心
      </NavItem>
    </ul>
    <div class="py-6">
      <div class="flex justify-between flex-wrap px-5 text-#aaa dark:text-[rgba(255,255,255,.4)]">
        <a class="text-xs leading-7 hover:opacity-80" href="/document/article_member">用户协议</a>
        <a class="text-xs leading-7 hover:opacity-80" href="/document/article_private">隐私政策</a>
        <a class="text-xs leading-7 hover:opacity-80" href="/document/about">关于我们</a>
        <a class="text-xs leading-7 hover:opacity-80" href="https://www.beian.gov.cn/portal/registerSystemInfo"
          rel="noreferrer">京ICP备2023015442123123号</a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
