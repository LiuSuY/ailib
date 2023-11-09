<script setup>
import Header from "@/components/Header/index.vue";
import { ref } from "vue";
const clipSkip = ref(0);
</script>
<template>
  <Header />
  <main class="main">
    <div class="pt-70px">
      <div class="header">
        <div class="item mr-20px">
          <div class="title">Stable Diffusion 模型 (CHECKPOINT)</div>
          <div class="content">
            <a-select ref="select" style="width: 360px" size="large">
              <a-select-option value="jack">Jack</a-select-option>
              <a-select-option value="lucy">Lucy</a-select-option>
              <a-select-option value="disabled" disabled
                >Disabled</a-select-option
              >
              <a-select-option value="Yiminghe">yiminghe</a-select-option>
            </a-select>
            <a-button class="btn">
              <img src="@/assets/icon/sync.png" alt="" />
            </a-button>
          </div>
        </div>
        <div class="item mr-20px">
          <div class="title">VAE</div>
          <div class="content">
            <a-select ref="select" style="width: 360px" size="large">
              <a-select-option value="jack">Jack</a-select-option>
              <a-select-option value="lucy">Lucy</a-select-option>
              <a-select-option value="disabled" disabled
                >Disabled</a-select-option
              >
              <a-select-option value="Yiminghe">yiminghe</a-select-option>
            </a-select>
            <a-button class="btn">
              <img src="@/assets/icon/sync.png" alt="" />
            </a-button>
          </div>
        </div>
        <div class="item mr-20px">
          <div class="title fb">
            CLIP跳过层 Clip Skip
            <a-input-number
              v-model:value="clipSkip"
              size="mini"
              style="width: 40px"
              :controls="false"
            ></a-input-number>
          </div>
          <div>
            <a-slider
              v-model:value="clipSkip"
              style="width: 248px"
              :min="1"
              :max="12"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="my-20px">
      <div class="contentTop">
        <div class="left">
          <div class="titleBar">
            <div class="titleWrap">
              <span class="title">提示词</span
              ><span class="subTitle">Prompt</span>
            </div>
            <div class="transBtn">翻译为英文</div>
          </div>
          <div class="inputWrap">
            <a-textarea
              placeholder="正向提示词，请输入英文，或者输入中文后点击一键翻译"
              show-count
              :auto-size="{ minRows: 3, maxRows: 5 }"
              :maxlength="2000"
            />
          </div>
          <div class="titleBar">
            <div class="titleWrap">
              <span class="title">负向提示词</span
              ><span class="subTitle">Negative Prompt</span>
            </div>
            <div class="transBtn">翻译为英文</div>
          </div>
          <div class="inputWrap">
            <a-textarea
              placeholder="负向提示词，请输入英文，或者输入中文后点击一键翻译"
              show-count
              :auto-size="{ minRows: 3, maxRows: 5 }"
              :maxlength="2000"
            />
          </div>
        </div>
        <div class="right">
          <div class="btnGenerate">
            <div class="btn">
              <div>生成图片</div>
              <div>今日生图次数 0/100</div>
            </div>
            <div class="btn btnPer" style="display: none">中止</div>
            <div class="btn btnPer" style="display: none">跳过</div>
          </div>
          <div class="btn-group">
            <a-tooltip>
              <template #title>复制生成信息可以一键填充</template>
              <button class="btn-tool">
                <img src="@/assets/icon/icon1.png" />
              </button>
            </a-tooltip>
            <a-tooltip>
              <template #title>清除当前所有提示词</template>
              <button class="btn-tool">
                <img src="@/assets/icon/icon2.png" />
              </button>
            </a-tooltip>
            <button class="btn-tool-open">
              <img src="@/assets/icon/icon3.png" />关闭模型预览
            </button>

            <a-tooltip>
              <template #title>清除当前所有提示词</template>
              <button class="btn-tool">
                <img src="@/assets/icon/icon4.png" />
              </button>
            </a-tooltip>
            <a-tooltip>
              <template #title>清除当前所有提示词</template>
              <button class="btn-tool">
                <img src="@/assets/icon/icon5.png" />
              </button>
            </a-tooltip>
          </div>
        </div>
      </div>
    </div>

    <div class="userInfo">
      <a-upload-dragger
        name="file"
        :multiple="false"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        @change="handleChange"
        @drop="handleDrop"
      >
        <p class="ant-upload-drag-icon">
          <inbox-outlined></inbox-outlined>
        </p>
        <p class="ant-upload-text">点击上传用户照片</p>
      </a-upload-dragger>
    </div>

    <div class="generateWrap">
      <div class="loadingContent">
        <div class="loadWrap">
          <div class="loading" style="width: 0%"></div>
        </div>
        <div class="loadTxt">
          <!---->
          <div class="tipWrap">
            <p class="tip">生图小Tip：</p>
            <p class="tip">
              面部修复和高分辨率修复都可以在一定程度上修复人像，但建议不要两个都开，不然可能适得其反。
            </p>
          </div>
        </div>
      </div>
      <div class="generateContent">
        <img src="@/assets/onlineEmpty.png" class="generateNoImg" /><img
          src="@/assets/onlineImg.png"
          class="generateTxt"
        /><span class="txt"></span>
        <div class="content"></div>
        <div
          id="previewContent64032"
          class="generateImgSwiper"
          style="display: none"
        >
          <div class="generateContentSwiper"><!----></div>
          <div class="generateClose"><img src="@/assets/icon/close.png" /></div>
          <div
            class="swipers"
            style="width: 100%; transform: translateX(0px)"
          ></div>
        </div>
      </div>
      <div class="btns" style="display: none">
        <div class="btn primary">分享图片</div>
        <div class="btn primary">保存到本地</div>
        <div class="btn">发送到 图生图</div>
        <div
          class="btn el-tooltip"
          aria-describedby="el-tooltip-4224"
          tabindex="0"
        >
          发送到 重绘
        </div>
        <div class="btn">发送到 后期处理</div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: auto;
  padding: 0 40px 20px;
  overflow: hidden;
  background-color: #fff;
}

