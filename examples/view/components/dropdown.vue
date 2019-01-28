<template>
  <c-article>
    <article>
      <Anchor h1 title="Dropdown 下拉框" />
      <Anchor h2 title="概述" />
      <p class="desc">展示一个带折叠效果的面板</p>
      <Anchor h2 title="代码示例" />
      <!-- 基础使用 -->
      <Demo id="BASE">
        <div slot="case">
          <c-dropdown>
            <a href="javascript:void(0)">
              下拉菜单
              <c-icon name="arrow-down" />
            </a>
            <c-dropdown-menu slot="list">
              <c-dropdownItem>荒野之息</c-dropdownItem>
              <c-dropdownItem>马里奥赛车</c-dropdownItem>
              <c-dropdownItem disabled>NBA2K19</c-dropdownItem>
              <c-dropdownItem>上古卷轴</c-dropdownItem>
              <c-dropdownItem divided>口袋妖怪</c-dropdownItem>
            </c-dropdown-menu>
          </c-dropdown>
          <c-dropdown style="margin-left: 20px">
            <c-button type="primary">
              下拉菜单
              <c-icon name="arrow-down" />
            </c-button>
            <c-dropdown-menu slot="list">
              <c-dropdownItem>荒野之息</c-dropdownItem>
              <c-dropdownItem>马里奥赛车</c-dropdownItem>
              <c-dropdownItem disabled>NBA2K19</c-dropdownItem>
              <c-dropdownItem>上古卷轴</c-dropdownItem>
              <c-dropdownItem divided>口袋妖怪</c-dropdownItem>
            </c-dropdown-menu>
          </c-dropdown>
        </div>
        <span slot="title" class="title">基础使用</span>
        <div slot="desc">
          <p>需要配合<code>CDropMenu</code>和<code>CDropMenuItem</code> 两个组件来使用, 并且给列表设置<code>slot=list</code></p>
          <p>触发对象可以是链接、按钮等各种元素</p>
          <p>提供<code>disabled</code>禁用属性与<code>divided</code>分割线</p>
        </div>
        <code-demo slot="code" lang="html">{{DropdownDoc.BASE}}</code-demo>
      </Demo>
      <!-- 触发方式 -->
      <Demo id="CFFS">
        <div slot="case">
          <c-dropdown>
            <a href="javascript:void(0)">
              hover 触发
              <c-icon name="arrow-down" />
            </a>
            <c-dropdown-menu slot="list">
              <c-dropdownItem>荒野之息</c-dropdownItem>
              <c-dropdownItem>马里奥赛车</c-dropdownItem>
              <c-dropdownItem disabled>NBA2K19</c-dropdownItem>
              <c-dropdownItem>上古卷轴</c-dropdownItem>
              <c-dropdownItem divided>口袋妖怪</c-dropdownItem>
            </c-dropdown-menu>
          </c-dropdown>
          <c-dropdown style="margin-left: 20px" trigger="click">
            <a href="javascript:void(0)">
              click 触发
              <c-icon name="arrow-down" />
            </a>
            <c-dropdown-menu slot="list">
              <c-dropdownItem>荒野之息</c-dropdownItem>
              <c-dropdownItem>马里奥赛车</c-dropdownItem>
              <c-dropdownItem disabled>NBA2K19</c-dropdownItem>
              <c-dropdownItem>上古卷轴</c-dropdownItem>
              <c-dropdownItem divided>口袋妖怪</c-dropdownItem>
            </c-dropdown-menu>
          </c-dropdown>
          <c-dropdown style="margin-left: 20px" trigger="custom" :visible="visible">
            <a href="javascript:void(0)" @click="handleOpen">
              自定义触发
              <c-icon name="arrow-down" />
            </a>
            <c-dropdown-menu slot="list">
              <c-dropdownItem>荒野之息</c-dropdownItem>
              <c-dropdownItem>马里奥赛车</c-dropdownItem>
              <c-dropdownItem disabled>NBA2K19</c-dropdownItem>
              <c-dropdownItem>上古卷轴</c-dropdownItem>
              <c-dropdownItem divided>口袋妖怪</c-dropdownItem>
            </c-dropdown-menu>
          </c-dropdown>
          <c-dropdown style="margin-left: 20px" trigger="RightClick">
            <a href="javascript:void(0)">
              右键触发
              <c-icon name="arrow-down" />
            </a>
            <c-dropdown-menu slot="list">
              <c-dropdownItem>荒野之息</c-dropdownItem>
              <c-dropdownItem>马里奥赛车</c-dropdownItem>
              <c-dropdownItem disabled>NBA2K19</c-dropdownItem>
              <c-dropdownItem>上古卷轴</c-dropdownItem>
              <c-dropdownItem divided>口袋妖怪</c-dropdownItem>
            </c-dropdown-menu>
          </c-dropdown>
        </div>
        <span slot="title" class="title">触发方式</span>
        <div slot="desc">
          <p>通过属性<code>trigger</code>可以更改触发方式, 目前支持<code>hover(默认)</code>、<code>click</code>、<code>rightClick</code></p>
          <p>如设置<code>custom</code>, 需手动设置 <code>visible</code> 来控制下拉框的显示</p>
        </div>
        <code-demo slot="code" lang="html">{{ DropdownDoc.CFFS }}</code-demo>
      </Demo>
      <!-- 对齐方式 -->
      <Demo id="DQFS">
        <div slot="case">
          <c-dropdown placement="bottom-start">
            <a href="javascript:void(0)">
              菜单(左)
              <c-icon name="arrow-down" />
            </a>
            <c-dropdown-menu slot="list">
              <c-dropdownItem>荒野之息</c-dropdownItem>
              <c-dropdownItem>马里奥赛车</c-dropdownItem>
              <c-dropdownItem disabled>NBA2K19</c-dropdownItem>
              <c-dropdownItem>上古卷轴</c-dropdownItem>
              <c-dropdownItem divided>口袋妖怪</c-dropdownItem>
            </c-dropdown-menu>
          </c-dropdown>
          <c-dropdown style="margin-left: 20px">
            <a href="javascript:void(0)">
              菜单(中)
              <c-icon name="arrow-down" />
            </a>
            <c-dropdown-menu slot="list">
              <c-dropdownItem>荒野之息</c-dropdownItem>
              <c-dropdownItem>马里奥赛车</c-dropdownItem>
              <c-dropdownItem disabled>NBA2K19</c-dropdownItem>
              <c-dropdownItem>上古卷轴</c-dropdownItem>
              <c-dropdownItem divided>口袋妖怪</c-dropdownItem>
            </c-dropdown-menu>
          </c-dropdown>
          <c-dropdown style="margin-left: 20px" placement="bottom-end">
            <a href="javascript:void(0)" >
              菜单(右)
              <c-icon name="arrow-down" />
            </a>
            <c-dropdown-menu slot="list">
              <c-dropdownItem>荒野之息</c-dropdownItem>
              <c-dropdownItem>马里奥赛车</c-dropdownItem>
              <c-dropdownItem disabled>NBA2K19</c-dropdownItem>
              <c-dropdownItem>上古卷轴</c-dropdownItem>
              <c-dropdownItem divided>口袋妖怪</c-dropdownItem>
            </c-dropdown-menu>
          </c-dropdown>
        </div>
        <span class="title" slot="title">对齐方式</span>
        <div slot="desc">
          <p>通过设置属性<code>placement</code> 可以更改下拉菜单出现的方向, 支持12个方向, 详情见API</p>
        </div>
        <code-demo lang="html" slot="code"> {{ DropdownDoc.DQFS }} </code-demo>
      </Demo>
      <!--嵌套使用-->
      <Demo id="QTSY">
        <div slot="case">
          <c-dropdown placement="bottom-start">
            <a href="javascript:void(0)">
              Switch游戏
              <c-icon name="arrow-down" />
            </a>
            <c-dropdown-menu slot="list">
              <c-dropdownItem>荒野之息</c-dropdownItem>
              <c-dropdownItem>马里奥赛车</c-dropdownItem>
              <c-dropdownItem disabled>NBA2K19</c-dropdownItem>
              <c-dropdownItem>上古卷轴</c-dropdownItem>
              <c-dropdown placement="right-start">
                <c-dropdownItem>
                  口袋妖怪
                  <c-icon name="arrow" />
                </c-dropdownItem>
                <c-dropdown-menu slot="list">
                  <c-dropdownItem>伊布版</c-dropdownItem>
                  <c-dropdownItem>皮卡丘版</c-dropdownItem>
                </c-dropdown-menu>
              </c-dropdown>
            </c-dropdown-menu>
          </c-dropdown>
        </div>
        <span slot="title" class="title">嵌套使用</span>
        <div slot="desc">
          <p>可支持多个下拉菜单嵌套使用, 但注意展示方向</p>
        </div>
        <code-demo lang="html" slot="code">{{ DropdownDoc.QTSY }}</code-demo>
      </Demo>
      <!-- API -->
      <api-table title="API" sub-title="Dropdown props" :doc="DropdownDoc.PropsDoc" />
      <api-table sub-title="Dropdown events" :doc="DropdownDoc.EventsDoc" :type="3" />
      <api-table sub-title="Dropdown slot" :doc="DropdownDoc.SlotDoc" :type="2" />
      <api-table sub-title="DropdownItem props" :doc="DropdownDoc.ItemPropsDoc" />
    </article>
  </c-article>
</template>

<script>
import DropdownDoc from "../../doc/dropdown.js";
import Demo from "../../common/demo.vue";
import CArticle from "../../common/article.vue";
import ApiTable from "../../common/table.vue";
import CodeDemo from "../../common/code.vue";
import Anchor from "../../common/anchor.vue";

export default {
  name: "dropdown",
  data(){
    return {
      visible: false,
      DropdownDoc
    };
  },
  methods: {
    handleOpen() {
      this.visible = !this.visible
    }
  },
  components: {
    Demo,
    CArticle,
    ApiTable,
    CodeDemo,
    Anchor
  }
}
</script>
