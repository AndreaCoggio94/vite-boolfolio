<script>
import ProjectList from "./components/projects/ProjectList.vue";
import axios from "axios";

export default {
  data() {
    return {
      projects: [],
      api: {
        baseUrl: "http://localhost:8000/api/",
      },
    };
  },
  components: { ProjectList },

  methods: {
    fetchProjects(uri = this.api.baseUrl + "projects") {
      axios.get(uri).then((response) => {
        this.projects = response.data.data;
      });
    },
  },
  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <h1>Hello There!</h1>
  <ProjectList></ProjectList>
</template>

<style lang="scss"></style>
