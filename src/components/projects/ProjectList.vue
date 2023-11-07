<script>
import ProjectCard from "./ProjectCard.vue";
import axios from "axios";

import { store } from "../../data/store";

export default {
  data() {
    return {
      projects: [],
      pagination: {
        links: null,
      },
    };
  },
  props: {},
  components: { ProjectCard },
  methods: {
    fetchProjects(uri = store.api.baseUrl + "projects") {
      console.log(uri);
      axios.get(uri).then((response) => {
        this.projects = response.data.data;
        this.pagination.links = response.data.links;
      });
    },
  },
  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="container">
    <h2>Project list</h2>
    <div class="row row-cols-3 g-3">
      <ProjectCard
        v-for="project in projects"
        :project="project"
        :isDetail="false"
      ></ProjectCard>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li
            v-for="link in pagination.links"
            @click="fetchProjects(link.url)"
            class="page-item"
            :class="link.active ? 'active' : ''"
          >
            <a class="page-link" v-html="link.label"></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
