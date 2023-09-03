<template>
  <h1 class="destination-title">Our Destination</h1>
  <div class="btn-group">
    <button
      type="button"
      class="destination-dropdown-btn d-flex justify-content-between align-items-center"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Habarana Village
      <i class="fa fa-chevron-down drop-icon" :class="icon" aria-hidden="true"></i>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Cinnamon Life</a></li>
      <li><a class="dropdown-item" href="#">Cinnamon Red Colombo</a></li>
      <li><a class="dropdown-item" href="#">Cinnamon Lakeside Colombo</a></li>
      <li><a class="dropdown-item" href="#">Cinnamon Wild Yala</a></li>
      <li><a class="dropdown-item" href="#">Cinnamon Citadel Kandy</a></li>
      <li><a class="dropdown-item" href="#">Cinnamon Bentota Beach</a></li>
      <li><a class="dropdown-item" href="#">Cinnamon Bey Beruwala</a></li>
      <li><a class="dropdown-item" href="#">Habarana Village</a></li>
    </ul>
  </div>
  <div class="destination-container">
    <img src="../assets/images/srilanka.png" class="srilanka" />
    <DestinationCard />
    <img src="../assets/images/cinnamon.jpeg" />
  </div>
</template>

<script>
import DestinationCard from "./destination-card.vue";

export default {
  data() {
    return {};
  },
  name: "DestinationContainer",
  components: {
    DestinationCard,
  },
};
</script>

<style>


.dropdown-menu {
  width: 550px;
  max-height: 300px;
  padding: 5px !important;
  overflow-y: auto;
}
.dropdown-item {
  font-family: "Bodoni Moda", serif;
  font-size: 18px;
  padding: 10px !important;
  border-bottom: .5px solid rgba(37, 39, 118, 0.2) !important;
}

.drop-icon {
  font-size: 12px;
  color: #252776;
}

.destination-dropdown-btn {
  width: 550px;
  background-color: white;
  border: 1px solid rgba(37, 39, 118, 0.2);
  font-size: 18px;
  font-family: "Bodoni Moda", serif;
  color: #252776;
  padding: 18px;
  text-align: left;
}

.destination-title {
  font-family: "Bodoni Moda", serif;
  color: #77328b;
  font-size: 60px;
  font-weight: 600;
  margin-top: 60px;
  margin-bottom: 30px;
}

.destination-container {
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
  height: 700px;
  position: relative;
  margin-top: 40px;
}

.srilanka {
  position: absolute;
  left: 10%;
  top: 5%;
  z-index: 1000;
}
</style>