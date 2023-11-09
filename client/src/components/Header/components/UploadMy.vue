<script setup lang="ts">
import { ref } from "vue";
const open = ref<boolean>(false);

const showModal = () => {
  open.value = true;
};

const handleOk = (e: MouseEvent) => {
  open.value = false;
};

defineExpose({
  showModal,
  handleOk,
});
</script>
<template>
  <a-modal
    wrapClassName="ShareImgModel"
    v-model:open="open"
    @ok="handleOk"
    :width="480"
    :bodyStyle="{ height: '450px', 'overflow-y': 'auto' }"
  >
    <template #title>
      <div class="ShareImg_subtitle">上传我的图片</div>
    </template>
    <div class="ShareImg_mod">
      <div class="ShareImg_main">
        <a-upload-dragger
          class="ant-upload-wrapper"
          name="file"
          :multiple="false"
        >
          <div class="ShareImg_section">
            <p>拖拽图片到此处或点击上传</p>
            <span> 最多支持添加8张图片 </span>
            <a-button size="small" class="ShareImg_button">上传图片</a-button>
          </div>
        </a-upload-dragger>
        <div class="ShareImg_wrapper">
          <a-checkbox
            ><span class="ShareImg_info">隐藏图片生成信息</span></a-checkbox
          >
        </div>
        <span class="ShareImg_comment">图片标题</span>
        <a-input
          placeholder="好的标题可以获得更好的曝光哦"
          class="ShareImg_imageTitle"
          show-count
          :maxlength="30"
        />
        <span class="ShareImg_comment">图片标签</span>
        <a-select
          show-search
          placeholder="填写你的图片类型，比如 男生、机械、建筑设计 等 "
          class="mb-16px"
        ></a-select>
        <span class="ShareImg_comment">关联模型</span>
        <a-select show-search placeholder="关联模型" class="mb-16px"></a-select>
        <span class="ShareImg_comment">描述信息</span>
        <span class="ShareImg_comment">描述信息</span>
        <a-textarea
          class="ShareImg_imageDesc"
          placeholder="填写更全面的描述信息"
          show-count
          :maxlength="500"
          style="resize: none"
        />
      </div>
    </div>
    <template #footer>
      <a-button type="primary" block class="ShareImg_submit">发布</a-button>
    </template>
  </a-modal>
</template>

<style lang="scss" scoped>
.ShareImg_submit {
  height: 40px !important;
  margin: 20px 0px 20px;
  color: #fff !important;
  background: #3162ff !important;

  &:hover {
    background: #4096ff !important;
  }
}

.ShareImg_subtitle {
  align-self: center;
  margin-bottom: 24px;
  color: #333;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  white-space: nowrap;
  text-align: left;
}

.ShareImg_mod {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  max-width: 480px;
  font-family: PingFang SC;
  background-color: #fff;
  border-radius: 8px;
}

.ShareImg_main {
  display: flex;
  align-self: center;
  justify-content: flex-start;
  width: 100%;
  flex-direction: column;
  max-width: 456px;
}

.ant-upload-wrapper {
  height: 143px;
}

.ShareImg_section {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  text-align: center;
}

.ShareImg_section p {
  margin-bottom: 4px;
  font-weight: 500;
  line-height: 22px;
}

.ShareImg_section span {
  margin-bottom: 16px;
  color: #999;
  font-size: 10px;
  line-height: 14px;
}

.ShareImg_button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 24px;
  color: #fff;
  font-size: 12px;
  background: #384455;
  border-radius: 4px;
}

.ShareImg_wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 456px;
  height: 16px;
  margin-top: 9px;
  margin-bottom: 26px;
}

.ShareImg_info {
  height: 16px;
  color: #333;
  font-size: 12px;
  line-height: 16px;
  white-space: nowrap;
  text-align: left;
}

.ShareImg_comment {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 440px;
  height: 20px;
  margin-bottom: 8px;
  color: #333;
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
  text-align: left;
  text-overflow: ellipsis;
}

.ShareImg_imageTitle {
  height: 40px;
  margin-bottom: 16px;
  padding-left: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
}

.ShareImg_imageDesc {
  height: 183px;
}

.ant-input-textarea-show-count::after {
  transform: translate(-10px, -40px);
}
</style>
