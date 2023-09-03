<template>
  <div class="my-container">
    <img :src="require(`@/assets/images/${imgsrc}`)" class="my-image" />
    <p class="my-text">{{ txt }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  name: "HiltonCard",
  components: {},
  props: {
    imgsrc: {
      type: String,
    },
    txt: {
      type: String,
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/proxima-nova-condensed");
.my-container {
  flex: 1;
  min-width: calc(33.33% - 20px);
  margin: 0px 10px 20px 10px;
  position: relative;
}

.my-container:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, .95) 0%,
    rgba(0, 0, 0, 0.3) 60%
  );
  z-index: 1; 
  pointer-events: none; 
}

.my-image {
  width: 100%;
}

.my-text {
  padding: 0px 20px 0px 20px;
  font-family: "Proxima Nova Condensed", sans-serif;
  font-size: 27px;
  font-weight: 700;
  position: absolute;
  bottom: 0;
  width: 100%;
  color: white;
  transition: transform 0.2s ease-in-out;
  transform: translateY(0);
  z-index: 1000;
}

.my-container:hover .my-text {
  transform: translateY(
    -14vh
  );
}

.my-container:hover {
  cursor: pointer;
}
</style>