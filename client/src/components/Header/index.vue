<script setup lang="ts">
import router from "@/router";
import { reactive, ref, watch } from "vue";
import { useRoute } from "vue-router";
import Quit from "./components/Quit.vue";
import UploadMy from "./components/UploadMy.vue";
import Login from "./components/Login.vue";
import { useUserStore } from "@/stores/modules/user";
import { PlusCircleOutlined } from '@ant-design/icons-vue';

const userStore = useUserStore();

const foundation = ref<boolean>(false);

const searchValue = ref();

const quitRef = ref<InstanceType<typeof Quit> | null>(null);
const uploadMyRef = ref<InstanceType<typeof UploadMy> | null>(null);
const loginRef = ref<InstanceType<typeof Login> | null>(null);
const isOnline = ref(true);
const route = useRoute();

watch(
  () => route.path,
  (newPath) => {
    console.log("当前路径：", newPath);
    if (newPath == "/online") {
      isOnline.value = false;
    } else {
      isOnline.value = true;
    }
  },
  { deep: true },
);


const handleToggle = () => {
  foundation.value = !foundation.value;
}

const handleChange = (e: InputEvent) => {
  if (e.target instanceof HTMLInputElement) {
    console.log(e.target.value);
    searchValue.value = e.target.value;
  }
};

const handleRouter = (path: string) => {
  router.push(path);
};

const handleQuit = () => {
  if (quitRef.value) {
    quitRef.value.showModal();
  }
};

const handleImgPic = () => {
  if (!userStore.userInfo.token) {
    handleLogin();
    return;
  }

  if (uploadMyRef.value) {
    uploadMyRef.value.showModal();
  }
};

const handleModel = () => {
  if (!userStore.userInfo.token) {
    handleLogin();
    return;
  }

  router.push("/uploadmodel");
};

const handleLogin = () => {
  if (loginRef.value) {
    loginRef.value.showModal();
  }
};

const messList = reactive([
  { desc: "【双节同庆-创意海报挑战赛】投稿开启！", tag: "2023-09-20 19:59:40" },
  { desc: "【双节同庆-创意海报挑战赛】投稿开启！", tag: "2023-09-20 19:59:40" },
  { desc: "【双节同庆-创意海报挑战赛】投稿开启！", tag: "2023-09-20 19:59:40" },
  { desc: "【双节同庆-创意海报挑战赛】投稿开启！", tag: "2023-09-20 19:59:40" },
  { desc: "【双节同庆-创意海报挑战赛】投稿开启！", tag: "2023-09-20 19:59:40" },
  { desc: "【双节同庆-创意海报挑战赛】投稿开启！", tag: "2023-09-20 19:59:40" },
  { desc: "【双节同庆-创意海报挑战赛】投稿开启！", tag: "2023-09-20 19:59:40" },
  { desc: "【双节同庆-创意海报挑战赛】投稿开启！", tag: "2023-09-20 19:59:40" },
  { desc: "【双节同庆-创意海报挑战赛】投稿开启！", tag: "2023-09-20 19:59:40" },
  { desc: "【双节同庆-创意海报挑战赛】投稿开启！", tag: "2023-09-20 19:59:40" },
  { desc: "【双节同庆-创意海报挑战赛】投稿开启！", tag: "2023-09-20 19:59:40" },
]);

</script>
<template>
  <div class="Header-root flex items-center px-16px" id="widthChangeMobile">
    <div class="Header-left flex flex-1 mr-0.875rem">
      <div class="logo-wrapper flex flex-shrink-0 mr-2rem">
        <span @click="handleToggle" class="sidebarToggle w-32px h-32px mr-16px line-height-32px">
          <i :class="foundation ? 'i-foundation:align-left' : 'i-foundation:align-right'" class="inline-block" />
        </span>
        <a href="/" class="icon_logo"></a>
      </div>
      <form class="searchForm">
        <div class="relative">
          <input
            class="searchInput outline-none hover:!border-[#dfe1ec] focus:border-[#dfe1ec] dark:hover:!border-[rgba(255,255,255,.1)] dark:focus:!border-[rgba(255,255,255,.1)]"
            placeholder="搜索模型/图片/用户名寻找灵感" type="text">
          <div class="rightSection">
            <div class="px-20px searchIconWrapper">
              <span class="i-carbon:search text-18px color-#888 hover:color-#666"></span>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="Header-right flex items-center justify-end">
      <a-button class="!bg-[rgb(236,236,236)] ml-12px" type="text">
        <template #icon>
          <PlusCircleOutlined />
        </template>
        发布
      </a-button>
      <span class="ml-12px">
        <a-button class="!bg-[rgb(236,236,236)]" type="text">登录/注册</a-button>
      </span>
    </div>
    <Quit ref="quitRef"></Quit>
    <UploadMy ref="uploadMyRef"></UploadMy>
    <Login ref="loginRef"></Login>
  </div>
</template>

<style lang="scss">
.Header-root {
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 100;
  height: 3.125rem;
  max-height: 3.125rem;
  position: fixed;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  border-bottom: 0.0625rem solid rgb(233, 236, 239);
}

.icon_logo {
  width: 124px;
  height: 28px;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
  cursor: pointer;
  background-image: url("@/assets/images/logo.svg")
}

.sidebarToggle {
  border-radius: 50%;
  text-align: center;
  font-size: 18px;
  background-color: #f1f2f8;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: rotate(0deg);
}

.searchForm {
  max-width: 570px;
  width: 430px;
  opacity: 0;
  animation: fade-in .2s ease-in forwards;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.searchInput {
  padding-left: 12px;
  padding-right: 100px;
  height: 36px;
  border-color: transparent;
  background-color: var(--color-lighter);
  color: var(--color-modal-text);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  line-height: calc(2.125rem);
  appearance: none;
  resize: none;
  box-sizing: border-box;
  font-size: 0.875rem;
  width: 100%;
  display: block;
  text-align: left;
  border: 0.0625rem solid transparent;
  min-height: 2.25rem;
  border-radius: 0.5rem;
}

.rightSection {
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: auto;
}

.searchIconWrapper {
  box-sizing: border-box;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
}


@media screen and (max-width: 750px) {
  #widthChangeMobile {
    width: 100%;
    min-width: 300px;
  }
}
</style>
