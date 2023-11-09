<script setup lang="ts">
import { reactive, ref } from "vue";
import Header from "@/components/Header/index.vue";
import Slider from "./components/Slider/indexbak.vue";
import ModelInfoCard from "./components/ModelInfoCard/index.vue";
import Access from "./components/Access/index.vue";

import Footer from "./components/Footer/index.vue";
import WaterFall from "./components/WaterFall/index.vue";
import Comment from "./components/Comment/index.vue";
const Detail = reactive({
  title: "【重大更新】绪儿-武侠",
  type: "LORA",
  run: "15.2k",
  download: "2.5k",
  subscribe: 76,
  like: 270,
  runText: "模型在线生成数",
  downLoadText: "模型下载数",
  subscribeText: "模型返图数",
  likeText: "模型点赞数",
  lables: [
    "中国风",
    "风格",
    "男生",
    "光影",
    "国风季",
    "风格化",
    "虚拟摄影",
    "女生",
  ],
});

const activeKey = ref(1);

import img1 from "./components/Slider/img/img1.webp";
import img2 from "./components/Slider/img/img2.webp";
import img3 from "./components/Slider/img/img3.webp";
import img4 from "./components/Slider/img/img4.webp";

const sliderList = ref([
  {
    url: img1,
  },
  {
    url: img2,
  },
  {
    url: img3,
  },
  {
    url: img4,
  },
  {
    url: img2,
  },
]);
</script>
<template>
  <Header />
  <main class="layout_main" style="padding-bottom: 0">
    <div class="modelinfo_modelPage">
      <div class="modelinfo_header">
        <div class="modelinfo_first">
          <span class="modelinfo_title">{{ Detail.title }}</span
          ><img class="modelinfo_operLabel" src="@/assets/icon/djicon.png" />
          <div class="modelinfo_type">{{ Detail.type }}</div>
          <div class="modelinfo_summary">
            <a-tooltip>
              <template #title>{{ Detail.runText }}</template>
              <div class="modelinfo_sumItem">
                <div class="modelinfo_run modelinfo_icon"></div>
                <span>{{ Detail.run }}</span>
              </div>
            </a-tooltip>
            <a-tooltip>
              <template #title>{{ Detail.downLoadText }}</template>
              <div class="modelinfo_sumItem">
                <div class="modelinfo_download modelinfo_icon"></div>
                <span>{{ Detail.download }}</span>
              </div>
            </a-tooltip>
            <a-tooltip>
              <template #title>{{ Detail.subscribeText }}</template>
              <div class="modelinfo_sumItem">
                <div class="modelinfo_subscribe modelinfo_icon"></div>
                <span>{{ Detail.subscribe }}</span>
              </div>
            </a-tooltip>
            <a-tooltip>
              <template #title>{{ Detail.likeText }}</template>
              <div class="modelinfo_sumItem modelinfo_sumItemLike">
                <div class="modelinfo_like modelinfo_icon"></div>
                <span>{{ Detail.like }}</span>
              </div>
            </a-tooltip>
          </div>
        </div>
        <div class="modelinfo_second" style="height: 100%">
          <div class="modelinfo_auditTime">最近更新时间：<!-- -->2023.10.4</div>
          <span
            class="modelinfo_tagItem"
            :key="label"
            v-for="label in Detail.lables"
          >
            {{ label }}</span
          >
        </div>
        <div class="relative" style="overflow: hidden">
          <div class="modelinfo_third">
            <a-tabs v-model:activeKey="activeKey">
              <a-tab-pane :key="1" tab="v2.0"> </a-tab-pane>
              <a-tab-pane :key="2" tab="v1.0"> </a-tab-pane>
            </a-tabs>
          </div>
          <img class="modelinfo_fifth" src="@/assets/icon/heart.png" />
          <img class="modelinfo_fourth" src="@/assets/icon/ellipsis.png" />
        </div>
      </div>
      <div class="modelinfo_content">
        <div class="modelinfo_left">
          <div v-show="activeKey == 1">
            <Slider :list="sliderList"></Slider>
          </div>
          <div v-show="activeKey == 2">
            <Slider :list="sliderList"></Slider>
          </div>
        </div>
        <div class="modelinfo_right">
          <div class="modelAuthorInfo_author">
            <div class="modelAuthorInfo_top">
              <a
                target="_blank"
                href="/userpage/148ecce3d0a74e3ca867307cd77bc1cd/model"
                ><img
                  style="width: 72px; height: 72px"
                  src="@/assets/avator.webp"
                  class="modelAuthorInfo_photo"
                  alt=""
              /></a>
              <div class="modelAuthorInfo_basic">
                <div class="modelAuthorInfo_name">B站绪儿已成精</div>
                <div class="modelAuthorInfo_tag">
                  <div class="modelAuthorInfo_tagInner">
                    <img
                      class="modelAuthorInfo_diamond"
                      src="@/assets/icon/diamond.png"
                      alt=""
                    />模型原创者
                  </div>
                </div>
                <div class="modelAuthorInfo_summary">
                  <div class="modelAuthorInfo_sumItem">
                    <div
                      class="modelAuthorInfo_fans modelAuthorInfo_icon"
                    ></div>
                    <span class="modelAuthorInfo_num">1.8k</span>
                  </div>
                  <div class="modelAuthorInfo_sumItem">
                    <div
                      class="modelAuthorInfo_upload modelAuthorInfo_icon"
                    ></div>
                    <span class="modelAuthorInfo_num">614</span>
                  </div>
                  <div class="modelAuthorInfo_sumItem">
                    <div class="modelAuthorInfo_run modelAuthorInfo_icon"></div>
                    <span class="modelAuthorInfo_num">174.9k</span>
                  </div>
                  <div class="modelAuthorInfo_sumItem">
                    <div
                      class="modelAuthorInfo_download modelAuthorInfo_icon"
                    ></div>
                    <span class="modelAuthorInfo_num">25.5k</span>
                  </div>
                </div>
                <div class="modelAuthorInfo_follow">关注</div>
              </div>
            </div>
          </div>

          <div class="modelinfo_runPic">
            <img
              src="@/assets/runPic.png"
              alt=""
              class="modelinfo_icon"
            />制作同款
          </div>

          <div class="modelinfo_addDownModelWrap">
            <div class="modelinfo_addBank">
              <img
                src="@/assets/icon/tick3.png"
                alt=""
                class="modelinfo_icon"
              />已点赞
            </div>
            <div class="modelinfo_downModel modelinfo_canDownModel">
              <img
                src="@/assets/icon/download4.png"
                alt=""
                class="modelinfo_icon"
              />
              <div class="modelinfo_inner">分享当前链接</div>
              <!-- <div class="modelinfo_size"><span>(144.11MB)</span></div> -->
            </div>
          </div>

          <div class="modelinfo_verify">
            <div class="modelinfo_verifyLeft">
              <img class="modelinfo_icon" src="@/assets/icon/safe.png" />
              <span class="modelinfo_text">已验证：<!-- -->2023-9-29</span>
            </div>
            <div class="modelinfo_verifyRight">
              <span class="modelinfo_text">safetensors</span>
              <img class="modelinfo_icon" src="@/assets/icon/info.png" />
            </div>
          </div>

          <!-- <ModelInfoCard></ModelInfoCard>

                    <Access></Access> -->
        </div>
      </div>
      <div style="width: 869px">
        <Comment></Comment>
      </div>

      <WaterFall></WaterFall>
      <Footer></Footer>
    </div>
  </main>
