<script setup lang="ts">
import router from "@/router";
import { reactive, ref, watch } from "vue";
import { useRoute } from "vue-router";
import Quit from "./components/Quit.vue";
import UploadMy from "./components/UploadMy.vue";
import Login from "./components/Login.vue";
import { useUserStore } from "@/stores/modules/user";


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
    <div class="Header-left flex">
      <div class="logo-wrapper flex flex-shrink-0 mr-2rem">
        <span @click="handleToggle" class="sidebarToggle w-32px h-32px mr-16px line-height-32px">
          <i :class="foundation ? 'i-foundation:align-left' : 'i-foundation:align-right'" class="inline-block" />
        </span>
        <a href="/" class="icon_logo"></a>
      </div>
    </div>
    <div class="Header-right flex">
      
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


@media screen and (max-width: 750px) {
  #widthChangeMobile {
    width: 100%;
    min-width: 300px;
  }
}
</style>
