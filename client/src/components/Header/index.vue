<script setup lang="ts">
import router from "@/router";
import { reactive, ref, watch } from "vue";
import { useRoute } from "vue-router";
import Quit from "./components/Quit.vue";
import UploadMy from "./components/UploadMy.vue";
import Login from "./components/Login.vue";
import { useUserStore } from "@/stores/modules/user";
const userStore = useUserStore();

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
  <div class="NavBar_wrapper" id="widthChangeMobile">
    <div class="NavBar_group1">
      <a href="/"><img class="NavBar_logo pclogo" src="@/assets/logo.png" alt="" /></a>
      <div class="NavBar_group2 NavBar_groupTwo" id="hiddenInMobile">
        <a-input-group size="large">
          <a-input class="NavBar-wrapper" @change="handleChange" :value="searchValue" allowClear :bordered="false"
            id="hiddenInMobile" placeholder="搜索模型、图片、用户">
            <template #clearIcon>
              <img src="@/assets/icon/close.png" class="NavBar_iconClean" />
            </template>
            <template #addonAfter>
              <img v-if="searchValue" class="NavBar_iconSearch" src="@/assets/icon/search_1.png" alt="" />
              <img v-else class="NavBar_iconSearch" src="@/assets/icon/search.png" alt="" />
            </template>
          </a-input>
        </a-input-group>
      </div>
    </div>
    <div class="NavBar_topRight">
      <div class="NavBar_sd" v-show="isOnline" @click="handleRouter('/online')">
        <img src="@/assets/sd.png" alt="" />
        <p>在线生图</p>
        <span>免费</span>
      </div>
      <a class="NavBar_modelGroup" target="_blank" href="/"><img src="@/assets/icon/model_square.png"
          alt="" /><span>模型广场</span></a>
      <div class="NavBar_traningEntry">
        <img src="@/assets/modal.png" alt="" class="NavBar_left" />训练我的模型<img src="@/assets/beta.png" alt=""
          class="NavBar_right" />
      </div>
      <a-popover v-show="isOnline" placement="bottom">
        <template #content>
          <div class="NavBar_publish mobileHidden gotoUpload" @click="handleModel">
            <img class="NavBar_hoverIcon" src="./icon/new_publish_model_hover.png" alt="" />
            <img class="NavBar_normalIcon" src="./icon/new_publish_model.png" alt="" />
            <span>模型</span>
          </div>
          <div class="NavBar_publish mobileHidden gotoUpload" @click="handleImgPic">
            <img class="NavBar_hoverIcon" src="./icon/new_upload_img_entry_hover.png" alt="" />
            <img class="NavBar_normalIcon" src="./icon/new_upload_img_entry.png" alt="" />
            <span>图片</span>
          </div>
        </template>
        <div class="NavBar_newPubEntrance NavBar_hoverList NavBar_unLogin">
          <img src="@/assets/newPub.png" alt="" />发布
        </div>
      </a-popover>
      <div class="NavBar_userInfo userInfo NavBar_userInfoLogin flex">
        <div v-if="!userStore.userInfo.token" class="NavBar_view" @click="handleLogin">
          登录/注册
        </div>
        <div v-else class="flex">
          <a-popover placement="bottomRight">
            <template #title>
              <div style="position: relative">
                通知
                <div style="
                    bottom: -8px;
                    width: calc(100% + 26px);
                    height: 1px;
                    position: absolute;
                    background: #dfe1e7;
                    left: -12px;
                  "></div>
              </div>
            </template>
            <template #content>
              <div class="NavBar_messageContainer">
                <div class="NavBar_messageList">
                  <div class="NavBar_mod" :key="mess.tag" v-for="mess in messList">
                    <div class="NavBar_messageView">
                      <span class="NavBar_commonDesc NavBar_desc">
                        {{ mess.desc }}
                      </span>
                      <span class="NavBar_tag">
                        {{ mess.tag }}
                      </span>
                    </div>
                  </div>
                  <p>更多通知可点击查看全部~</p>
                </div>
              </div>
              <a-button type="primary" class="NavBar_messageButton" block>查看全部</a-button>
            </template>
            <a class="NavBar_message">
              <div class="NavBar_hoverEntry">
                <img class="NavBar_iconNotification mobileHidden" src="@/assets/icon/has_notice.png" alt="" /><span
                  class="NavBar_iconCircle"></span>
              </div>
            </a>
          </a-popover>
          <a-dropdown placement="bottomRight">
            <img class="NavBar_iconAvatar" src="@/assets/avat.webp" alt="" style="width: 42px; height: 42px" />
            <template #overlay>
              <a-menu style="width: 160px">
                <a-menu-item>
                  <a>
                    <div class="NavBar_commonGroup">
                      <img class="NavBar_iconFile" src="@/assets/icon/img_0.png" />
                      <span class="NavBar_menuTag">我的模型</span>
                    </div>
                  </a>
                </a-menu-item>
                <a-menu-item>
                  <a class="NavBar_commonGroup">
                    <div class="NavBar_commonGroup">
                      <img class="NavBar_iconFile" src="@/assets/icon/img_1.png" />
                      <span class="NavBar_menuTag">喜欢的模型</span>
                    </div>
                  </a>
                </a-menu-item>
                <a-menu-item>
                  <a>
                    <div class="NavBar_commonGroup">
                      <img class="NavBar_iconFile" src="@/assets/icon/img_2.png" />
                      <span class="NavBar_menuTag">我的图片</span>
                    </div>
                  </a>
                </a-menu-item>
                <a-menu-item>
                  <a>
                    <div class="NavBar_commonGroup">
                      <img class="NavBar_iconFile" src="@/assets/icon/img_3.png" />
                      <span class="NavBar_menuTag">关注列表</span>
                    </div>
                  </a>
                </a-menu-item>
                <a-menu-item>
                  <a>
                    <div class="NavBar_commonGroup" @click="handleRouter('/transaction')">
                      <img class="NavBar_iconFile" src="@/assets/icon/img_4.png" />
                      <span class="NavBar_menuTag">交易记录</span>
                    </div>
                  </a>
                </a-menu-item>
                <a-menu-item>
                  <a>
                    <div class="NavBar_commonGroup">
                      <img class="NavBar_iconFile" src="@/assets/icon/img_5.png" />
                      <span class="NavBar_menuTag">账号设置</span>
                    </div>
                  </a>
                </a-menu-item>
                <a-menu-item>
                  <a @click="handleQuit">
                    <div class="NavBar_commonGroup">
                      <img class="NavBar_iconFile" src="@/assets/icon/img_6.png" />
                      <span class="NavBar_menuTag">退出</span>
                    </div>
                  </a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </div>
    </div>
    <Quit ref="quitRef"></Quit>
    <UploadMy ref="uploadMyRef"></UploadMy>
    <Login ref="loginRef"></Login>
  </div>
