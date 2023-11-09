<script setup lang="ts">
import { reactive } from "vue";

const dataSource = reactive([
  // {
  //     key: '1',
  //     time: '2023-09-27',
  //     name: '模型生成',
  //     orderNo: 'SNDO112312312312312313',
  //     money: '1339',
  //     status: '已付款'
  // },
  // {
  //     key: '1',
  //     time: '2023-09-27',
  //     name: '模型生成',
  //     orderNo: 'SNDO112312312312312313',
  //     money: '1339',
  //     status: '已付款'
  // },
]);

const columns = reactive([
  {
    title: "交易时间",
    dataIndex: "time",
    key: "time",
    width: 204,
  },
  {
    title: "商品名称",
    dataIndex: "name",
    key: "name",
    width: 204,
  },
  {
    title: "订单编号",
    dataIndex: "orderNo",
    key: "orderNo",
  },
  {
    title: "交易金额",
    dataIndex: "money",
    key: "money",
    width: 173,
  },
  {
    title: "交易状态",
    dataIndex: "status",
    key: "status",
    width: 204,
  },
]);
</script>

<template>
  <main class="pt-70px">
    <div class="transaction_container">
      <div class="transaction_table">
        <div
          class="transaction_head"
          style="
            background: linear-gradient(
              rgb(255, 182, 57) -206.09%,
              rgb(255, 255, 255) 50.33%
            );
          "
        >
          <h3 class="transaction_title">交易明细</h3>
          <div class="transaction_tabs">
            <div class="transaction_tab">VIP</div>
            <div
              class="transaction_tabBar"
              style="
                background: linear-gradient(
                  90deg,
                  rgb(255, 243, 222) 0.04%,
                  rgb(255, 222, 171) 99.96%
                );
              "
            ></div>
          </div>
        </div>
        <div class="transaction_body">
          <div class="transaction_bodyContent">
            <a-table
              :dataSource="dataSource"
              :columns="columns"
              style="height: 100%"
            >
              <template #emptyText style="background: red">
                <a-empty
                  :image-style="{
                    height: '85px',
                  }"
                >
                  <template #description>
                    <span class="transaction_emptyText">暂无记录</span>
                  </template>
                </a-empty>
              </template>
            </a-table>
            <div class="transaction_bottomMask"></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.transaction_container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 70px);
  background: #f1f5f7;
}

.transaction_table {
  width: 1200px;
  height: calc(100vh - 106px);
  min-height: 500px;
  background: #fff;
  border-radius: 16px;
}

.transaction_head {
  width: 100%;
  height: 116px;
  padding: 24px 32px 0;
  border-radius: 16px 16px 0 0;
}

.transaction_title {
  margin-bottom: 20px;
  color: #222;
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
}

.transaction_tab {
  color: #222;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  cursor: pointer;
}

.transaction_tabBar {
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 29px;
  height: 4px;
  border-radius: 1px;
}

.transaction_tabs {
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 2px solid #ecedf5;
}

.transaction_body {
  width: 100%;
  height: calc(100vh - 222px);
  padding: 12px 32px 36px;
}

.transaction_bodyContent {
  position: relative;
  height: calc(100vh - 270px);
  overflow: hidden;
  border: 1px solid #ecedf5;
  border-radius: 16px;
}

.transaction_bottomMask {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  background: #fff;
  border-top: 0;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.05);
}

.ant-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 400px);
}

.transaction_emptyText {
  margin-top: 16px;
  color: #999;
  font-weight: 400;
  font-size: 16px;
  font-family: PingFang SC;
  line-height: 22px;
}

.transaction_container ::v-deep .ant-table-cell {
  &::before {
    display: none;
  }
}
</style>
