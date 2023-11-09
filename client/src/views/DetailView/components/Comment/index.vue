<script setup>
import CommentCore from "./CommentCore.vue";
</script>

<template>
  <div class="CommentArea_commentTitleWrap">
    <div class="CommentArea_commentTitle">
      讨论区<span class="CommentArea_commentNum">152</span>
    </div>
    <div class="CommentArea_hotNewWrap">
      <div class="CommentArea_hot CommentArea_hotNewSelect">最热</div>
      <div>|</div>
      <div class="CommentArea_new">最新</div>
    </div>
  </div>
  <div class="CommentArea_container">
    <div class="CommentArea_commentBox">
      <div class="CommentArea_commentTopBar">
        <a-textarea
          class="CommentArea_commentTopBarInput"
          style="margin-right: 8px; line-height: 32px; resize: none"
          placeholder="赞美或讨论，畅所欲言~"
        />
        <a-button type="primary" class="CommentArea_publishButton"
          >发 布</a-button
        >
      </div>
      <CommentCore></CommentCore>
      <div class="CommentArea_commentLearnMore">
        <div>展开剩余评论</div>
        <img src="./icon/arrow_down.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.CommentArea_commentTitleWrap {
  display: flex;
}

.CommentArea_commentTitle {
  height: 36px;
  margin: 36px 0 8px;
  color: #333;
  font-weight: 500;
  font-size: 20px;
  line-height: 36px;
}

.CommentArea_commentNum {
  margin-left: 6px;
  color: #828282;
  font-weight: 500;
  font-size: 16px;
  font-style: normal;
  line-height: 22px;
}

.CommentArea_hotNewWrap {
  display: flex;
  align-items: center;
  height: 36px;
  margin-top: 36px;
  margin-left: 58px;
  color: #999;
  font-weight: 400;
  font-size: 14px;
  font-style: normal;
}

.CommentArea_hot {
  margin-right: 12px;
  cursor: pointer;
}

.CommentArea_hotNewSelect {
  color: #333;
}

.CommentArea_new {
  margin-left: 12px;
  cursor: pointer;
}

.CommentArea_commentTopBar {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
}

.CommentArea_commentTopBarInput {
  width: 100%;
  height: 42px;
  margin-right: 8px;
  padding-left: 14px;
  color: #666;
  background-color: #f1f2f6;
  border: none;
  border-radius: 12px;
}

.CommentArea_publishButton {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 42px;
  color: #fff;
  background-color: #3162ff;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background: #4672ff;
  }
}

.CommentArea_commentLearnMore {
  display: flex;
  align-items: center;
  color: #333;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;

  img {
    width: 18px;
    height: 18px;
  }
}
</style>
