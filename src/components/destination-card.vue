<template>
  <div class="destination-card d-flex flex-column align-items-left">
    <h5 class="destination-card-title">Cinnamon Red Colombo</h5>
    <p class="destination-description">
      South Asia's first ever lean luxury hotel situated right at the heart of
      Colombo. The vibrant rooftop bar and serene infinity pool overlooking the
      Colombo Skyline provides every sense of relaxation and rejuvenation for
      the adventurous traveller!
    </p>
    <a class="btn btn-default destination-button">Discover More</a>
  </div>
  <br />
</template>

<script>
export default {
  data() {
    return {};
  },
  name: "Destination-Card",
  components: {},
};
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/univers-lt-std");
@import url("https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@1,6..96,500&display=swap");

.destination-card {
  background: #ffffff;
  padding: 60px 34px 50px 34px;
  font-size: 17px;
  width: 340px;
  box-shadow: 1px 5px 20px #9a9a9a;
  position: absolute;
  right: 0%;
  top: 15%;
}

.destination-card-title {
  font-family: "Bodoni Moda", serif;
  color: #77328b;
  font-size: 28px;
  text-align: left;
  margin-bottom: 40px;
}

.destination-description {
  font-family: "Univers LT Std", sans-serif;
  font-size: 16px;
  text-align: left;
  color: #1b1b1b;
}

.destination-button {
  width: auto;
  margin-top: 10px;
  border-radius: 0px;
  margin-bottom: 10px;
  margin-right: 30%;
  background-color: #252776;
  color: white !important;
  font-family: "Bodoni Moda", serif;
  font-size: 18px;
  font-weight: 600;
  padding-top: 10px;
  padding-bottom: 10px;
  transition: background-color 0.3s ease;
}

.destination-button:hover {
  background-color: rgba(37, 39, 118, 0.9); 
}
</style>