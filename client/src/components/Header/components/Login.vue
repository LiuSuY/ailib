<script setup lang="ts">
import { getCode } from "@/api/user";
import { useUserStore } from "@/stores/modules/user";
import { message } from "ant-design-vue";
import type { AxiosResponse } from "axios";
const userStore = useUserStore();

import { reactive, ref } from "vue";
interface FormState {
  phone: string;
  code: string;
  read: boolean | null;
}

const formState = reactive<FormState>({
  phone: "",
  code: "",
  read: null,
});

const codeApi = ref(getCode())

const open = ref<boolean>(false);
const showModal = () => {
  open.value = true;
};

const handleOk = () => {
  open.value = false;
};

const handleRead = () => {
  formState.read = !formState.read;
};

const handleLogin = () => {
 
  userStore
    .Login({ phone: String(formState.phone), code: formState.code })
    .then((res:any) => {
      if (res.status == 200) {
        handleOk();
      } else {
        res.message ? message.success('登录成功') :  message.error(res.message);
      }
    })
    .catch((err) => {
      err.message && message.error(err.message);
    });
};


const code = ref(false);

const handleCode = () => {
  codeApi.value = `${getCode()}?time=${Math.random()}`
}

const handleGetCode = () => {
  if(formState.phone){
    code.value = true;
  }
}

defineExpose({
  showModal,
  handleOk,
});
</script>
<template>
  <a-modal wrapClassName="LoginModel" v-model:open="open" :footer="null" :closable="false" :width="849">
    <div class="Login_container">
      <div class="Login_wrapper mobileHidden">
        <img class="Login_layer" src="../images/img_0.png" />
        <div class="Login_loginLogo">
          <img src="../images/login_logo1.png" alt="" />
          <img src="../images/login_logo2.png" alt="" />
        </div>
        <span class="Login_title">立刻获取多种服务</span>
        <span class="Login_tag">现在登录</span>
        <img class="Login_iconComplete" src="../icon/img_1.png" />
        <img class="Login_iconComplete1" src="../icon/img_1.png" />
        <img class="Login_iconComplete2" src="../icon/img_1.png" />
        <img class="Login_iconComplete3" src="../icon/img_1.png" />
        <span class="Login_subtitle">超多模型任意挑选</span>
        <span class="Login_info">模型无限量下载</span>
        <span class="Login_meta">和模型上传者沟通交流</span>
        <span class="Login_news">分享自己训练的模型</span>
      </div>

      <div class="Login_primary">
        <div class="Login_group">
          <span class="Login_caption">登录</span><span class="Login_word">手机号登录</span>
        </div>
        <div class="Login_from" style="display: block">
          <a-form style="width: 100%">
            <a-form-item style="width: 100%" class="ant-form-item Login_weight Login_input">
              <a-input-number style="width: 100%; border: none" autocomplete="off" placeholder="请输入手机号" maxlength="11"
                :controls="false" v-model:value="formState.phone">
                <template #addonBefore>
                  <div>+86</div>
                </template>
              </a-input-number>
            </a-form-item>
            <a-form-item class="ant-form-item Login_weight Login_input codeInput">
              <a-input placeholder="请输入验证码"  maxlength="4" v-model:value="formState.code">
                <template #addonAfter>
                  <div class="Login_codeButton" v-if="!code" :style="[formState.phone ? 'background: #13be86' : '']"
                    :class="formState.phone
                      ? 'Login_codeButton '
                      : 'Login_codeButtonDisable'
                      ">
                    <span @click="handleGetCode">获取验证码</span>
                  </div>
                  <img v-else class="h-100% w-100%" :src="codeApi" @click="handleCode">
                </template>
              </a-input>
            </a-form-item>
          </a-form>
        </div>
        <div id="wechat_login_container" style="display: none"></div>
        <div class="radio-wrapper">
          <a-radio :checked="formState.read" :value="formState.read" @click="handleRead">
            <span class="Login_desc" style="background-color: &quot;#13be86&quot;">我已阅读并同意
              <a href="/document/article_member">《用户服务》 </a>
              <a href="/document/article_private"> 《隐私政策》</a>
            </span>
          </a-radio>
        </div>
        <div class="Login_tips">此手机号已绑定过其他账号</div>
        <div class="Login_buttonBox">
          <a-button type="primary" class="Login_submint" :style="[
            formState.read && formState.code ? 'background: #3301ff' : '',
          ]" :disabled="!formState.read" @click="handleLogin">登录</a-button>
        </div>
        <div class="NewHint_newHint">

          <div data-show="true" class="ant-alert ant-alert-success ant-alert-with-description ant-alert-no-icon"
            role="alert">
            <div class="ant-alert-content">
              <div class="ant-alert-description">
                <p>目前仅支持手机登录，原账号数据会保留</p>
                <p>技术升级后可正常登录</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a-modal>
</template>

<style lang="scss">
.LoginModel .ant-modal-content {
  background-color: unset !important;
  border-radius: unset !important;
  box-shadow: unset !important;
  padding: 0 !important;
}

