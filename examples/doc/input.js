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

export default code;
