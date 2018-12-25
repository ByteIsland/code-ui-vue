<template>
  <div>
    <div class="wrapper">
      <Head></Head>
      <Article></Article>
    </div>
    <Footer></Footer>
  </div>

</template>

<script>
import Head from "../layout/header";
import Footer from "../layout/footer";
import Article from "../layout/article";
export default {
  components: {
    Head,
    Article,
    Footer
  }
};
</script>

<style lang="scss">
.wrapper {
  background: #eee;
  padding: 1px;
}

// .c-article {
// color: #515a6e;

// h1 {
//   font-size: 24px;
//   font-weight: 400;
//   margin: 12px 0;
// }
// h2 {
//   font-size: 20px;
//   font-weight: 400;
//   margin: 12px 0;
// }
// p {
//   margin: 5px;
//   font-size: 14px;
// }
// .anchor {
//   margin-top: 20px;
// }
// .example {
//   border: 1px solid #eee;
//   border-radius: 6px;
//   margin-bottom: 20px;
//   position: relative;
//   transition: all 0.3s ease-in-out;
//   .example-demo {
//     padding: 20px 0;
//     .example-case {
//       padding: 0 20px;
//     }
//     .example-title {
//       font-weight: 500;
//       margin: 30px 0 10px;
//       position: relative;
//       &::before {
//         content: "";
//         display: block;
//         width: 100%;
//         height: 1px;
//         background: #eee;
//         position: absolute;
//         top: 10px;
//         left: 0;
//       }
//       span {
//         display: inline-block;
//         background: #fff;
//         padding: 0 10px 0 10px;
//         position: relative;
//         margin-left: 35px;
//         font-size: 14px;
//       }
//     }
//     .example-desc {
//       padding: 0 20px;
//       em {
//         display: inline-block;
//         background: #f7f7f7;
//         font-family: monospace;
//         font-style: normal;
//         margin: 0 3px;
//         padding: 1px 5px;
//         border-radius: 3px;
//         color: #666;
//         border: 1px solid #eee;
//       }
//     }
//   }
//   .example-split {
//     width: 100%;
//     border: 1px dashed #eee;
//   }
//   .example-code {
//     .hljs {
//       font-size: 14px;
//       background: #f6f8fa;
//       padding: 1.3em;
//       line-height: 1.5em;
//       .hljs-tag {
//         color: #2d8cf0 !important;
//         .hljs-name {
//           color: #2d8cf0;
//         }
//       }
//       .hljs-attr {
//         color: #e96900;
//       }
//     }
//   }
// }
// }
</style>
