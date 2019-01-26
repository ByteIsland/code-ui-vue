<template>
  <div class="api" id="API">
    <Anchor h1 :title="title" v-if="title !== ''"></Anchor>
    <Anchor h3 :title="SubTitle" v-if="SubTitle !== ''"></Anchor>
    <slot></slot>
    <table>
      <thead>
        <tr v-if="type === 4">
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
        <tr v-if="type === 3">
          <th v-if="typeName === ''">事件名</th>
          <th v-else>{{ typeName }}</th>
          <th>说明</th>
          <th v-if="typeofName === ''">返回值</th>
          <th v-else>{{ typeofName }}</th>
        </tr>
        <tr v-if="type === 2">
          <th>名称</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in doc" :key="index">
          <td>{{ item.type }}</td>
          <td v-html="item.desc"></td>
          <td v-html="item.typeof" v-if="type === 4 || type === 3"></td>
          <td v-if="type === 4">{{ item.default }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Anchor from "./anchor.vue";
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    SubTitle: {
      type: String,
      default: ""
    },
    doc: {
      type: Array,
      default: () => {
        return [];
      }
    },
    type: {
      type: [Number, String],
      default: 4 // mode 4 => 基础4格 3 => 事件3格 2 => slot
    },
    typeName: {
      type: String,
      default: ""
    },
    typeofName: {
      type: String,
      default: ""
    }
  },
  components: { Anchor }
};
</script>

<style lang="scss">
.api {
  table {
    font-family: Consolas, Menlo, Courier, monospace;
    font-size: 12px;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #f9f9f9;
    width: 100%;
    margin-bottom: 30px;
    border-radius: 3px;
    td,
    th {
      border: 1px solid #e9e9e9;
      padding: 10px 16px;
      text-align: left;
    }
    thead {
      color: #5c6b77;
      background: #f7f7f7;
      font-weight: 600;
      white-space: nowrap;
    }
    code {
      display: inline-block;
      color: #666;
      background: #f8f8f8;
      margin: 0 3px;
      padding: 1px 5px;
      border-radius: 3px;
      border: 1px solid #eee;
    }
  }
}
</style>