.LoginModel {
  .Login_container {
    position: relative;
    display: flex;
    align-items: flex-start;
    width: 100%;
    max-width: 849px;
    border-radius: 32px;
  }

  .Login_wrapper {
    position: absolute;
    top: 0;
    left: 406px;
    display: flex;
    align-items: flex-end;
    background-color: #3301ff;
    border-radius: 32px;
  }

  .Login_layer {
    position: relative;
    width: 443px;
    height: 601px;
  }

  .Login_loginLogo {
    position: absolute;
    top: 100px;
    left: 130px;
    display: flex;

    img:first-child {
      width: 32px;
    }

    img:last-child {
      position: relative;
      top: 10px;
      width: 127px;
      height: 28px;
    }
  }

  .Login_title {
    position: absolute;
    white-space: nowrap;
    text-align: center;
    top: 208px;
    right: 73px;
    color: #fff;
    font-weight: 600;
    font-size: 30px;
  }

  .Login_tag {
    top: 172px;
    left: 129px;
    color: hsla(0, 0%, 100%, 0.6);
    font-size: 20px;
    position: absolute;
    white-space: nowrap;
    text-align: center;
  }

  .Login_iconComplete {
    position: absolute;
    top: 320px;
    left: 127px;
    width: 20px;
    height: 20px;
  }

  .Login_iconComplete1 {
    position: absolute;
    top: 368px;
    left: 127px;
    width: 20px;
    height: 20px;
  }

  .Login_iconComplete2 {
    position: absolute;
    top: 416px;
    left: 127px;
    width: 20px;
    height: 20px;
  }

  .Login_iconComplete3 {
    position: absolute;
    top: 464px;
    left: 127px;
    width: 20px;
    height: 20px;
  }

  .Login_subtitle {
    position: absolute;
    top: 316px;
    right: 126px;
    color: #fff;
    font-size: 20px;
    white-space: nowrap;
    text-align: center;
  }

  .Login_info {
    position: absolute;
    color: #fff;
    font-size: 20px;
    white-space: nowrap;
    text-align: center;
    top: 364px;
    right: 146px;
  }

  .Login_meta {
    position: absolute;
    color: #fff;
    font-size: 20px;
    white-space: nowrap;
    text-align: center;
    top: 412px;
    right: 85px;
  }

  .Login_news {
    position: absolute;
    color: #fff;
    font-size: 20px;
    white-space: nowrap;
    text-align: center;
    top: 456px;
    right: 105px;
  }

  .Login_primary {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 460px;
    border-radius: 32px;
    position: relative;
    height: 601px;
    padding: 36px 12px 0;
    white-space: nowrap;
    background-color: #fff;
  }

  .Login_group {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 460px;
    border-radius: 32px;
    top: 0;
    align-self: center;
  }

  .Login_caption {
    position: relative;
    max-width: 448px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    z-index: 999;
    height: 36px;
    color: #333;
    font-weight: 600;
    font-size: 26px;
  }

  .Login_word {
    position: relative;
    max-width: 448px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    height: 22px;
    margin-top: 8px;
    color: #666;
    font-size: 16px;
  }

  .Login_from {
    width: 100%;
    max-width: 353px;
    margin-top: 48px;
  }

  .Login_tips {
    position: relative;
    top: 30px;
    display: none;
    width: 168px;
    height: 29px;
    color: #fff;
    font-weight: 400;
    font-size: 12px;
    font-family: PingFang SC;
    font-style: normal;
    line-height: 29px;
    text-align: center;
    background-color: #000;
    border-radius: 4px;
    opacity: 0.8;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  .Login_buttonBox {
    position: relative;
    margin-top: 24px;
  }

  .NewHint_newHint {
    margin-top: 45px;
    text-align: center;
  }

  .Login_submint {
    width: 194px;
    height: 56px;
    font-weight: 400;
    font-size: 20px;
    font-family: PingFang SC;
    font-style: normal;
    line-height: 22px;
    color: white;
    background-color: #b7b7b7;
    border-radius: 68px;

    &:hover {
      background: #5e36ff;
    }
  }

  .ant-alert-description {
    background-color: #f6ffed;
    border: 1px solid #b7eb8f;
    align-items: flex-start;
    padding-inline: 24px;
    padding-block: 20px;
  }

  .ant-alert {
    box-sizing: border-box;
    margin: 0;
    padding: 8px 12px;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    list-style: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    position: relative;
    display: flex;
    align-items: center;
    word-wrap: break-word;
    border-radius: 8px;
  }

  .Login_input {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    height: 56px;
    padding-right: 15px;
    padding-left: 20px;
    overflow: hidden;
    line-height: 16px;
    background-color: #f0f0f0;
    border-radius: 38px;
  }

  .Login_codeButtonDisable {
    background: #b7b7b7;
    cursor: not-allowed;
  }

  .Login_codeButton {
    position: relative;
    left: -2px;
    width: 120px;
    height: 36px;
    color: #fff;
    font-weight: 400;
    font-size: 14px;
    font-family: PingFang SC;
    font-style: normal;
    line-height: 36px;
    text-align: center;
    background: #b7b7b7;
    border-radius: 30px;
  }

  .ant-input-number-group-addon {
    border: none;
    background: unset;
  }

  .ant-input-number {
    border: none;
    background: unset;
    outline: none;
    box-shadow: unset;
    font-size: 16px;
  }

  input {
    height: 40px;
    background: transparent;
    border: none;
    border-radius: 21px;
    box-shadow: none !important;
    border-start-end-radius: 0;
    border-end-end-radius: 0;
    font-size: 16px;
    background: transparent;
  }

  .ant-input-group-addon {
    border: none;
    background: transparent;
  }

  .ant-input-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .ant-input-group-addon {
    flex-shrink: 0;
    width: 120px;
    padding: 0;
    background: none;
    border: none !important;
  }

  .Login_desc {
    color: #999;
    font-size: 12px;
    line-height: 12px;
    white-space: nowrap;
    text-align: center;
  }

  .radio-wrapper {}
}
</style>
@/stores/modules/user
