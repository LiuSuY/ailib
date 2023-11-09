<script setup lang="ts">
import {
  QuestionCircleOutlined,
  PlusOutlined,
  RestOutlined,
  PaperClipOutlined,
  UploadOutlined,
} from "@ant-design/icons-vue";
import { Form } from "ant-design-vue";
import Header from "@/components/Header/index.vue";
import Access from "@/components/Access/index.vue";
import Edit from "./components/Edit/index.vue";
import { ref, reactive, h, toRaw } from "vue";
import router from "@/router";
const spinning = ref<boolean>(false);

const businessKey = ref("");

interface FormState {
  status: boolean;
  business: Array<{ key: string; title: string }>;
}

const AccessList = ref<Array<{
  status: 'error' | 'success',
  title: string
}>>([
  {
    status: "error",
    title: "请勿转载境外模型",
  },
  {
    status: "error",
    title: "请勿上传色情、暴力等违法内容",
  },
  {
    status: "error",
    title: "不得侵害他人依法享有的知识产权",
  },
  {
    status: "success",
    title: "您所上传的内容需使用具有合法来源的数据",
  },
  {
    status: "success",
    title: "Lib将会对上传的所有内容进行安全审核",
  },
]);

const formState = reactive<FormState>({
  status: true,
  business: [
    {
      key: "1",
      title: "全都不可以",
    },
    {
      key: "2",
      title: "可售生成图片",
    },
    {
      key: "3",
      title: "可售模型或融合后的模型",
    },
  ],
});

const useStateForm = Form.useForm;

const stateRulesRef = reactive({
  status: [
    {
      required: true,
      message: "状态不能为空",
    },
  ],
});

const {
  resetFields: stateResetFields,
  validate: stateValidate,
  validateInfos: stateValidateInfos,
} = useStateForm(useStateForm, stateRulesRef, {
  onValidate: (...args) => console.log(...args),
});

interface SubFormState {
  name: string;
  label: string;
  type: string;
  checkpointType: string;
  desc: string;
  version: string;
  promise: string;
  model: string;
  other: string;
  action: string;
  isAction: string;
  epochs: string;
  steps: string;
  file: Array<{}>;
  pic: Array<{}>;
}

const sumbFormState = reactive<SubFormState>({
  name: "",
  label: "",
  type: "",
  checkpointType: "",
  desc: "",
  version: "",
  promise: "",
  model: "",
  other: "",
  action: "",
  isAction: "",
  epochs: "",
  steps: "",
  file: [],
  pic: [],
});

const rulesRef = reactive({
  name: [
    {
      required: true,
      message: "名字不能为空",
    },
  ],
  label: [
    {
      required: true,
      message: "标签不能为空",
    },
  ],
  type: [
    {
      required: true,
      message: "类型不能为空",
    },
  ],
  checkpointType: [
    {
      required: true,
      message: "checkpoint类型不能为空",
    },
  ],
  desc: [
    {
      required: true,
      message: "介绍不能为空",
    },
  ],
  version: [
    {
      required: true,
      message: "不能为空",
    },
  ],
  promise: [
    {
      required: true,
      message: "不能为空",
    },
  ],
  model: [
    {
      required: true,
      message: "不能为空",
    },
  ],
  other: [
    {
      required: true,
      message: "不能为空",
    },
  ],
  action: [
    {
      required: true,
      message: "不能为空",
    },
  ],
  isAction: [
    {
      required: true,
      message: "不能为空",
    },
  ],
  epochs: [
    {
      required: true,
      message: "不能为空",
    },
  ],
  steps: [
    {
      required: true,
      message: "不能为空",
    },
  ],
  file: [
    {
      required: true,
      message: "不能为空",
    },
  ],
  pic: [
    {
      required: true,
      message: "不能为空",
    },
  ],
});

const handleCheck = (item: { key: string }) => {
  businessKey.value = item.key;
};

const useForm = Form.useForm;

