<script lang="ts" setup>
</script>

<template>
  <div class="main-group1" id="hiddenInMobile">
    <div class="index_footerPlace">
      <div class="indexFooter_footer" style="width: 124px">
        <div class="indexFooter_logoPlace">
          <img
            class="indexFooter_logoImg"
            src="@/assets/libailogo.png"
            alt=""
          />
        </div>
        <div class="indexFooter_groupFooter" style="width: 124px">
          <a
            class="indexFooter_tagFotter indexFooter_tagFotterleft"
            style="left: -2px; text-decoration: none"
            id="tagFotterpos1"
            href="/document/article_member"
            >用户协议</a
          ><a
            class="indexFooter_tagFotter indexFooter_tagFotterleft"
            id="tagFotterpos2"
            href="/document/article_private"
            style="left: 38px; text-decoration: none"
            >隐私政策</a
          ><a
            id="tagFotterpos3"
            class="indexFooter_tagFotter indexFooter_tagFotterleft"
            style="left: 80px; text-decoration: none"
            href="/document/about"
            >关于我们</a
          >
        </div>
        <div class="indexFooter_companyInfo">
          <div class="indexFooter_infoWropper">
            <a
              target="_blank"
              href="https://www.beian.gov.cn/portal/registerSystemInfo"
              style="
                text-align: center;
                font-size: 8px;
                margin-top: 8px;
                color: #999;
                text-decoration: none;
              "
              rel="noreferrer"
              >xxxx星宇科技有限公司</a
            >
          </div>
          <div class="indexFooter_infoWropper">
            <a
              target="_blank"
              href="https://www.beian.gov.cn/portal/registerSystemInfo"
              style="
                text-align: left;
                font-size: 8px;
                margin-top: 8px;
                color: #999;
                text-decoration: none;
              "
              rel="noreferrer"
              >京ICP备xxx号</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.index_footerPlace {
  position: fixed;
  bottom: 0;
  left: 0;
}

.indexFooter_footer {
  position: fixed;
  bottom: 0;
  left: 12px;
  z-index: 9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 124px;
  height: 75px;
  margin-top: 2px;
  color: #999;
  background: #fff;
}

.indexFooter_logoPlace {
  width: 124px;
  border-bottom: 1px solid #ebebeb;
}

.indexFooter_logoImg {
  width: 40px;
  height: 12px;
}

.indexFooter_groupFooter {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  height: 17px;
  padding-top: 12px;
  white-space: nowrap;
  transform: translateX(-8px);
  width: 124px;
}

.indexFooter_tagFotter {
  position: absolute;
  display: inline-block;
  height: 11px;
  margin: 0;
  padding: 0;
  color: #999;
  font-weight: 400;
  font-size: 8px;
  font-family: PingFang SC;
  font-style: normal;
  line-height: 11px;
  text-align: left;
  transform: scale(0.66);
  cursor: pointer;
}

.indexFooter_companyInfo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 124px;
  padding-top: 6px;
  font-size: 8px;
  text-align: left;
}

.indexFooter_infoWropper {
  width: 124px;
  white-space: nowrap;
  text-align: left;
  transform: scale(0.66) translateX(-35px);
}

@media screen and (max-width: 750px) {
  #hiddenInMobile {
    display: none;
  }
}
</style>
