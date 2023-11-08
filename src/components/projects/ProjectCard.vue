<script>
export default {
  data() {
    return {};
  },
  props: {
    project: Object,
    isDetail: Boolean,
  },
};
</script>

<template>
  <div class="col">
    <div class="card h-100">
      <div
        class="card-header d-flex justify-content-between align-content-start"
      >
        <router-link
          v-if="project.type"
          :to="{
            name: 'portfolio-by-type',
            params: { type_id: project.type_id },
          }"
          class="badge mx-1"
          :style="{ backgroundColor: project.type.colour }"
          >{{ project.type.name }}</router-link
        >

        <div class="div">
          <span
            class="badge mx-1 rounded-pill"
            v-for="technology in project.technologies"
            :style="{ backgroundColor: technology.colour }"
            >{{ technology.label }}</span
          >
        </div>
      </div>
      <div class="card-body">
        <h4>{{ project.name }}</h4>
        <p>{{ project.description }}</p>
      </div>
      <div class="card-footer" v-if="!isDetail">
        <router-link
          :to="{ name: 'project', params: { slug: project.slug } }"
          class="btn btn-primary"
          >More</router-link
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