const { resetFields, validate, validateInfos } = useForm(
  sumbFormState,
  rulesRef,
  {
    onValidate: (...args) => console.log(...args),
  },
);
const onSubmit = () => {
  validate()
    .then(() => {
      console.log(toRaw(sumbFormState));
    })
    .catch((err) => {
      console.log("error", err);
    });
};

const handlePublish = () => {
  onSubmit();
};

const addlabelFile = ref([
  {
    label: "添加模型",
    show: false,
    extend: {
      fileList: [],
    },
  },
  {
    label: "添加修剪模型",
    show: false,
    extend: {
      fileList: [],
    },
  },
  {
    label: "添加配置",
    show: false,
    extend: {
      fileList: [],
    },
  },
  {
    label: "添加VAE",
    show: false,
    extend: {
      fileList: [],
    },
  },
  {
    label: "添加训练数据",
    show: false,
    extend: {
      fileList: [],
    },
  },
  {
    label: "添加文本编码文件",
    show: false,
    extend: {
      fileList: [],
    },
  },
]);

const hangdleAddTag = (label: string) => {
  const index = addlabelFile.value.findIndex((item) => item.label === label);
  addlabelFile.value[index].show = !addlabelFile.value[index].show;
};

const hangdleAddTagRemove = (label: string) => {
  hangdleAddTag(label);
};

const handleBack = () => {
  router.go(-1);
};
</script>

