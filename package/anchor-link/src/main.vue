<template>
	<div :class="anchorLinkClasses">
		<a 
			:class="`${prefixClass}-title`" 
			:href="href"
			:title="title"
			:data-href="href"
			:data-scroll-offset="scrollOffset"
			@click.prevent="goAnchor"
		>
		{{title}}
		</a>
		<slot></slot>
	</div>
</template>

<script>
const prefixClass = "c-anchor-link";
export default {
  name: "CAnchorLink",
  inject: ["CanchorCom"],
  props: {
    href: String,
    title: String,
    scrollOffset: {
      type: Number,
      default() {
        return this.CanchorCom.scrollOffset;
      }
    }
  },
  data() {
    return {
      prefixClass
    };
  },
  computed: {
    anchorLinkClasses() {
      return [
        this.prefixClass,
        this.CanchorCom.currentLink === this.href
          ? `${this.prefixClass}-active`
          : ""
      ];
    }
  },
  methods: {
    goAnchor() {
      this.currentLink = this.href;
      this.CanchorCom.handleHashChange();
      this.CanchorCom.handleScrollTo();
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.CanchorCom.init();
    });
  }
};
</script>
