<script>
import ProjectList from "../components/projects/ProjectList.vue";
import { store } from "../data/store";
import axios from "axios";

export default {
  data() {
    return {
      type: null,
    };
  },

  created() {
    axios
      .get(store.api.baseUrl + "types/" + this.$route.params.type_id)
      .then((response) => {
        this.type = response.data;
      });
    // .catch((error) => {
    //   this.$router.push({ name: "not-found" });
    // });
  },

  components: { ProjectList },
};
</script>

<template>
  <div class="container">
    <h1 class="my-5">
      Portfolio by type
      <span class="badge mx-1" :style="{ backgroundColor: type.colour }">
        {{ type.name }}
      </span>
    </h1>
  </div>
  <ProjectList :type_id="type.id" v-if="type"></ProjectList>
</template>

<style lang="scss" scoped></style>
