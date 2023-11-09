<script setup></script>
<template>
  <div class="modelinfo_footer">
    <div class="NewFooter_footer">
      <div class="NewFooter_group15">
        <a class="NewFooter_tag32" href="/document/article_member">用户协议</a>
        <a class="NewFooter_tag32" href="/document/article_private">隐私政策</a>
        <a class="NewFooter_tag32" href="/document/about">关于我们</a>
      </div>
      <a
        target="_blank"
        href="https://www.beian.gov.cn/portal/registerSystemInfo"
        style="
          text-align: center;
          font-size: 12px;
          margin-top: 8px;
          color: #999;
          text-decoration: none;
        "
        rel="noreferrer"
        >北京xxx科技有限公司 | 京ICP备xxx442号</a
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.modelinfo_footer {
  margin: 0 -76px 0 -56px;
  background: #f7f7f7;
}

.NewFooter_footer {
  z-index: 9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  color: #999;
  border-top: 1px solid #ebebeb;
}

.NewFooter_empty {
  position: relative;
  width: 100%;
  height: 2px;
  margin-top: -2px;
}

.NewFooter_group15 {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 17px;
  white-space: nowrap;
}

.NewFooter_tag32 {
  margin-right: 12px;
  color: #999;
  font-size: 12px;
  text-align: left;
  cursor: pointer;
}

.NewFooter_label10,
.NewFooter_label9,
.NewFooter_tag33,
.NewFooter_word8 {
  margin-right: 30px;
  color: #999;
  font-size: 12px;
  text-align: left;
}

.NewFooter_word9 {
  color: #999;
  font-size: 12px;
  text-align: left;
}

.NewFooter_icon {
  width: 20px;
  height: 20px;
}
</style>
