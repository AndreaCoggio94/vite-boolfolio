<script>
import ProjectCard from "./ProjectCard.vue";
export default {
  data() {
    return {};
  },
  props: {
    projects: Array,
  },
  components: { ProjectCard },
};
</script>

<template>
  <div class="container">
    <h2>Project list</h2>
    <div class="row row-cols-3 g-3">
      <ProjectCard v-for="project in projects" :project="project"></ProjectCard>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
