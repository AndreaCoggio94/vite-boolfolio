<script>
import ProjectCard from "./components/projects/ProjectCard.vue";
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
      <div class="col" v-for="project in projects">
        <div class="card">
          <div class="card-body">
            <h4>{{ project.name }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
