<script setup>
import { useUserStore } from "@/stores/modules/user";
const userStore = useUserStore();

console.log(userStore.userInfo);

import { ref, reactive } from "vue";

const content = ref("");
const items = reactive([
  {
    id: "testid",
    phone: "176****3982",
    content: "手动阀；世纪东方阿萨水电费",
    time: "2023-10-18 22:35:17",
    rely: false,
    relyContent: "",
    support: 1,
  },

  {
    id: "testid2",
    phone: "176****3982",
    content: "手动阀；世纪东方阿萨水电费",
    time: "2023-10-18 22:35:17",
    rely: false,
    relyContent: "",
    support: 1,
  },
  {
    id: "testid3",
    phone: "176****3982",
    content: "手动阀；世纪东方阿萨水电费",
    time: "2023-10-18 22:35:17",
    rely: false,
    relyContent: "",
    support: 1,
  },
]);

const handleRely = (item) => {
  console.log((item.rely = true));
};

const handlePublish = () => {
  console.log(content.value);
};

const handleChildPublish = (item) => {
  console.log(item);
};

const handleSupport = (item) => {
  item.support += 1;
};

const handleDelete = (id) => {
  const index = items.findIndex((k) => k.id == id);
  items.splice(index, 1);
};
</script>
<template>
  <div class="CommentImageArea_container">
    <div class="CommentImageArea_commentBox">
      <div class="CommentImageArea_commentTopBar mb-20px">
        <img
          v-if="userStore.userInfo.token"
          class="CommentImageArea_iconAvatar"
          src="../../images/tx.webp"
          style="width: 50px; height: 50px"
        />
        <a-textarea
          v-model:value="content"
          placeholder="赞美或讨论，畅所欲言~"
          class="CommentImageArea_commentTopBarInput"
          style="resize: none"
        >
        </a-textarea>

        <div class="CommentImageArea_imagePublishButton" @click="handlePublish">
          发布
        </div>
      </div>
      <template v-if="userStore.userInfo.token">
        <div
          class="CommentImageArea_firstStageCard"
          style="padding-right: 0px"
          v-for="(item, index) in items"
          :key="item.id"
        >
          <div class="CommentImageArea_firstStageUserArea">
            <a href="/userpage/24ade097d08744d9a462b851543d2175/model">
              <img
                src="../../images/tx.webp"
                alt=""
                style="width: 50px; height: 50px"
              />
            </a>
            <span class="CommentImageArea_name">{{ item.phone }}</span>
          </div>
          <p class="CommentImageArea_firstStageContent">{{ item.content }}</p>
          <div class="CommentImageArea_firstStageUtil">
            <span>{{ item.time }}</span>
            <div>
              <span
                class="CommentImageArea_firstStageUtilLike"
                @click="handleSupport(item)"
              >
                <img src="../../images/group.png" alt="" />{{ item.support }}
              </span>
              <span
                class="CommentImageArea_firstStageUtilAns"
                @click="handleRely(item)"
              >
                回复
              </span>
              <span
                class="CommentImageArea_firstStageUtilAns"
                @click="handleDelete(item.id)"
              >
                删除
              </span>
            </div>
          </div>
          <div
            class="CommentImageArea_revertTextArea revertTextAreaSection"
            v-if="item.rely"
          >
            <div class="CommentImageArea_revertContent">
              <a-textarea
                v-model:value="item.relyContent"
                class="CommentImageArea_revertTextAreaSection"
                style="resize: none"
              >
              </a-textarea>
              <div
                class="CommentImageArea_imagePublishButton"
                @click="handleChildPublish(item)"
              >
                发布
              </div>
            </div>
          </div>
        </div>
      </template>
      <div class="CommentImageArea_empty mt-20px" v-if="items.length == 0">
        <a-empty>
          <template #description> 暂无评论，快发表你的意见吧～ </template>
        </a-empty>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.CommentImageArea_container {
  width: 100%;
  margin-right: 0px;
  border: none;
  border-radius: 12px;
}

.CommentImageArea_commentBox {
  position: relative;
  width: 100%;
}

.CommentImageArea_commentTopBar {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

.CommentImageArea_commentTopBarInput {
  width: 100%;
  height: 42px;
  padding-left: 14px;
  color: #666;
  border-radius: 12px;
  border: none;
  line-height: 32px;
  box-shadow: unset;

  background-color: #f1f2f6;

  &:focus {
    border: none;
  }
}

.CommentImageArea_firstStageUserArea {
  display: flex;
  align-items: center;
}

.CommentImageArea_firstStageUserArea img {
  margin-right: 16px;
  object-fit: cover;
  border-radius: 50%;
}

.CommentImageArea_firstStageUtilAns {
  cursor: pointer;
}

.CommentImageArea_firstStageUtil div {
  display: flex;
  flex-shrink: 0;
  align-items: center;
}

.CommentImageArea_firstStageUtilLike img {
  width: 16px;
  height: 16px;
  margin-right: 2px;
}

.CommentImageArea_imagePublishButton {
  position: absolute;
  right: 16px;
  display: block;
  color: #333;
  font-size: 14px;
  cursor: pointer;
}

.CommentImageArea_iconAvatar {
  flex-shrink: 0;
  margin-right: 16px;
  object-fit: cover;
  border-radius: 50%;
}

.CommentImageArea_firstStageCard {
  width: 100%;
  margin-bottom: 14px;
}

.CommentImageArea_firstStageContent {
  margin-bottom: 2px;
  margin-left: 66px;
  line-height: 20px;
  white-space: pre-wrap;
  word-break: break-all;
}

.CommentImageArea_name {
  margin-right: 10px;
  color: #333;
  font-weight: 500;
  font-size: 16px;
}

.CommentImageArea_firstStageUtil {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 18px;
  margin-left: 66px;
  color: #999;
  font-weight: 500;
  font-size: 12px;

  span {
    margin-left: 12px;
  }

  span:first-child {
    margin-left: 0;
  }
}

.CommentImageArea_firstStageUtil .CommentImageArea_firstStageUtilLike {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.CommentImageArea_firstStageCard .CommentImageArea_revertTextArea {
  margin-top: 5px;
}

.CommentImageArea_firstStageCard
  .CommentImageArea_revertTextArea
  .CommentImageArea_revertContent {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 66px;
}

.CommentImageArea_revertTextAreaSection {
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

.CommentImageArea_imagePublishButton {
  position: absolute;
  right: 16px;
  display: block;
  color: #333;
  font-size: 14px;
  cursor: pointer;
}
</style>
@/stores/modules/user