</template>

<style lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.NavBar {
  &_wrapper {
    position: fixed;
    top: 0;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 1280px;
    height: 70px;
    padding-right: 20px;
    padding-left: 16px;
    background-image: linear-gradient(180deg, #fff, #fff);
    border-bottom: 1px solid #eaeaea;
  }

  &_group1 {
    z-index: 99;
    display: flex;
    align-items: center;
    margin-top: 2px;
  }

  &_group2 {
    justify-content: space-between;
    box-sizing: border-box;
    width: 460px;
    height: 48px;
    overflow: hidden;
    background-color: #f1f5f7;
    display: flex;
    align-items: center;
    border-radius: 12px;
  }

  &_logo {
    width: auto;
    height: 30px;
    margin-right: 24px;
    cursor: pointer;
  }

  &_groupTwo {
    .ant-input-group-wrapper {
      display: table;
      width: 100%;
    }

    &:hover {
      background-color: #e8ecee !important;
    }
  }

  &_iconSearch {
    width: 20px;
    height: 20px;
    border: none;
  }
}

.NavBar_topRight {
  position: relative;
  display: flex;
  align-items: center;
}

.NavBar_sd {
  position: relative;
  justify-content: center;
  width: 140px;
  height: 40px;
  margin-right: 46px;
  padding: 0 12px;
  background: #3162ff;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 12px;

  p {
    margin-left: 5px;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    border-radius: 12px;
  }

  span {
    position: absolute;
    top: -10px;
    right: -34px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 20px;
    color: #fff;
    font-weight: 500;
    font-size: 11px;
    background-color: #ff7f48;
    border: 1px solid #fff;
    border-radius: 10px 10px 10px 4px;
  }

  img {
    width: 18px;
    height: 18px;
  }
}

.NavBar_traningEntry {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  margin-right: 34px;
  padding: 10px 12px;
  color: #3162ff;
  font-size: 14px;
  white-space: nowrap;
  background: hsla(0, 0%, 100%, 0.1);
  border: 1px solid #3162ff;
  border-radius: 12px;
  cursor: pointer;
}

.NavBar_newPubEntrance {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 40px;
  margin-right: 24px;
  color: #3162ff;
  font-weight: 500;
  font-size: 14px;
  font-style: normal;
  border: 1px solid #3162ff;
  border-radius: 12px;
  cursor: pointer;
}

.NavBar_traningEntry .NavBar_left {
  width: 24px;
  height: 24px;
  margin-right: 6px;
}

.NavBar_traningEntry .NavBar_right {
  position: absolute;
  top: -9px;
  right: -22px;
  width: 44px;
  height: 20px;
}

.NavBar_newPubEntrance img {
  width: 16px;
  height: 16px;
  margin-right: 6px;
}

.NavBar_view {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100px;
  height: 40px;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  background-color: #384455;
  border-radius: 12px;
  cursor: pointer;
}

.NavBar_groupTwo:hover .ant-input-group .ant-input-group-addon {
  background-color: #e8ecee !important;
}

.NavBar-wrapper {
  &>.ant-input-wrapper {
    padding-right: 25px;
  }

  .ant-input {
    width: 100%;
    height: 40px;
    padding-left: 10px !important;
    color: #333 !important;
    font-size: 16px !important;
    line-height: 1.5;
    background-color: transparent;
    border: none;
    border-radius: 21px;
    box-shadow: none !important;
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }
}

.NavBar_groupTwo .ant-input-group-addon {
  position: relative;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  padding-right: 0;
  padding-left: 0;
  background-color: #f1f5f7;
  border: none !important;
  transition: none;
  margin-right: 8px;
}

.ant-input-wrapper {
  display: flex;
}

.NavBar_iconClean {
  width: 38px;
  height: 38px;
  margin-right: 20px;
  cursor: pointer;
}

.NavBar_iconSearch {
  width: 20px;
  height: 20px;
  border: none;
}

.NavBar_hoverEntry {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 12px;
  cursor: pointer;
}

.NavBar_hoverEntry img {
  width: 24px;
  height: 24px;
}

.NavBar_message {
  position: relative;
  margin-right: 18px;
}

.NavBar_desc {
  height: 16px;
  color: #666;
  font-weight: 500;
  font-size: 12px;
}

.NavBar_tag {
  height: 14px;
  margin-top: 6px;
  color: #999;
  font-size: 10px;
}

.NavBar_messageContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 258px;
  overflow-y: auto;
}