<template>
  <Header />
  <main id="Layout_main" style="padding-bottom: 0">
    <a-spin :spinning="spinning" wrapperClassName="wrapperClassName">
      <div class="uploadmodel">
        <div class="uploadmodel_header">
          <img class="uploadmodel_iconLeft" @click="handleBack" src="./images/img_6.png" />
          <span class="uploadmodel_caption">发布</span>
        </div>
        <img title="divider" class="uploadmodel_divider" src="./images/img_7.png" />
        <div class="uploadmodel_body">
          <div class="base_form_left">
            <div class="uploadmodel_group6">
              <div class="uploadmodel_banner">
                <a-form layout="vertical" noStyle size="large">
                  <a-form-item label="名字" name="name" v-bind="validateInfos.name">
                    <a-input v-model:value="sumbFormState.name" placeholder="名字" />
                  </a-form-item>
                  <a-row justify="space-between" :gutter="[16, 16]">
                    <a-col :span="12">
                      <a-form-item label="类型" name="type" v-bind="validateInfos.type">
                        <a-input v-model:value="sumbFormState.type" placeholder="类型" />
                      </a-form-item>
                    </a-col>
                    <a-col :span="12">
                      <a-form-item label="checkpoint类型" name="checkpointType" v-bind="validateInfos.checkpointType">
                        <a-radio-group v-model:value="sumbFormState.checkpointType"
                          style="width: 100%; display: flex; text-align: center">
                          <a-radio-button value="训练" style="flex: 1">训练</a-radio-button>
                          <a-radio-button value="叠加" style="flex: 1">叠加</a-radio-button>
                        </a-radio-group>
                      </a-form-item>
                    </a-col>
                  </a-row>

                  <a-form-item label="标签" name="label" v-bind="validateInfos.label">
                    <a-select v-model:value="sumbFormState.label" placeholder="e.g,:portraits,landscapes,anime,etc." />
                  </a-form-item>

                  <a-form-item label="介绍" name="desc" v-bind="validateInfos.desc">
                    <Edit></Edit>
                  </a-form-item>
                </a-form>
              </div>
              <div class="uploadmodel_group7">
                <span class="uploadmodel_title">版本</span>
                <span>
                  <a-button type="primary" :icon="h(PlusOutlined)" class="uploadmodel_iconAddWrapper">添加版本</a-button>
                </span>
              </div>
              <div class="uploadmodel_group8">
                <div class="uploadmodel_iconCloseVersion">
                  <RestOutlined style="font-size: 20px; color: red" />
                </div>
                <a-form layout="vertical" noStyle size="large">
                  <a-form-item label="版本号" name="version" v-bind="validateInfos.version">
                    <a-input v-model:value="sumbFormState.version" placeholder="版本号" />
                  </a-form-item>
                  <a-row justify="space-between" :gutter="[16, 16]">
                    <a-col :span="12">
                      <a-form-item label="是否原创" name="promise" v-bind="validateInfos.promise">
                        <a-input v-model:value="sumbFormState.promise" placeholder="是否原创" />
                      </a-form-item>
                    </a-col>
                    <a-col :span="12">
                      <div class="uploadmodel_isOriginal">
                        <p>发布原创模型拿收益：</p>
                        <span>
                          <PaperClipOutlined style="font-size: 12px; margin: 0 4px" />
                          <a href="https://liblib-api.vibrou.com/activity/2" target="_blank" rel="noreferrer">创作者激励计划</a>
                        </span>
                      </div>
                    </a-col>
                  </a-row>

                  <a-form-item label="基本模型" name="model" v-bind="validateInfos.model">
                    <a-select v-model:value="sumbFormState.model" />
                  </a-form-item>
                  <a-form-item label="其他" name="other" v-bind="validateInfos.other">
                    <div class="uploadmodel_labelSub" style="color: #333">
                      是否推荐完全零基础的用户使用？
                    </div>
                    <div class="uploadmodel_labelSub">
                      即对提示词的理解力强，且无需复杂调参即可出细节比较丰富的图片
                    </div>
                    <a-radio-group v-model:value="sumbFormState.other" class="my-10px">
                      <a-radio :value="1">是</a-radio>
                      <a-radio :value="0">否</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="版本变更说明" name="readme" v-bind="validateInfos.readme">
                    <div class="uploadmodel_labelSub">告诉我们这个版本</div>
                    <Edit></Edit>
                  </a-form-item>

                  <a-form-item label="触发词" name="action" v-bind="validateInfos.action">
                    <div class="uploadmodel_labelSub">
                      请输入您用来训练的单词
                    </div>
                    <a-input placeholder="例如: 士官长" v-model:value="sumbFormState.action" />
                  </a-form-item>
                  <a-form-item name="isAction" v-bind="validateInfos.isAction">
                    <a-switch v-model:checked="sumbFormState.isAction">这个版本需要触发词</a-switch>
                  </a-form-item>
                  <a-row justify="space-between" :gutter="[16, 16]">
                    <a-col :span="12">
                      <a-form-item label="Training Epochs" name="epochs" v-bind="validateInfos.epochs">
                        <a-input v-model:value="sumbFormState.epochs" />
                      </a-form-item>
                    </a-col>
                    <a-col :span="12">
                      <a-form-item label="Training Steps" name="steps" v-bind="validateInfos.steps">
                        <a-input v-model:value="sumbFormState.steps" />
                      </a-form-item>
                    </a-col>
                  </a-row>
                  <a-form-item label="模型或素材文件" name="file" v-bind="validateInfos.file">
                    <div class="loadFile_container7">
                      <a-upload v-model:file-list="sumbFormState.file" name="file" style="width: 100%">
                        <a-button type="text" size="small" block style="border: none">
                          <UploadOutlined />
                          选择一个文件
                        </a-button>
                      </a-upload>
                    </div>
                    <a-progress :percent="0" />
                  </a-form-item>

                  <div class="uploadmodel_container10 container10">
                    <a-tag :bordered="false" style="
                        font-size: 10px;
                        cursor: pointer;
                        background-color: unset;
                      " type="link" v-for="(addtag, index) in addlabelFile" :key="index"
                      @click="hangdleAddTag(addtag.label)">
                      <PlusOutlined></PlusOutlined> {{ addtag.label }}
                    </a-tag>
                  </div>
                  <template v-for="(item, index) in addlabelFile" :key="index">
                    <div class="uploadmodel_fileBox" v-if="item.show">
                      <div class="uploadmodel_itemBox">
                        <a-form-item :label="item.label" name="file">
                          <div class="loadFile_container7">
                            <a-upload v-model:file-list="item.extend.fileList" name="file" style="width: 100%">
                              <a-button type="text" size="small" block style="border: none">
                                <UploadOutlined />
                                选择一个文件
                              </a-button>
                            </a-upload>
                          </div>
                          <a-progress :percent="0" />
                        </a-form-item>
                      </div>
                      <div class="uploadmodel_iconDel" @click="hangdleAddTagRemove(item.label)">
                        <RestOutlined style="font-size: 20px; color: red" />
                      </div>
                    </div>
                  </template>

                  <a-form-item label="添加示例图片" name="pic" v-bind="validateInfos.pic">
                    <div class="uploadmodel_labelSub">最多添加20张图片</div>
                    <a-upload-dragger v-model:fileList="sumbFormState.pic" name="pic" :multiple="true">
                      <div class="h-233px flex items-center flex-col justify-center">
                        <p class="ant-upload-text">点击上传或拖拽文件到此处</p>
                        <p class="ant-upload-hint">
                          请勿上传裸露、暴力、血腥或其他包含非法信息图片
                        </p>
                      </div>
                    </a-upload-dragger>
                  </a-form-item>
                  <a-form-item label="">
                    <a-checkbox>隐藏图片生成信息</a-checkbox>
                  </a-form-item>
                </a-form>
              </div>
            </div>
            <a-button type="primary" class="uploadmodel_submit" @click="handlePublish">发布</a-button>
          </div>
          <div class="base_form_right">
            <div class="uploadmodel_group13">
              <a-form-item name="status" labelAlign="right" :colon="false" v-bind="stateValidateInfos.status">
                <template #label> 状态 </template>
                <a-switch style="width: 69px" checked-children="公开" un-checked-children="非公开"
                  v-model:checked="formState.status" />
              </a-form-item>
              <p v-if="formState.status">公开状态，对网站所有人可见</p>
              <p v-else>非公开状态: 仅自己可见，可在“在线生图”自用</p>
            </div>

            <div class="uploadmodel_group14">
              <span class="uploadmodel_desc">他人使用时，我授予用户以下权限</span>
              <a-row style="margin-bottom: 10px">
                <a-col>
                  <div>
                    <a-checkbox disabled>允许在线使用</a-checkbox>
                    <a-tooltip placement="top">
                      <template #title>
                        <span>“在线使用”指用户可在“在线生图”功能上使用您的模型</span>
                      </template>
                      <QuestionCircleOutlined />
                    </a-tooltip>
                  </div>
                  <p class="uploadmodel_notice">
                    当为公开状态时，默认同意此条款，他人不能随意转载
                  </p>
                </a-col>
              </a-row>
              <a-row style="margin-bottom: 10px">
                <a-col>
                  <div>
                    <a-checkbox>允许下载</a-checkbox>
                  </div>
                  <p class="uploadmodel_notice">
                    允许下载后，可能会被他人转载，我们无法控制该行为
                  </p>
                </a-col>
              </a-row>
              <a-row style="margin-bottom: 10px">
                <a-col>
                  <div>
                    <a-checkbox>允许进行融合</a-checkbox>
                  </div>
                </a-col>
              </a-row>
              <a-divider orientation="left" :orientationMargin="0" style="margin-top: 0; font-size: 14px">商业用途</a-divider>

              <div class="uploadmodel_block17">
                <div class="uploadmodel_container12">
                  <div class="uploadmodel_wrapper9" v-for="(item, index) in formState.business" :class="item.key === businessKey ? 'uploadmodel_wrapper12' : ''
                    " :key="item.key" @click="handleCheck(item)">
                    <img class="uploadmodel_iconComplete4" src="./images/img_45.png" />
                    <span class="uploadmodel_word5">{{ item.title }}</span>
                  </div>
                </div>
                <span class="uploadmodel_detail">仅代表作者要求，无商业授权</span>
              </div>
            </div>

            <Access :list="AccessList" :fontSize="14">
              <template #head>
                <span class="h-20px mb-8 color-4f4f4f font-medium text-14px leading-20px">声明</span>
              </template>
              <template #accessTip> </template>
            </Access>
          </div>
        </div>
      </div>
    </a-spin>
  </main>