.header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  padding: 0 10px;
}

.generateWrap {
  position: relative;
  width: 100%;
  height: auto;
  min-height: 628px;
  padding: 8px;
  background: #f1f2f6;
  border-radius: 12px;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin-left: 8px;
  background-color: #fff;
  border: 1px solid #dfe1e7;
  border-radius: 8px;
  cursor: pointer;

  img {
    width: 15px;
    height: 15px;
  }
}

.title {
  margin-bottom: 12px;
  color: #4f4f4f;
  font-size: 14px;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
}

.fb {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.generateContent {
  position: absolute;
  top: 8px;
  right: 8px;
  left: 8px;
  height: 612px;
  padding: 12px;
  overflow-x: hidden;
  overflow-y: auto;
  background: #fff;
  border-radius: 8px;
}

.generateNoImg {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 242px;
  height: 206px;
  transform: translate(-50%, -70%);
}

.generateTxt {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120px;
  height: 25px;
  -o-object-fit: contain;
  object-fit: contain;
  transform: translate(-50%, 300%);
}

.txt {
  position: absolute;
  top: 50%;
  left: 50%;
  color: #999;
  font-weight: 500;
  font-size: 12px;
  transform: translate(-50%, 700%);
}

.content {
  width: 100%;
  overflow-y: scroll;
}

.generateImgSwiper {
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 0.3s linear;
}

.generateContentSwiper {
  position: relative;
  width: 80%;
  height: 500px;
  margin: 0 auto;
  padding-top: 12px;
  overflow: hidden;
}

.generateClose {
  position: absolute;
  top: 2px;
  right: 15px;
  width: 15px;
  height: 15px;
  cursor: pointer;
}

.userInfo {
  margin: 20px 0;
}

.btnGenerate {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.btnGenerate > .btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 332px;
  height: 84px;
  color: #e76100;
  font-weight: 600;
  font-size: 18px;
  background: linear-gradient(180deg, #ffd089, #ffb545);
  border-radius: 8px;
  cursor: pointer;
  flex-flow: column wrap;
  text-align: center;

  & > div {
    width: 100%;
    font-weight: 500;
    font-size: 22px;
  }

  & > div:nth-child(2) {
    margin-top: 6px;
    color: #e76100;
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    opacity: 0.8;
  }
}

.btn-group {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  margin-top: 10px;
}

.btn-tool {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin-right: 10px;
  font-size: 18px;
  background-color: #f1f2f6;
  border: 0;
  border-radius: 25px;
  outline: none;
  cursor: pointer;

  img {
    width: 15px;
    height: 15px;
  }
}

.btn-tool-open {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 124px;
  height: 44px;
  margin-right: 10px;
  padding: 0 5px;
  background-color: #f1f2f6;
  border: 1px solid #dfe1e7;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;

  img {
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }
}

.contentTop {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.left {
  width: 80%;
  height: auto;
  margin-top: -12px;
  padding-right: 20px;
  overflow: hidden;
}

.right {
  flex: 1;
  margin-top: 27px;
}

.titleBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 12px 0 8px 0;
  font-weight: 400;
  font-size: 14px;
  font-family: PingFang SC;
  line-height: 20px;
}

.transBtn {
  color: #3162ff;
  font-weight: 400;
  font-size: 12px;
  font-family: PingFang SC;
  font-style: normal;
  line-height: normal;
  cursor: pointer;
}

.titleWrap {
  .title {
    display: inline-block;
    margin-right: 8px;
    color: #4f4f4f;
  }

  .subTitle {
    color: #999;
  }
}
</style>
