let code = {};

code.JCYF = `
<template>
  <c-input v-model="value" placeholder="Enter something..." style="width: 230px" />
</template>

<script>
export default {
  data() {
    return {
      value: ""
    }
  }
}
</script>
`;

code.SIZE = `
<template>
  <c-input v-model="value1" placeholder="Large size..." size="large" />
  <c-input v-model="value2" placeholder="default size..." />
  <c-input v-model="value3" placeholder="small something..." size="small" />
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
    }
  }
}
</script>
`;

code.CLEAN = `
<template>
  <c-input v-model="value4" placeholder="Enter something..." clearable style="width: 230px" />
</template>

<script>
export default {
  data() {
    return {
      value4: "",
    }
  }
}
</script>
`;

code.DICON = `
<template>
  <c-input v-model="value5" icon="search" placeholder="Enter something..." style="width: 230px"  />
</template>

<script>
export default {
  data() {
    return {
      value5: ""
    }
  }
}
</script>
`;

code.ZYTB = `
<template>
<div>
<div>
  <span>属性方式</span>
  <c-input prefix="users" placeholder="请输入用户名" style="width: 180px; margin-right: 5px;" />
  <c-input suffix="search" placeholder="请输入搜索内容" style="width: 180px;" />
</div>
  <div style="margin-top: 6px">
    <span style="margin-right: 2px">slot方式</span>
    <c-input placeholder="请输入用户名" style="width: 180px; margin-right: 5px">
      <c-icon name="users" slot="prefix" />
    </c-input>
    <c-input placeholder="请输入搜索内容" style="width: 180px;">
      <c-icon name="search" slot="suffix" />
    </c-input>
  </div>
</div>
</template>
`;

export default code;
