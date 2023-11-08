<script>
import { store } from "../data/store";
import axios from "axios";

export default {
  data() {
    return {
      project: null,

      error: {
        hasError: false,
        message: "",
      },
    };
  },

  created() {
    console.log(store.api.baseUrl + "projects/" + this.$route.params.type_id);
  },
};
</script>

<template>Hello Type</template>

<style lang="scss" scoped></style>
