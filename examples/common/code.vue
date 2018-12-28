<template>
	<div class="code-demo">
		<pre :class="{'bg': bg}"><code :class="language " ref="code"><slot></slot></code></pre>
	</div>
</template>

<script>
import hljs from "highlight.js";
export default {
  props: {
    lang: {
      type: String,
      default: "javascript"
    },
    bg: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      code: ""
    };
  },
  computed: {
    language() {
      if (this.lang === "auto") {
        return "";
      } else {
        return this.lang;
      }
    }
  },
  mounted() {
    this.code = this.$refs.code.innerHTML.replace(/\n/, "");
    this.$refs.code.innerHTML = this.code;
    hljs.highlightBlock(this.$refs.code);
  },
  methods: {}
};
</script>

<style lang="scss">
.code-demo {
  font-size: 14px;
  pre.bg {
    background: #f7f7f7;
  }
  .hljs {
    display: block;
    overflow-x: auto;
    color: #525252;
    padding: 15px;
    line-height: 1.5;
    background: transparent;
    .hljs-tag,
    .hljs-name {
      color: #409eff;
    }
    .hljs-attr,
    .hljs-keyword {
      color: #ec8938;
    }
    .hljs-string {
      color: #70ce41;
    }
  }
}
</style>