</template>

<style scoped lang="scss">
#Layout_main {
  padding: 70px 0 75px;
}

.uploadmodel ::v-deep {
  .ant-form-item {
    margin-bottom: 12px;
  }

  .ant-form-item-label>label {
    height: 20px;
    display: flex;
    flex-direction: row-reverse;

    &::before {
      margin-left: 8px;
    }
  }

  .base_form_right {
    .ant-form-item-label>label {
      height: 34px;
      display: flex;
      flex-direction: row-reverse;
      transform: translateX(-10px);

      &::before {
        margin-left: 8px;
      }
    }
  }
}

.uploadmodel {
  flex-direction: column;
  align-items: flex-end;
  margin-top: 53px;
  display: flex;
  align-self: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 100%;
}

.uploadmodel_header {
  display: flex;
  align-self: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 1360px;
}

.uploadmodel_iconLeft {
  align-self: center;
  width: 17px;
  height: 17px;
  margin-top: 1px;
  cursor: pointer;
}

.uploadmodel_caption {
  align-self: center;
  margin-left: 31px;
  color: #333;
  font-weight: 600;
  font-size: 26px;
  white-space: nowrap;
  text-align: left;
}

.uploadmodel_divider {
  align-self: center;
  width: 1263px;
  width: 100%;
  max-width: 1263px;
  height: 1px;
  margin: 24px 0 0 1px;
  background-color: #e6e6e6;
}

