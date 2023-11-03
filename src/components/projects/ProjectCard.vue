<script>
export default {
  data() {
    return {};
  },
  props: {
    project: Object,
  },
};
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h4>{{ project.name }}</h4>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
