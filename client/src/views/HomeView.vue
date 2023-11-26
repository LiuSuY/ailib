<script setup lang="ts">
import Header from "@/components/Header/index.vue";
import Filter from "@/components/Filter/index.vue";
import WaterFall from "@/components/WaterFall/index.vue";
import Nav from "@/components/Nav/index.vue";
</script>

<template>
  <Header />
  <div class="mantine-body flex">
    <Nav></Nav>
    <main class="mantine-main">

      <div class="main-container">
        <WaterFall></WaterFall>
      </div>
      <!-- <Filter></Filter> -->
      <!-- <div class="relative"> -->
      <!--  -->
      <!-- </div> -->
    </main>
  </div>
  <!-- <main >
    <div>
      
      <div class="main-groupLeft" id="scrollpart">
       
      </div>
      <div class="BackTop_backToTop">
        <a-back-top> </a-back-top>
      </div>
    </div>
  </main> -->
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


.BackTop_backToTop {
  position: fixed;
  right: 72px;
  bottom: 72px;
  text-align: center;
  cursor: pointer;
}
</style>
