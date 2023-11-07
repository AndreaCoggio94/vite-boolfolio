<script>
import ProjectCard from "../components/projects/ProjectCard.vue";
import axios from "axios";
import { store } from "../data/store";

export default {
  data() {
    return {
      project: {},
    };
  },

  components: { ProjectCard },

  created() {
    axios
      .get(store.api.baseUrl + "projects/" + this.$route.params.slug)
      .then((response) => {
        this.project = response.data;
      });
  },
};
</script>

<template>
  Hello single project
  <ProjectCard :project="project"></ProjectCard>
</template>

<style lang="scss" scoped></style>
