<template>
  <FullWidthNavigationVue />

  <div>
    <vue-carousel :data="data" :slide-on-swipe="true" :indicators="false">
    </vue-carousel>
    <div class="bottom-center">
      <!-- Search and Bookings can be added here  -->
    </div>
  </div>

  <DestinationContainer />
  <div class="d-flex hilton-card-container flex-column p-2 align-items-start">
    <h5>Make the most of Summertime</h5>
    <p>Summer is here - celebrate with one of our exclusive offers.</p>
  </div>
  <div class="d-flex hilton-card-container">
    <HiltonCard imgsrc="hilton1.png" txt="JOIN HILTON HONORS AND GET UPTO 4,500 POINTS" />
    <HiltonCard imgsrc="hilton2.png" txt="BOOK AHEAD AND SAVE UPTO 17%" />
    <HiltonCard imgsrc="hilton3.png" txt="MULTIPLY YOUR POINTS" />
    <HiltonCard imgsrc="hilton4.png" txt="FREE BONUS POINTS AND NEW HOTELS" />
    <HiltonCard imgsrc="hilton5.png" txt="PARK & STAY WITH HILTON" />
    <HiltonCard imgsrc="hilton6.png" txt="EXPERIENCE MORE DURING YOUR STAY" />
  </div>

  <div class="offers-container">
    <h2 class="offer-title">Offers</h2>
    <br>
    <div class="d-flex offers-card-container">
      <OffersCard imgsrc="offer1.webp" type="Rooms & Suites" title="Shangri–La Circle Exclusive Member Rate with Breakfast" description="Exclusive Member Rate with Breakfast for Shangri-La Circle member." price="LKR 25,000.00"/>
      <OffersCard imgsrc="offer2.webp" type="Rooms & Suites" title="Shangri–La Circle Exclusive Member Rate" description="Exclusive Member Rate for Shangri-La Circle member." price="LKR 30,000.00"/>
      <OffersCard imgsrc="offer3.webp" type="Rooms & Suites" title="Weekend Getaway in the Heart of Colombo" description="Relax in the heart of Colombo, with access to Horizon Club" price="LKR 50,000.00"/>
    </div>
  </div>

  <br />

  <Footer></Footer>
</template>

<script>
import Navigation from "./NavigationBar.vue";
import FullWidthNavigationVue from "./FullWidthNavigation.vue";
import VueCarousel from "@chenfengyuan/vue-carousel";
import DestinationContainer from "@/components/destination-container.vue";
import HiltonCard from "@/components/hilton-card.vue";
import OffersCard from "@/components/offers-card.vue";
import Footer from "@/components/footer.vue";

export default {
  data() {
    return {
      data: [
        '<div class="example-slide"><img class="slide-image" src="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/2/B/7/%7B2B7BEE18-1FD6-4CCB-B332-5A77EE8F3567%7D1920x800-Shangri-La-Hotel,-Colombo-Kaema-Sutra---indoor-with-guests.jpg" > <div class="centered"> Fiki Bar </div></div>',
        '<div class="example-slide"><img class="slide-image" src=" https://sitecore-cd-imgr.shangri-la.com/MediaFiles/C/0/A/%7BC0A53156-4B15-4935-8608-704B1138FDA4%7D230627_brandcampaign_sl_homepage_theme2_cabana.jpg"><div class="centered"> Shangri-La Colombo <p> Come with us through the whimsical world of Shangri-La, where your personal paradise awaits. </p> </div></div>',
        '<div class="example-slide"><img class="slide-image" src=" https://sitecore-cd-imgr.shangri-la.com/MediaFiles/2/0/B/%7B20B18195-50BE-4993-9CAE-0A141AFD3747%7D201126_slcb_homepage1.jpg"><div class="centered"> Shangri-La Colombo <p> A personal tropical sanctuary set within the heart of the city </p> </div></div>',
        '<div class="example-slide"><img class="slide-image" src="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/3/4/D/%7B34D215D5-931F-41E3-9164-4C4935192961%7D1920x800-Premier-Ocean-View-Room.jpg" > <div class="centered"> Rooms & Suites </div></div>',
        '<div class="example-slide"><img class="slide-image" src="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/D/B/1/%7BDB1D4302-50CB-418F-B870-31F87911B514%7D1920x800-Shang-Palace.jpg" > <div class="centered"> Shang Palace </div></div> ',
      ],
    };
  },
  name: "HomeView",
  components: {
    Navigation,
    FullWidthNavigationVue,
    VueCarousel,
    DestinationContainer,
    HiltonCard,
    OffersCard,
    Footer
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Playfair+Display:wght@400;500;700&display=swap");


.offers-container {
  margin-top: 60px;
}

.offer-title {
  font-family: "Playfair Display", serif;
  font-size: 28px;
  color: #333333;
  font-weight: normal;
}

.hilton-card-container,
.offers-card-container {
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
}
.offers-card-container {
  max-width: 1200px;
}

.hilton-card-container h5 {
  font-size: 36px;
  font-family: "Proxima Nova Condensed", sans-serif;
  font-weight: 900;
  color: #104c97;
}

.hilton-card-container p {
  font-size: 20px;
  font-family: "Proxima Nova Condensed", sans-serif;
  color: #121212;
}

.image-container {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: auto;
  transition: transform 0.3s;
}

.image-container p {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  padding: 10px 0;
  margin: 0;
  transform: translateY(100%);
  transition: transform 0.3s;
}

.image-container:hover img {
  transform: translateY(-50%);
}

.image-container:hover p {
  transform: translateY(-50%);
}

.centered p {
  color: white;
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  margin-top: 12px;
}

.bottom-center {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 10px;
}

.slide-image {
  width: 100%;
  opacity: 1.4;
  filter: brightness(90%);
}

.example-slide {
  position: relative;
  text-align: center;
  color: white;
  width: 100%;
  object-fit: cover;
  align-items: center;
  /* background-color: #666; */
  color: #999;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  max-height: 40rem;
}

.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
}

.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
}

.top-right {
  position: absolute;
  top: 8px;
  right: 16px;
}

.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
}

.centered {
  font-family: "Playfair Display", serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 36px;
  width: 100%;
}
</style>
