<template>

  <div class="d-flex">
    <div class="link_holder me-3">
      <i v-if="icon" class="me-3" :class="icon" aria-hidden="true"></i>
      <a href="#" class="headerLink"> {{ txt }} </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavHeaderItem",
  props: {
    txt: String,
    icon: {
      type: String,
      default: undefined,
    },
  },
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
@import "../assets/css/navstyle.css";
</style>