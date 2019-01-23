<template>
  <c-article>
    <article>
      <Anchor h1 title="Input 输入框" />
      <Anchor h2 title="概述" />
      <p class="description">基础表单控件, 并在原生控件基础上进行了功能扩展</p>
      <Anchor h2 title="代码示例" />
      <!-- 基础 -->
      <Demo id="JCYF">
        <div slot="case">
          <c-input
            v-model="value"
            placeholder="Enter something..."
            style="width: 230px"
          />
        </div>
        <span slot="title" class="title">基础用法</span>
        <div slot="desc">
          <p>基本用法，可以使用 <code>v-model</code> 实现数据的双向绑定</p>
          <p>可直接设置<code>style</code>来改变输入框宽度, 默认100%</p>
        </div>
        <code-demo lang="html" slot="code">{{ InputDoc.JCYF }}</code-demo>
      </Demo>
      <!-- 尺寸 -->
      <Demo id="SIZE">
        <div slot="case">
          <c-row gutter="6" flex align="middle">
            <c-col span="8">
              <c-input
                v-model="value1"
                placeholder="Large size..."
                size="large"
              />
            </c-col>
            <c-col span="8">
              <c-input v-model="value2" placeholder="default size..." />
            </c-col>
            <c-col span="8">
              <c-input
                v-model="value3"
                placeholder="small something..."
                size="small"
              />
            </c-col>
          </c-row>
        </div>
        <span slot="title" class="title">尺寸</span>
        <div slot="desc">
          <p>通过设置<code>size</code>来改变输入框大小</p>
          <p>
            输入框提供了三种尺寸,分别是<code>large</code>(大)、<code>default</code>(默认)、<code>small</code>(小)
          </p>
        </div>
        <code-demo lang="html" slot="code">{{ InputDoc.SIZE }}</code-demo>
      </Demo>
      <!-- 可清除 -->
      <Demo id="CLEAN">
        <div slot="case">
          <c-input
            v-model="value4"
            placeholder="Enter something..."
            style="width: 230px"
            clearable
          />
        </div>
        <span slot="title" class="title">可清空</span>
        <div slot="desc">
          <p>设置属性<code>clearable</code>可显示清空文本的按钮</p>
        </div>
        <code-demo lang="html" slot="code">{{ InputDoc.CLEAN }}</code-demo>
      </Demo>
      <!-- 带icon -->
      <Demo id="DICON">
        <div slot="case">
          <c-input
            v-model="value5"
            placeholder="Enter something..."
            style="width: 230px"
            icon="search"
          />
        </div>
        <span slot="title" class="title">带Icon</span>
        <div slot="desc">
          <p>
            设置属性<code>icon</code>传入icon名字, 用法与<code>CIcon</code>相同
          </p>
          <p>点击Icon可触发<code>on-click</code>事件</p>
        </div>
        <code-demo lang="html" slot="code">{{ InputDoc.DICON }}</code-demo>
      </Demo>
      <!-- 左右Icon -->
      <Demo id="ZYTB">
        <div slot="case">
          <div>
            <span>属性方式</span>
            <c-input
              prefix="users"
              placeholder="请输入用户名"
              style="width: 180px; margin-right: 5px;"
            />
            <c-input
              suffix="search"
              placeholder="请输入搜索内容"
              style="width: 180px;"
            />
          </div>
          <div style="margin-top: 6px">
            <span style="margin-right: 2px">slot方式</span>
            <c-input
              placeholder="请输入用户名"
              style="width: 180px; margin-right: 5px"
            >
              <c-icon name="users" slot="prefix" />
            </c-input>
            <c-input placeholder="请输入搜索内容" style="width: 180px;">
              <c-icon name="search" slot="suffix" />
            </c-input>
          </div>
        </div>
        <span class="title" slot="title">前缀和后缀图标</span>
        <div slot="desc">
          <p>
            通过设置<code>prefix</code>或<code>suffix</code>以及同名slot实现前缀和后缀图标
          </p>
        </div>
        <code-demo lang="html" slot="code">{{ InputDoc.ZYTB }}</code-demo>
      </Demo>
      <!-- 搜索框开启 -->
      <Demo id="SEARCH">
        <div slot="case">
          <c-input search placeholder="Search Something..." style="margin-bottom: 5px" />
          <c-input search enter-button placeholder="Search Something..." style="margin-bottom: 5px" />
          <c-input search enter-button="搜索" placeholder="Search Something..." />
        </div>
        <span slot="title" class="title">搜索框</span>
        <div slot="desc">
          <p>
            设置<code>search</code>属性，可以设置为搜索型输入框,
            另外提供<code>enter-button</code>可让输入框右侧出现按钮
          </p>
        </div>
      </Demo>
    </article>
  </c-article>
</template>

<script>
import InputDoc from "../../doc/input.js";
import CArticle from "../../common/article.vue";
import Demo from "../../common/demo.vue";
import CodeDemo from "../../common/code.vue";
import ApiTable from "../../common/table.vue";
import Anchor from "../../common/anchor.vue";

export default {
  data() {
    return {
      InputDoc,
      value: "",
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: ""
    };
  },
  components: {
    CArticle,
    Demo,
    CodeDemo,
    ApiTable,
    Anchor
  }
};
</script>
