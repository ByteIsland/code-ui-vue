let code = {};

code.base = `
<template>
 <c-layout class="layout-single">
  <c-header>Header</c-header>
  <c-main>Content</c-main>
  <c-footer>Footer</c-footer>
 </c-layout>
 <c-layout class="layout-single">
  <c-header>Header</c-header>
  <c-layout>
   <c-sider style="flex:0 0 200px">Sider</c-sider>
   <c-main>Content</c-main>
  </c-layout>
  <c-footer>Footer</c-footer>
 </c-layout>
 <c-layout class="layout-single">
  <c-header>Header</c-header>
  <c-layout>
   <c-main>Content</c-main>
   <c-sider style="flex:0 0 200px">Sider</c-sider>
  </c-layout>
  <c-footer>Footer</c-footer>
 </c-layout>
 <c-layout class="layout-single">
  <c-sider style="flex:0 0 200px; line-height: 248px;">Sider</c-sider>
  <c-layout>
   <c-header>Header</c-header>
   <c-main>Content</c-main>
   <c-footer>Footer</c-footer>
 </c-layout>
 </c-layout>
</template>
<script>
 export default {

 }
</script>
`;

code.SZXBJ = `
<template>
 <c-layout class="layout">
  <c-header>
   <div class="layout-logo"></div>
   <div class="layout-nav">
    <c-menu mode="horizontal" theme="dark" active-name="1">
     <c-menu-item name="1"><c-icon name="search" />Item 1</c-menu-item>
     <c-menu-item name="2"><c-icon name="application" />Item 2</c-menu-item>
     <c-menu-item name="3"><c-icon name="database" />Item 3</c-menu-item>
     <c-menu-item name="4"><c-icon name="setting" />Item 4</c-menu-item>
    </c-menu>
   </div>
  </c-header>
  <c-main style="padding: 0 50px;">
   <c-breadcrumb style="margin: 20px 0;">
    <c-breadcrumb-item>Home</c-breadcrumb-item>
    <c-breadcrumb-item>Components</c-breadcrumb-item>
    <c-breadcrumb-item>Layout</c-breadcrumb-item>
   </c-breadcrumb>
   <c-card>
    <div style="min-height: 200px;">
     Content
    </div>
   </c-card>
  </c-main>
  <c-footer>© 2018 Code UI, Inc.</c-footer>
 </c-layout>
</template>
<script>
 export default {

 }
</script>
<style scoped>

</style>
`;

export default code;
