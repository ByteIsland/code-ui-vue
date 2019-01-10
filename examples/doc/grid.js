let code = {};

code.BASE = `
<template>
  <c-row>
    <c-col :span="12">col-12</c-col>
    <c-col :span="12">col-12</c-col>
  </c-row>
  <c-row>
    <c-col :span="8">col-8</c-col>
    <c-col :span="8">col-8</c-col>
    <c-col :span="8">col-8</c-col>
  </c-row>
  <c-row>
    <c-col :span="6">col-6</c-col>
    <c-col :span="6">col-6</c-col>
    <c-col :span="6">col-6</c-col>
    <c-col :span="6">col-6</c-col>
  </c-row>
</template>
`;

code.CRowDoc = [
  {
    type: '',
    desc: '',
    typeof: '',
    default: ""
  }
];

code.CColDoc = [
  {
    type: '',
    desc: '',
    typeof: '',
    default: ""
  }
];

export default code;