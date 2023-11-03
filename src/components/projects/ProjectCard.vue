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
  <div class="col">
    <div class="card">
      <div
        class="card-header d-flex justify-content-between align-content-start"
      >
        <span
          v-if="project.type"
          class="badge mx-1"
          :style="{ backgroundColor: project.type.colour }"
          >{{ project.type.name }}</span
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
      </div>
      <div class="card-footer">
        <a href="#" class="btn btn-primary">More</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