.NavBar_messageContainer .NavBar_messageList .NavBar_mod:first-child {
  margin-top: 0;
}

.NavBar_messageContainer .NavBar_messageList .NavBar_mod {
  width: 100%;
  margin-top: 16px;
  white-space: nowrap;
  cursor: pointer;
}

.NavBar_messageContainer .NavBar_messageList p {
  padding: 16px 0;
  color: #999;
  font-size: 10px;
  font-family: PingFang SC;
  line-height: 14px;
  text-align: center;
}

.NavBar_messageView {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 254px;
}

.NavBar_commonDesc {
  position: relative;
  max-width: 254px;
  overflow: hidden;
  font-family: PingFang SC;
  text-align: left;
  text-overflow: ellipsis;
}

.NavBar_messageButton {
  width: 264px;
  height: 38px;
  background-color: #3162ff !important;
  border-radius: 8px;

  &:hover {
    background-color: #4672ff !important;
  }
}

.NavBar_iconAvatar {
  position: relative;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
}

.NavBar_commonGroup {
  display: flex;
  align-self: center;
  justify-content: flex-start;
  width: 160px;
  height: 36px;
}

.NavBar_iconFile {
  align-self: center;
  width: 22px;
  height: 22px;
}

.NavBar_menuTag {
  align-self: center;
  margin-left: 16px;
  color: #333;
  font-size: 15px;
  white-space: nowrap;
  text-align: left;
}

.NavBar_modelGroup {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 123px;
  height: 40px;
  margin-right: 24px;
  padding: 0 15px;
  background-color: #3162ff;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;

  span {
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    font-family: PingFang SC;
    line-height: 20px;
  }

  img {
    width: 15px;
    height: 15px;
  }
}

.NavBar_publish span {
  color: #666;
  font-weight: 500;
  font-size: 14px;
}

.NavBar_publish {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 40px;
  padding: 0 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #f1f2f6;

    .NavBar_normalIcon {
      display: none;
    }

    .NavBar_hoverIcon {
      display: block;
    }
  }
}

.NavBar_publish .NavBar_hoverIcon {
  display: none;
}

.NavBar_publish img {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

@media screen and (max-width: 750px) {
  #widthChangeMobile {
    width: 100%;
    min-width: 300px;
  }
}
</style>
@/stores/modules/user