</template>
<style lang="scss" scoped>
.layout_main {
  padding: 70px 0 75px;
}

.modelinfo_modelPage {
  width: 1440px;
  margin: 0 auto;
  padding: 0 76px 0 56px;
  font-family: PingFang SC;
}

.modelinfo_header {
  position: relative;
  margin-top: 10px;
}

.modelinfo_first {
  position: relative;
  display: flex;
  align-items: center;
  height: 36px;
  margin-top: 24px;
}

.modelinfo_title {
  max-width: 624px;
  overflow: hidden;
  color: #191919;
  font-weight: 500;
  font-size: 26px;
  line-height: 36px;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.modelinfo_operLabel {
  width: 75px;
  height: 24px;
  margin-left: 16px;
}

.modelinfo_type {
  height: 25px;
  margin-left: 8px;
  padding: 0 12px;
  color: #3d3d3d;
  line-height: 25px;
  white-space: nowrap;
  border: 1px solid #3d3d3d;
  border-radius: 25px;
}

.modelinfo_summary {
  display: flex;
  margin-left: 2px;
}

.modelinfo_summary .modelinfo_run {
  background: url("@/assets/icon/run.png") no-repeat 50%;
  background-size: contain;
}

.modelinfo_summary .modelinfo_download {
  background: url("@/assets/icon/download.png") no-repeat 50%;
  background-size: contain;
}

.modelinfo_summary .modelinfo_subscribe {
  background: url("@/assets/icon/subscribe.png") no-repeat 50%;
  background-size: contain;
}

.modelinfo_summary .modelinfo_like {
  background: url("@/assets/icon/like.png") no-repeat 50%;
  background-size: contain;
}

.modelinfo_summary .modelinfo_icon {
  position: relative;
  width: 12px;
  height: 12px;
  margin-right: 4px;
}

.modelinfo_sumItem {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 25px;
  margin-left: 8px;
  padding: 0 12px;
  font-size: 12px;
  background: #f1f2f6;
  border-radius: 25px;
  cursor: default;
}

.modelinfo_second {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 896px;
  margin-top: 12px;
  padding-right: 30px;
  overflow-y: hidden;
}

.modelinfo_third {
  width: 896px;
  margin-top: 10px;
}

.modelinfo_auditTime {
  flex-shrink: 0;
  margin-right: 16px;
  margin-bottom: 8px;
  color: #999;
  font-weight: 400;
  font-size: 14px;
}

.modelinfo_tagItem {
  flex-shrink: 0;
  box-sizing: border-box;
  height: 21px;
  margin-right: 10px;
  margin-bottom: 8px;
  padding: 0 12px;
  color: #4f4f4f;
  font-size: 14px;
  line-height: 21px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
}

.modelinfo_modelPage ::v-deep .ant-tabs-tab-active {
  font-size: 22px;
}

.modelinfo_modelPage ::v-deep .ant-tabs-tab {
  display: flex;
  align-items: flex-end;
  height: 31px;
  padding: 0;
  font-family: PingFang SC;
}

.modelinfo_modelPage ::v-deep .ant-tabs-tab-active .ant-tabs-tab-btn {
  color: #191919;
  line-height: 31px;
  margin-bottom: 2px;
}

.modelinfo_modelPage ::v-deep .ant-tabs-top > .ant-tabs-nav {
  margin: 0;
}

.modelinfo_modelPage ::v-deep .ant-tabs-ink-bar {
  background: #191919;
}

.modelinfo_fifth {
  top: -20px;
  position: absolute;
  transform: scale(0.5);
  right: 30px;
  bottom: -4px;
  padding: 10px;
  cursor: pointer;
}

.modelinfo_fourth {
  top: -20px;
  position: absolute;
  transform: scale(0.5);
  right: 0;
  bottom: -4px;
  padding: 10px;
  cursor: pointer;
}

.modelinfo_modelPage .modelinfo_content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 9px;
}

