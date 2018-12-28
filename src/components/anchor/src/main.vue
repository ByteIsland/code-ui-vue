<template>
	<component 
		:is="wrapperComponent" 
		:offset-top="offsetTop"
		:offset-bottom="offsetBottom"
	>
		<div :class="`${prefixClass}-warpper`" :style="wrapperStyle">
      <div :class="prefixClass">
        <div :class="`${prefixClass}-ink`">
          <span :class="`${prefixClass}-ink-ball`" :style="{top: `${inkTop}px`}"></span>
        </div>
        <slot></slot>
      </div>
    </div>
	</component>
</template>

<script>
import { ListenOn, ListenOff } from "@/utils/dom.js";
import {
  scrollTop,
  findComponentsDownward,
  sharpMatcherRegx
} from "@/utils/assets.js";
const prefixClass = "c-anchor";
export default {
  name: "CAnchor",
  provide() {
    return {
      CanchorCom: this
    };
  },
  props: {
    affix: {
      type: Boolean,
      default: true
    },
    offsetTop: {
      type: Number,
      default: 0
    },
    offsetBottom: Number,
    // 锚点临界点
    bounds: {
      type: Number,
      default: 5
    },
    // 滚动偏移量
    scrollOffset: {
      type: Number,
      default: 0
    },
    container: null
  },
  data() {
    return {
      prefixClass,
      isAffixed: false,
      inkTop: 0, // 标签高度
      animating: false, // 动画开关
      wrapperTop: 0, // 组件为顶部的位置
      scrollContainer: null, // 容器主体
      scrollElement: null, // 滚动元素
      currentLink: "", // 选中的标签地址 #href
      currentId: "", // 选中的标签 => #id
      titlesOffsetArr: [], // 标题集合
      upperFirstTitle: true // 是否为开头标签
    };
  },
  computed: {
    wrapperComponent() {
      return this.affix ? "CAffix" : "div";
    },
    // 容器是否为window
    containerIsWindow() {
      return this.scrollContainer === window;
    },
    wrapperStyle() {
      return {
        maxHeight: this.offsetTop ? `calc(100vh - ${this.offsetTop})` : "100vh"
      };
    }
  },
  methods: {
    // 获取到href以及id
    handleHashChange() {
      let url = window.location.href;
      const sharpLinkMatch = sharpMatcherRegx.exec(url);
      if (!sharpLinkMatch) return;
      this.currentLink = sharpLinkMatch[0]; // 配置link
      this.currentId = sharpLinkMatch[1]; // 配置ID
    },
    // 更新滚动目标
    handleScrollTo() {
      const anchor = document.getElementById(this.currentId); // null
      const currentLinkElement = document.querySelector(
        `a[data-href="${this.currentLink}"]`
      );
      let offset = this.scrollOffset;
      if (currentLinkElement) {
        offset = parseFloat(
          currentLinkElement.getAttribute("data-scroll-offset")
        );
      }
      if (!anchor) return;
      // 计算滚动的高度
      const offsetTop = anchor.offsetTop - this.wrapperTop - offset;
      this.animating = true; // 开启动画开关
      // 调用滚动动画
      scrollTop(
        this.scrollContainer,
        this.scrollElement.scrollTop,
        offsetTop,
        600,
        () => {
          this.animating = false;
        }
      );
      this.handleSetInkTop();
    },
    // 滚动ing
    handleScroll(e) {
      this.upperFirstTitle =
        e.target.scrollTop < this.titlesOffsetArr[0].offset;
      // 如果当前动画正在执行则抛出
      if (this.animating) return;
      this.updateTitleOffset();
      const scrollTop =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        e.target.scrollTop;
      // 登记滚动选中的Title ID
      this.getCurrentScrollAtTitleId(scrollTop);
    },
    // 设置元素已滚动高度
    handleSetInkTop() {
      const currentLinkElement = document.querySelector(
        `a[data-href="${this.currentLink}"]`
      );
      if (!currentLinkElement) return;
      const elementTop = currentLinkElement.offsetTop;
      const top = elementTop < 0 ? this.offsetTop : elementTop;
      // 设置标签的top值
      this.inkTop = top;
    },
    // 更新选中的Title文字
    updateTitleOffset() {
      const links = findComponentsDownward(this, "CAnchorLink").map(link => {
        return link.href;
      });
      const idArr = links.map(link => {
        return link.split("#")[1];
      });
      let offsetArr = [];
      idArr.forEach(id => {
        const titleELe = document.getElementById(id);
        if (titleELe) {
          offsetArr.push({
            link: `#${id}`,
            offset: titleELe.offsetTop - this.scrollElement.offsetTop
          });
        }
      });
      this.titlesOffsetArr = offsetArr;
    },
    // 获取滚动到指定位置的Title ID
    getCurrentScrollAtTitleId(scrollTop) {
      let i = -1;
      let len = this.titlesOffsetArr.length;
      let titleItem = {
        link: "#",
        offset: 0
      };
      scrollTop += this.bounds; // 设置锚点临界值
      // 遍历循环全部全部节点
      while (++i < len) {
        let currentEle = this.titlesOffsetArr[i];
        let nextEle = this.titlesOffsetArr[i + 1];
        if (
          scrollTop >= currentEle.offset &&
          scrollTop < ((nextEle && nextEle.offset) || Infinity)
        ) {
          titleItem = this.titlesOffsetArr[i];
          break;
        }
      }
      this.currentLink = titleItem.link;
      // 设置滑点位置
      this.handleSetInkTop();
    },
    // 获取&设置容器主体以及滚动元素
    getContainer() {
      // 设置滚动的容器
      this.scrollContainer = this.container
        ? typeof this.container === "string"
          ? document.querySelector(this.container)
          : this.container
        : window;
      // 设置滚动元素绑定
      this.scrollElement = this.container
        ? this.scrollContainer
        : document.documentElement || document.body;
    },
    // 移除所有的监听事件
    removeListener() {
      ListenOff(this.scrollContainer, "scroll", this.handleScroll);
      ListenOff(window, "hashchange", this.handleHashChange); // 监听地址的变化
    },
    // 初始化
    init() {
      this.handleHashChange();
      // Dom更新
      this.$nextTick(() => {
        this.removeListener();
        this.getContainer();
        this.wrapperTop = this.containerIsWindow
          ? 0
          : this.scrollElement.offsetTop; // 计算高度
        this.handleScrollTo(); // 设置滚动位置
        this.handleSetInkTop(); // 设置滚动到的位置
        this.updateTitleOffset(); // 设置标题文字
        this.upperFirstTitle =
          this.scrollElement.scrollTop < this.titlesOffsetArr[0].offset;
        // 开启监听模式
        ListenOn(this.scrollContainer, "scroll", this.handleScroll); // 监听滚动变化
        ListenOn(window, "hashchange", this.handleHashChange); // 监听地址的变化
      });
    }
  },
  watch: {
    $route(to, form) {
      if (to.name !== to.form) {
        this.init();
      } else {
        this.handleHashChange();
        this.$nextTick(() => {
          this.handleScrollTo();
        });
      }
    },
    container() {
      this.init();
    }
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    // 组件销毁前清空监听事件
    this.removeListener();
  }
};
</script>
