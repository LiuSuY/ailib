<script setup lang="ts">
import { useUserStore } from "@/stores/modules/user";
import { removeItem } from "@/utils/localStorage";
import { message } from "ant-design-vue";
const userStore = useUserStore();
import { ref } from "vue";
const open = ref<boolean>(false);

const showModal = () => {
  open.value = true;
};

const handleOk = () => {
  userStore.LogOut().then((res: any) => {
    if (res.status == 200) {
      message.success(res.message);
      userStore.resetToken();
      open.value = false;
    } else {
      message.error(res.message);
    }
  });
};

const handleCancel = () => {
  // open.value = false;
};

defineExpose({
  showModal,
  handleOk,
});
</script>
<template>
  <a-modal
    wrapClassName="LogoutModel_loginOutModel"
    v-model:open="open"
    @ok="handleOk"
    :closable="false"
  >
    <div class="LogoutModel_mod">
      <img src="##" class="LogoutModel_iconWarn" />
      <div class="LogoutModel_desc">确认退出当前登录吗？</div>
    </div>
    <template #footer>
      <a-button class="LogoutModel_loginOutClose" @click="handleCancel"
        >取消</a-button
      >
      <a-button class="LogoutModel_loginOutButton" @click="handleOk"
        >确定退出</a-button
      >
    </template>
  </a-modal>
</template>

<style lang="scss" scoped>
.LogoutModel_mod {
  padding: 10px 0;
  display: flex;
}

.LogoutModel_iconWarn {
  align-self: flex-end;
  width: 22px;
  height: 22px;
  margin: 0 0 2px 20px;
  background-color: #fff;
}

.LogoutModel_desc {
  align-self: flex-end;
  margin-left: 16px;
  color: #000;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  text-align: left;
}

.button {
  width: 86px;
  height: 30px;
  color: #fff;
  font-weight: 400;
  font-size: 14px;
  font-family: Roboto;
  font-style: normal;
  line-height: 22px;
  text-align: center;
  border: none;
  border-radius: 26px;
}

.LogoutModel_loginOutClose {
  @extend .button;
  background: #bbb;
  margin-right: 20px;

  &:hover {
    color: #fff;
    background-color: #ccc !important;
  }
}

.LogoutModel_loginOutButton {
  @extend .button;
  background: #ff4d4f;

  &:hover {
    color: #fff;
    background-color: rgba(255, 77, 80, 0.522) !important;
  }
}

.LogoutModel_loginOutModel ::v-deep .ant-modal-content {
  padding: 0 !important;
}

.LogoutModel_loginOutModel ::v-deep .ant-modal-content {
  padding: 0 !important;
}
</style>
@/stores/modules/user
