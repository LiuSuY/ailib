<script setup lang="ts">
import Header from "@/components/Header/index.vue";
import Filter from "@/components/Filter/index.vue";
import WaterFall from "@/components/WaterFall/index.vue";
import Nav from "@/components/Nav/index.vue";
import Banner from '@/components/Banner/index.vue';
</script>

<template>
  <Header />
  <div class="mantine-body flex">
    <Nav></Nav>
    <main class="mantine-main">

      <div class="main-container" data-no-sidebar="false">
        <Banner></Banner>
        <WaterFall></WaterFall>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.mantine-main {
  flex: 1 1 0%;
  min-height: 100vh;
  padding-top: calc(var(--mantine-header-height, 0px) + 0rem);
  padding-bottom: calc(var(--mantine-footer-height, 0px) + 0rem);
  padding-left: calc(var(--mantine-navbar-width, 0px) + 0rem);
  padding-right: calc(var(--mantine-aside-width, 0px) + 0rem);
  transition: padding-left 400ms ease 0s;
}

.main-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 2318px;
  padding: 1.25rem;
}

@media screen and (min-width: 1280px) {
  .main-container {
    min-width: 1040px
  }

  .main-container[data-no-sidebar=true] {
    margin-left: 44px;
    margin-right: 44px
  }
}

@media screen and (min-width: 1440px) {
  .main-container {
    min-width: 1205px
  }
}

@media screen and (min-width: 1737px) {
  .main-container {
    min-width: 1505px
  }
}

@media screen and (min-width: 2034px) {
  .main-container {
    min-width: 1799px
  }
}

@media screen and (min-width: 2560px) {
  .main-container {
    min-width: 2295px
  }

  .main-container[data-no-sidebar=true] {
    margin-left: auto;
    margin-right: auto
  }
}
</style>