.uploadmodel_body {
  display: flex;
  align-self: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1360px;
  padding: 40px 0;
}

.base_form_left {
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-content: flex-start;
  width: 100%;
  max-width: 790px;
}

.base_form_right {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 464px;
  margin: 0 0 0 12px;
}

.uploadmodel_banner {
  align-self: center;
  box-sizing: border-box;
  width: 100%;
  padding: 30px 16px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(230, 230, 230);
  border-image: initial;
  border-radius: 8px;
}

.uploadmodel_group8 {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 30px;
  background-color: #fff;
  align-self: center;
  box-sizing: border-box;
  width: 100%;
  padding: 30px 16px;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
}

.uploadmodel_group13 {
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: flex-start;
  box-sizing: border-box;
  width: 100%;
  padding: 30px 12px 0;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;

  p {
    padding-bottom: 30px;
    color: #999;
    font-weight: 400;
    font-size: 12px;
  }
}

.uploadmodel_group13 ::v-deep {
  .ant-form-item {
    margin-bottom: 12px;
  }

  .ant-checkbox-inner {
    width: 18px;
    height: 18px;
  }
}

.uploadmodel_group14 {
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: flex-start;
  box-sizing: border-box;
  width: 464px;
  margin-top: 32px;
  padding: 30px 16px 0;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;

  .uploadmodel_desc {
    align-self: flex-start;
    max-width: 432px;
    margin-bottom: 20px;
    overflow: hidden;
    color: #333;
    font-weight: 500;
    font-size: 14px;
    white-space: nowrap;
    text-align: left;
    text-overflow: ellipsis;
  }

  .uploadmodel_notice {
    margin-top: 5px;
    color: #999;
    font-size: 12px;
  }
}

.uploadmodel_block17 {
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 432px;
  padding: 20px;
}

.uploadmodel_container12 {
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: flex-start;
  box-sizing: border-box;
  width: 100%;
  max-width: 432px;
  padding: 12px;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
}

.uploadmodel_detail {
  align-self: flex-start;
  max-width: 432px;
  margin-top: 12px;
  overflow: hidden;
  color: #999;
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
  text-align: left;
  text-overflow: ellipsis;
}

