<template>
	<div class="api">
		<h1 class="title" v-if="title !== ''">{{title}} </h1>
		<h2 class="sub-tit">{{SubTitle}}</h2>
		<table>
			<thead>
				<tr>
					<th>属性</th>
					<th>说明</th>
					<th>类型</th>
					<th>默认值</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item, index) in doc" :key="index">
					<td>{{item.type}}</td>
					<td v-html="item.desc"></td>
					<td>{{item.typeof}}</td>
					<td>{{item.default}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
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
    }
  }
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
