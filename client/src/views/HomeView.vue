<script setup lang="ts">
import Header from "@/components/Header/index.vue";
import Filter from "@/components/Filter/index.vue";
import WaterFall from "@/components/WaterFall/index.vue";
import Footer from "@/components/Footer/index.vue";
import { useRequest } from "alova";
import { getList } from "@/api/list";
import { ref } from "vue";

// 模拟列表数据
const list = ref();

const { onError, onSuccess } = useRequest(getList());

onSuccess((res) => {
  const { data } = res;
  list.value = data.data;
});
onError((res) => {
  console.log(res)
});


</script>

<template>
  <Header />
  <main class="layout_main" style="padding-bottom: 0">
    <div class="main-group0" id="homePage">
      <Footer></Footer>
      <div class="main-groupLeft" id="scrollpart">
        <Filter></Filter>
        <div class="relative">
          <WaterFall :list="list"></WaterFall>
        </div>
      </div>
      <div class="BackTop_backToTop">
        <a-back-top> </a-back-top>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.layout_main {
  padding: 70px 0 75px;
}

.main-group0 {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding-right: 12px;
  padding-left: 12px;
}

.main-group1 {
  position: relative;
  display: flex;
  width: 124px;
  height: 400px;
  margin-top: 162px;
}

.main-groupLeft {
  flex: 1 1;
  width: calc(100vw - 412px);
}

.BackTop_backToTop {
  position: fixed;
  right: 72px;
  bottom: 72px;
  text-align: center;
  cursor: pointer;
}
</style>