.modelinfo_left {
  width: 896px;
}

.modelinfo_right {
  width: 386px;
  margin-top: 9px;
}

.modelAuthorInfo_author {
  display: flex;
  flex-direction: column;
  margin-bottom: 17px;
  background: #f1f2f6;
  border-radius: 14px;
}

.modelAuthorInfo_top {
  position: relative;
  display: flex;
  padding: 16px 12px 10px 16px;
}

.modelAuthorInfo_photo {
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  object-fit: cover;
  border: 1px solid #fff;
  border-radius: 50%;
}

.modelAuthorInfo_basic {
  margin-left: 12px;
}

.modelAuthorInfo_name {
  width: fit-content;
  height: 21px;
  color: #191919;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
}

.modelAuthorInfo_tag {
  width: -moz-fit-content;
  width: fit-content;
  margin-top: 5px;
  color: #aa8645;
  font-weight: 400;
  background: linear-gradient(94.11deg, #efd6a9 10.52%, #f0dcbc 107.96%);
  border-radius: 4px;
  transform: skew(-10deg);
}

.modelAuthorInfo_tagInner {
  display: flex;
  align-items: center;
  height: 22px;
  padding: 0 8px 0 5px;
  font-size: 14px;
  line-height: 22px;
  transform: skew(10deg);
}

.modelAuthorInfo_diamond {
  width: 18px;
  margin-top: -1px;
  margin-right: 1px;
}

.modelAuthorInfo_summary {
  display: flex;
  margin-top: 11px;
}

.modelAuthorInfo_sumItem {
  display: flex;
  align-items: center;
  height: 13px;
  color: #999;
}

.modelAuthorInfo_num {
  margin-right: 9px;
  font-size: 10px;
}

.modelAuthorInfo_fans {
  background: url(@/assets/icon/user2.png) 50% no-repeat;
  background-size: contain;
}

.modelAuthorInfo_upload {
  background: url(@/assets/icon/upload2.png) 50% no-repeat;
  background-size: contain;
}

.modelAuthorInfo_run {
  background: url(@/assets/icon/run2.png) 50% no-repeat;
  background-size: contain;
}

.modelAuthorInfo_download {
  background: url(@/assets/icon/download2.png) 50% no-repeat;
  background-size: contain;
}

.modelAuthorInfo_icon {
  width: 12px;
  height: 12px;
  margin-right: 2px;
}

.modelAuthorInfo_follow {
  position: absolute;
  top: 22px;
  right: 12px;
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 18px;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  font-family: PingFang SC;
  background: #384455;
  border-radius: 12px;
  cursor: pointer;
}

.modelinfo_runPic {
  display: flex;
  flex: 1 1;
  align-items: center;
  justify-content: center;
  height: 56px;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  font-style: normal;
  background: #3162ff;
  border-radius: 14px;

  .modelinfo_icon {
    width: 24px;
    height: 24px;
    margin-right: 6px;
  }
}

.modelinfo_addDownModelWrap {
  display: flex;
  align-items: center;
  margin-top: 16px;
}

.modelinfo_addBank {
  display: flex;
  flex: 1 1;
  align-items: center;
  justify-content: center;
  height: 56px;
  margin-right: 8px;
  color: #303030;
  font-weight: 500;
  font-size: 16px;
  background: #f1f2f6;
  border-radius: 14px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.modelinfo_downModel {
  display: flex;
  flex: 1 1;
  align-items: center;
  justify-content: center;
  height: 56px;
  color: #303030;
  font-weight: 500;
  font-size: 16px;
  background: #f1f2f6;
  border: 1px solid #dfe1e7;
  border-radius: 14px;
  cursor: pointer;
}

.modelinfo_addBank .modelinfo_icon {
  width: 20px;
  height: 20px;
  margin-right: 6px;
}

.modelinfo_downModel .modelinfo_icon {
  width: 18px;
  height: 18px;
  margin-right: 6px;
}

.modelinfo_downModel .modelinfo_inner {
  position: relative;
}

.modelinfo_downModel .modelinfo_size {
  margin-left: 2px;
  color: #333;
  font-weight: 500;
  font-size: 12px;
  font-style: normal;
}

.modelinfo_verify .modelinfo_verifyLeft,
.modelinfo_verifyRight {
  display: flex;
  align-items: center;
}

.modelinfo_verify .modelinfo_verifyRight {
  display: flex;
  align-items: center;
}

.modelinfo_verify {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 14px;
  margin-top: 4px;
  color: #999;
}

.modelinfo_verify .modelinfo_text {
  margin-right: 2px;
  transform-origin: right;
  font-size: 12px;
}

.modelinfo_verify .modelinfo_icon {
  width: 14px;
  height: 14px;
}
</style>
