<script setup lang="ts">
import { reactive, ref } from "vue";
import Nav from "./Navbak3.vue";
const hotIndex = ref(0);
const hotLabel = reactive(["推荐", "最热", "最新"]);

const timeLabel = reactive([
  "全部时间",
  "最近一天",
  "最近一周",
  "最近一个月",
  "最近一年",
]);

const tags = reactive([
  "Checkpoint",
  "Textual Inversion",
  "Hypernetwork",
  "Aesthetic Gradient",
  "LORA",
  "LyCORIS",
  "Controlnet",
  "Poses",
  "Wildcards",
  "Other",
]);

const baseTags = reactive(["SD 2.1", "SD 1.5", "SD XL"]);

const handleHotLabel = (index: number) => {
  hotIndex.value = index;
};

const handleTimeLabel = (label: string) => {
  console.log(label);
};

const handleTag = (tag: string) => {
  console.log(tag);
};
</script>
<template>
  <div class="filter_mod" id="hiddenInMobile">
    <div class="fileter-container">
      <div class="filter_body">
        <Nav></Nav>
      </div>
      <div class="filter_header">
        <div class="filter_headerRight">
          <div
            :class="
              hotIndex == labelIndex
                ? 'filter_selectSortRule'
                : 'filter_UnselectSortRule'
            "
            @click="handleHotLabel(labelIndex)"
            :key="label"
            v-for="(label, labelIndex) in hotLabel"
          >
            {{ label }}
            <img
              :class="
                hotIndex == labelIndex ? 'filter_dotShow' : 'filter_dotHide'
              "
              class=""
              src="@/assets/icon/dot.svg"
            />
          </div>
        </div>
        <div style="display: flex">
          <a-dropdown arrow>
            <a class="filter-groupItem1" @click.prevent>
              <img src="@/assets/icon/time.svg" />
              <span class="filter-label">全部时间</span>
              <img src="@/assets/icon/downArrow.svg" />
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item
                  @click="handleTimeLabel(label)"
                  :key="label"
                  v-for="label in timeLabel"
                >
                  <a href="javascript:;">{{ label }}</a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
          <div style="position: relative" class="mr-12px">
            <a-popover class="filter_group" placement="bottomRight">
              <template #content>
                <div class="filter_layerWapper w-296px h-442px">
                  <span class="filter_tag">模型类型</span>
                  <div class="filter_blocks">
                    <div
                      class="filter_checkpointwrapper filter_hypernetwork"
                      :key="tag"
                      v-for="tag in tags"
                      @click="handleTag(tag)"
                    >
                      {{ tag }}
                    </div>
                  </div>
                  <span class="filter_tag">基础模型</span>
                  <div class="filter_blocks">
                    <div
                      class="filter_checkpointwrapper filter_hypernetwork"
                      :key="tag"
                      v-for="tag in baseTags"
                      @click="handleTag(tag)"
                    >
                      {{ tag }}
                    </div>
                  </div>
                  <div class="filter_tagWrapper">
                    <a-button type="primary" block class="filter_tegg"
                      >重置过滤选项
                    </a-button>
                  </div>
                </div>
              </template>
              <a class="filter-label" @click.prevent>
                <img src="@/assets/icon/filter.svg" alt="" />
                <span class="filter-label">筛选</span>
                <img src="@/assets/icon/downArrow.svg" alt="" />
              </a>
            </a-popover>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.filter_mod {
  position: relative;
  width: 100%;
  font-family: PingFang SC;
  line-height: 14px;
  white-space: nowrap;
}

.filter_container {
}

.filter_body {
  position: relative;
  width: 100%;
  margin-top: 30px;
}

.filter_header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  line-height: normal;
  white-space: normal;
}

.filter_headerRight {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-left: 12px;
}

.filter_selectSortRule {
  top: 165px;
  left: 151px;
  height: 21px;
  padding-right: 20px;
  color: #666;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
}

.filter_UnselectSortRule {
  padding-right: 20px;
  color: #aaa;
  font-weight: 400;
  font-size: 14px;
  font-family: PingFang SC;
  font-style: normal;
  line-height: 21px;
  cursor: pointer;
}

.filter_dotShow {
  display: block;
  margin: 0 auto;
  width: 4;
  height: 4;
  fill: none;
}

.filter_dotHide {
  display: none;
}

.filter-label {
  margin-right: 4px;
  margin-left: 6px;
  color: #4f4f4f;
  font-weight: 400;
  font-size: 14px;
  font-style: normal;
  line-height: 20px;
  white-space: nowrap;
  text-align: left;
}

.filter-groupItem1 {
  display: flex;
  align-items: center;
  height: 22px;
  margin-right: 34px;
  cursor: pointer;
}

.filter_group {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.filter_tagWrapper {
  & > button {
    background-color: #3162ff;
    width: 264px;
    height: 38px;

    &:hover {
      background-color: #4672ff;
    }
  }
}

.filter_layerWapper {
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  white-space: nowrap;
}

.filter_tag {
  position: relative;
  max-width: 266px;
  height: 22px;
  margin-top: 22px;
  margin-left: 15px;
  overflow: hidden;
  color: #333;
  font-weight: 600;
  font-size: 12px;
  text-align: left;
  text-overflow: ellipsis;
}

.filter_blocks {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-left: 15px;
  line-height: 12px;
  white-space: normal;
}

.filter_tagWrapper {
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  margin-top: 32px;
  line-height: 14px;
  border-radius: 8px;
}

.filter_checkpointwrapper {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 30px;
  margin-top: 8px;
  margin-right: 8px;
  padding-right: 16px;
  padding-left: 16px;
  color: #333;
  white-space: nowrap;
  background-color: #f0f0f0;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  }
}

.filter_hypernetwork {
  margin-left: 4px;
  font-size: 12px;
  line-height: 12px;
  white-space: nowrap;
  text-align: left;
}

@media screen and (max-width: 750px) {
  #hiddenInMobile {
    display: none;
  }
}
</style>
