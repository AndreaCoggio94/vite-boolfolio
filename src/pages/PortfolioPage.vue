<script>
import ProjectList from "../components/projects/ProjectList.vue";

export default {
  data() {
    return {};
  },

  components: { ProjectList },
};
</script>

<template>
  <div class="container">
    <h1 class="my-5">Portfolio</h1>
    <ProjectList></ProjectList>
  </div>
</template>

<style lang="scss" scoped></style>