.uploadmodel_wrapper9 {
  display: flex;
  align-self: center;
  justify-content: flex-start;
  width: calc(100% - 24px);
  margin: 1px 0;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;

  img {
    opacity: 0;
  }
}

.uploadmodel_word5 {
  align-self: center;
  margin-left: 16px;
  color: #333;
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
  text-align: left;
}

.uploadmodel_iconComplete4 {
  align-self: center;
  width: 16px;
  height: 16px;
  margin-left: 4px;
}

.uploadmodel_wrapper12 {
  background: rgba(102, 71, 225, 0.1);

  img {
    opacity: 1;
  }
}

.uploadmodel_group6 {
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-content: flex-start;
  width: 100%;
  max-width: 790px;
}

.uploadmodel_submit {
  width: 100%;
  max-width: 790px;
  height: 54px;
  min-height: 54px;
  color: rgb(255, 255, 255);
  font-weight: 500;
  font-size: 20px;
  font-family: "PingFang SC";
  font-style: normal;
  text-align: center;
  background: rgb(49, 98, 255);
  border-radius: 4px;

  &:hover {
    background: rgb(70, 114, 255);
  }
}

.uploadmodel_group7 {
  display: flex;
  align-items: flex-end;
  align-self: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 16px;
}

.uploadmodel_title {
  align-self: center;
  color: rgb(51, 51, 51);
  font-weight: 600;
  font-size: 26px;
  white-space-collapse: collapse;
  text-wrap: nowrap;
  text-align: left;
}

.uploadmodel_iconAddWrapper {
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: flex-start;
  width: 100px;
  height: 30px;
  border-radius: 18px;

  &:hover {
    background: rgb(70, 114, 255);
  }
}

.uploadmodel_iconCloseVersion {
  position: absolute;
  top: 12px;
  right: 18px;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  cursor: pointer;
}

.uploadmodel_isOriginal {
  display: flex;
  align-items: center;
  height: 100%;
  transform: translateY(10px);

  span {
    display: flex;
    align-items: center;
  }

  a {
    color: #3162ff;
    font-size: 12px;
    font-family: PingFang SC;
    text-decoration: underline;
  }

  p {
    color: #666;
    font-size: 12px;
    font-family: PingFang SC;
  }
}

.loadFile_container7 {
  position: relative;
  display: flex;
  align-self: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  width: 100%;
  min-width: 200px;
  padding: 12px;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 4px;

  button {
    box-shadow: unset;
    text-align: left;
    outline: none;

    &:focus {
      outline: none;
      box-shadow: unset;
    }

    &:hover {
      color: unset;
      background-color: unset;
    }
  }
}

.loadFile_container7 ::v-deep {
  .ant-upload {
    width: 100%;
  }

  input[type="file"]:focus {
    outline: none;
    box-shadow: unset;
  }

  .ant-upload-drag {
    height: 233px;
  }
}

.uploadmodel_container10 {
  position: relative;
  display: flex;
  align-items: center;
  height: 24px;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: 12px;
  line-height: 10px;
}

.uploadmodel_fileBox {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.uploadmodel_itemBox {
  width: calc(100% - 56px);
}

.uploadmodel_iconDel {
  position: absolute;
  top: 28px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
}

.uploadmodel_labelSub {
  color: #999;
  font-weight: 400;
  font-size: 12px;
  font-style: normal;
}

.ant-upload-text {
  align-self: center;
  overflow: hidden;
  color: #999 !important;
  font-size: 16px !important;
  white-space: nowrap;
  text-align: left;
  text-overflow: ellipsis;
}

.ant-upload-hint {
  align-self: center;
  margin-top: 8px;
  overflow: hidden;
  color: #999 !important;
  font-size: 12px !important;
  white-space: nowrap;
  text-align: center;
  text-overflow: ellipsis;
}
</style>
