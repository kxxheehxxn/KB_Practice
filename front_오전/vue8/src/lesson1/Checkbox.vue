<script>
export default {
  name: 'Checkbox',
  data() {
    return {}
  },
  // 배열 형태
  // props: ['id', 'labelName'],

  //2. 타입지정
  // props: {
  //   id: String,
  //   labelName: String,
  // },
  //3. 타입과 속성 지정
  props: {
    id: {
      type: String,
      required: true,
    },
    labelName: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <div class="checkbox">
    <label for="">{{ labelName }}</label> : <input type="text" value="id" />
  </div>
</template>

<style scoped></style>
