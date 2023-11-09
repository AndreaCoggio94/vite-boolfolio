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
      // uri: store.api.baseUrl + "projects",
    };
  },
  props: { type_id: Number },
  components: { ProjectCard },
  methods: {
    fetchProjects(uri = this.endpoint) {
      // console.log(uri);
      axios.get(uri).then((response) => {
        this.projects = response.data.data;
        this.pagination.links = response.data.links;
      });
    },
  },
  computed: {
    endpoint() {
      return this.type_id
        ? store.api.baseUrl + "portfolio-by-type/" + this.type_id
        : store.api.baseUrl + "projects";
    },
  },
  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="container mt-2">
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
  <div class="container my-3">
    <div class="row row-cols-3 g-3">
      <ProjectCard
        v-for="project in projects"
        :project="project"
        :isDetail="false"
      ></ProjectCard>
    </div>
  </div>
  <div class="container">
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
</template>

<style lang="scss" scoped></style>
