<template>
  <div class="offers-card d-flex flex-column">
    <div class="offers-img-holder">
      <img class="offers-img" :src="require(`@/assets/images/${imgsrc}`)" />
      <span class="badge bg-light text-dark">Member Exclusive</span>
    </div>
    <p class="offers-type">{{type }}</p>
    <div class="p-3">
      <p class="offers-title">
        {{ title }}
      </p>
      <p class="offers-description">
        {{description}}
      </p>
      <div class="d-flex justify-content-center">
        <p class="offers-price">From</p>
        <p class="offers-price"><b> {{ price }}</b></p>
        <p class="offers-price">Average Per Night</p>
      </div>

      <button class="btn btn-default offers-btn">View Details</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  name: "OffersCard",
  components: {},
  props: {
    imgsrc: {
      type: String,
    },
    type: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: String,
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Playfair+Display:wght@400;500;700&display=swap");

.offers-btn {
  border: 1px #876a20 solid;
  border-radius: 0px;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  color: #876a20;
}

.offers-btn:hover {
  border: 1px #876a20bd solid;
  color: #876a20bd;
}

.offers-card {
    justify-content: space-around;
  background: #ffffff;
  font-size: 17px;
  box-shadow: 0px 1px 4px #9a9a9a87;
  transition: box-shadow 0.2s ease;
  flex: 1;
  margin: 0px 30px 30px 30px;
  /* min-width: calc(33.33% - 20px); */
  position: relative;
}

.offers-card:hover {
  box-shadow: 1px 2px 12px #9a9a9a;
}

.offers-img-holder {
  position: relative;
  margin-bottom: 5px;
}

.offers-img-holder span {
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  opacity: 0.85;
  padding: 6px 10px 6px 10px;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  border-top-right-radius: 0rem;
  border-bottom-right-radius: 0rem;
  position: absolute;
  right: 0;
  top: 10px;
}

.offers-img {
  width: 100%;
  height: 170px;
  object-fit: cover;
}

.offers-type,
.offers-title,
.offers-description,
.offers-price {
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  color: #333333;
  font-weight: bold;
}
.offers-title {
  font-size: 14px;
}
.offers-price {
  font-weight: normal;
  font-size: 14px;
  margin-left: 4px;
}

.offers-description {
  color: #666666;
  font-weight: normal;
  margin-bottom: 40px;
}
</style>