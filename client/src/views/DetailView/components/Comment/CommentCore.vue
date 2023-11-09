<script setup lang="ts">
import big from "./img/big.webp";
import small from "./img/small.webp";
</script>
<template>
  <div class="CommentArea_commentWrap" style="padding-right: 128px">
    <div class="CommentArea_commentAvatar">
      <a href="/userpage/987ba82c189ed8f232bee2397dab81d2/model">
        <img :src="big" alt="" style="width: 50px; height: 50px"
      /></a>
    </div>
    <div class="CommentArea_commentInfo">
      <div class="CommentArea_commentAuthorInfo">
        <span class="CommentArea_name">元一君</span>
      </div>
      <div class="CommentArea_commentContent">
        <div class="CommentArea_firstStageContent">
          什么时候能再出一个不内置nwsj的版本呢，礼貌询问，谢谢。
        </div>
      </div>
      <div class="CommentArea_commentFirstUtil">
        <span>2023-08-11 20:32:41</span>
        <div>
          <span class="CommentArea_firstStageUtilLike">
            <img src="./icon/group.png" alt="" />
            3
          </span>
          <span class="CommentArea_firstStageUtilAns">回复</span>
        </div>
      </div>
      <div
        class="CommentArea_revertTextArea revertTextAreaSection"
        id="revertId-43801"
      >
        <div class="CommentArea_revertContent">
          <a-textarea class="CommentArea_revertTextAreaSection"></a-textarea>
          <a-button type="primary" class="CommentArea_imagePublishButton"
            >发布</a-button
          >
        </div>
      </div>
      <div class="CommentArea_secondStageCard">
        <div class="CommentArea_secondStageUserArea">
          <a href="/userpage/67353675955888d18ba707b53ee5b693/model">
            <img :src="small" alt="" style="width: 25px; height: 25px" />
          </a>
          <span class="CommentArea_name">lllxdan</span>
        </div>
        <p class="CommentArea_secondStageContent">
          回复<span class="CommentArea_secondStageName">@元一君</span>
          <span>nwsj是啥</span>
        </p>
        <div class="CommentArea_secondStageUtil">
          <span>2023-08-13 16:53:38</span>
          <div>
            <span class="CommentArea_secondStageUtilLike">
              <img src="./icon/group.png" alt="" />0</span
            ><span class="CommentArea_secondStageUtilAns">回复</span>
          </div>
        </div>
        <div class="CommentArea_revertTextArea revertTextAreaSection">
          <div class="CommentArea_revertContent">
            <a-textarea class="CommentArea_revertTextAreaSection"></a-textarea>
            <a-button type="primary" class="CommentArea_imagePublishButton"
              >发布</a-button
            >
          </div>
        </div>
      </div>
      <div class="CommentArea_secondStageCard">
        <div class="CommentArea_secondStageUserArea">
          <a href="/userpage/3522ca81615d41e8bd24e2f97cebfb1d/model">
            <img :src="small" alt="" style="width: 25px; height: 25px" /></a
          ><span class="CommentArea_name">周杰轮</span>
        </div>
        <p class="CommentArea_secondStageContent">
          回复<span class="CommentArea_secondStageName">@元一君</span
          ><span>同问</span>
        </p>
        <div class="CommentArea_secondStageUtil">
          <span>2023-08-14 01:16:42</span>
          <div>
            <span class="CommentArea_secondStageUtilLike">
              <img src="./icon/group.png" alt="" />0</span
            >
            <span class="CommentArea_secondStageUtilAns">回复</span>
          </div>
        </div>
        <div class="CommentArea_revertTextArea revertTextAreaSection">
          <div class="CommentArea_revertContent">
            <a-textarea class="CommentArea_revertTextAreaSection"></a-textarea>
            <a-button type="primary" class="CommentArea_imagePublishButton"
              >发布</a-button
            >
          </div>
        </div>
      </div>
      <div class="CommentArea_learnMore">
        <div>共14条回复，点击查看</div>
        <span></span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.CommentArea_commentWrap {
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 14px;
}

.CommentArea_commentAvatar {
  display: flex;
  align-items: center;
  margin-top: -14px;

  img {
    margin-right: 16px;
    object-fit: cover;
    border-radius: 50%;
  }
}

.CommentArea_commentInfo {
  flex: 1 1;
}

.CommentArea_commentAuthorInfo {
  position: relative;
  display: flex;
  align-items: center;
}

.CommentArea_name {
  margin-right: 10px;
  margin-bottom: 4px;
  color: #333;
  font-weight: 500;
  font-size: 16px;
}

.CommentArea_firstStageContent {
  margin-bottom: 2px;
  color: #333;
  font-weight: 400;
  font-size: 14px;
  font-style: normal;
  line-height: 20px;
  white-space: pre-wrap;
  word-break: break-all;
}

.CommentArea_commentFirstUtil {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 18px;
  color: #999;
  font-weight: 500;
  font-size: 12px;

  :first-child {
    margin-left: 0;
  }

  div {
    display: flex;
    flex-shrink: 0;
    align-items: center;
  }

  span:first-child {
    margin-left: 0;
  }

  .CommentArea_firstStageUtilLike img {
    width: 16px;
    height: 16px;
    margin-right: 2px;
  }

  span {
    margin-left: 12px;
  }

  .CommentArea_firstStageUtilAns {
    cursor: pointer;
  }
}

.CommentArea_revertTextArea {
  display: none;
  margin-top: 5px;
}

.CommentArea_revertTextArea .CommentArea_revertContent {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

.CommentArea_revertTextAreaSection {
  width: 100%;
  height: 42px !important;
  padding: 4px 14px;
  color: #666;
  font-size: 14px;
  line-height: 32px;
  background-color: #f1f2f6;
  border: none;
  border-radius: 8px;
  resize: none;
}

.CommentArea_imagePublishButton {
  position: absolute;
  right: 0;
  display: block;
  color: #333;
  font-size: 14px;
  cursor: pointer;
}

.CommentArea_secondStageCard {
  width: 100%;
  margin-top: 14px;
}

.CommentArea_secondStageUserArea {
  display: flex;
  align-items: center;
}

.CommentArea_secondStageUserArea img {
  margin-right: 4px;
  object-fit: cover;
  border-radius: 50%;
}

.CommentArea_name {
  color: #333;
  font-weight: 500;
  font-size: 16px;
}

.CommentArea_secondStageContent {
  margin-bottom: 2px;
  margin-left: 29px;
  font-size: 14px;
  line-height: 20px;
  white-space: pre-wrap;
  word-break: break-all;
}

.CommentArea_secondStageName {
  margin-right: 8px;
  color: #3162ff;
}

.CommentArea_secondStageUtil {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 18px;
  margin-left: 29px;
  color: #999;
  font-weight: 500;
  font-size: 12px;

  span:first-child {
    margin-left: 0;
  }

  div {
    display: flex;
    flex-shrink: 0;
    align-items: center;
  }
}

.CommentArea_secondStageUtilLike {
  display: flex;
  align-items: center;
  cursor: pointer;

  span:first-child {
    margin-left: 0;
  }

  img {
    width: 16px;
    height: 16px;
    margin-right: 2px;
  }
}

.CommentArea_secondStageUtil span {
  margin-left: 12px;
}

.CommentArea_learnMore {
  display: flex;
  align-items: center;
  margin-top: 12px;
  color: #b4b4b4;
  font-weight: 500;
  font-size: 13px;
  cursor: pointer;

  div {
    flex-shrink: 0;
  }

  span {
    width: 100%;
    height: 1px;
    background-color: #eee;
  }
}
</style>
