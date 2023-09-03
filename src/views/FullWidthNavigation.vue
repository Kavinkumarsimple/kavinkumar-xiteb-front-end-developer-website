<template>
  <div class="headerContainer">
    <div class="navHeader">
      <img class="dAppLogo" src="../assets/images/appLogo.png" alt="My Image" />
      <div class="d-flex">
        <NavHeaderItem icon="fa fa-user-o" txt="Sign In" />
        <NavHeaderItem txt="Join Now" />
        <NavHeaderItem txt="Find Reservations" />
        <NavHeaderItem icon="fa fa-globe " txt="English" />
        <NavHeaderItem txt="SGD" />
        <div class="d-flex">
          <div class="me-3">
            <i class="me-3 fa fa-mobile fa-lg" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav class="navbar navbar-expand-lg navbar-light navbar-dark p-0">
    <div class="container-fluid">
      <button
        class="navbar-toggler collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-content"
      >
        <div class="hamburger-toggle">
          <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbar-content"
        :class="{ active: isActive }"
      >
        <ul class="navbar-nav ms-auto">
          <NavMenuItem menuItem="ABOUT" :data="aboutData" />
          <NavMenuItem menuItem="ROOMS & SUITES" :data="roomsSuitesData" />
          <NavMenuItem menuItem="DINING" :data="diningData" />
          <NavMenuItem menuItem="EXPERIENCE" :data="experienceData" />
          <NavMenuItem menuItem="EVENTS" :data="eventsData" />
          <NavMenuItem menuItem="GALLERY" />
          <NavMenuItem menuItem="OFFERS" />
          <NavMenuItem menuItem="MORE" :data="moreData" />
        </ul>
        <a type="button" class="findBTN">FIND A HOTEL</a>
        <div class="d-flex ms-auto"></div>
      </div>
    </div>
  </nav>
</template>



<script>
import NavMenuItem from "@/components/NavMenuItem.vue";
import NavHeaderItem from "@/components/NavHeaderItem.vue";

export default {
  components: {
    NavMenuItem,
    NavHeaderItem,
  },
  data() {
    return {
      aboutData: {
        columns: 1,
        data: [
          {
            title: "About the Hotel",
            list: ["Overview", "Explore Colombo", "Services and Facilities"],
          },
        ],
      },
      roomsSuitesData: {
        columns: 4,
        data: [
          {
            title: "Rooms",
            list: [
              "Deluxe Lake View",
              "Deluxe Ocean View",
              "Premier Balcony",
              "Premier Ocen View",
            ],
          },
          {
            title: "Horizon Club",
            list: ["Horizon Club Lake View", "Horizon Club Ocean View"],
          },
          {
            title: "Suites",
            list: ["Executive Suites", "Speciality Suites", "Shangri-La Suite"],
          },
          {
            title: "Connecting Rooms",
            list: [
              "Executive & Premier Ocean Connecting",
              "Two Deluxe Lake View Rooms Connecting",
            ],
          },
        ],
      },
      diningData: {
        columns: 2,
        data: [
          {
            title: "Restaurants",
            list: [
              "Cake Temptations by Shangri-La Colombo",
              "Shang Palace",
              "Capital Bar & Chill",
              "Central",
              "Central Cafe",
            ],
          },
          {
            title: "Bar & Lounges",
            list: ["Sapphyr Lounge", "Capital Bar & Grill", "Pool Bar"],
          },
        ],
      },
      eventsData: {
        columns: 2,
        data: [
          {
            title: "Meetings & Events",
            list: [
              "Overview", 
              "Experience It", 
              "Coworking Space",
              "Outside Catering",
              "Request For Proposal"
            ],
          },
          {
            title: "Wedding & Celebrations",
            list: ["Overview", "Wedding Planning", "Weddings by Shangri-La ", "Request for Proposal"],
          },
        ],
      },
      experienceData: {
        columns: 2,
        data: [
          {
            title: "For Kids",
            list: ["Overview", "Adventure Zone", "Celebrations"],
          },
          {
            title: "Health & Leisure",
            list: ["Overview", "Health Club", "Chi, The Spa"],
          },
        ],
      },
      moreData: {
        columns: 1,
        data: [
          {
            title: "Apartments",
            list: ["Learn more"],
          }
        ],
      },
      isActive: false,
    };
  },
  methods: {
    handleClick(event) {
      if (event.target.classList.contains("hamburger-toggle")) {
        this.isActive = !this.isActive;
      }
    },
  },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
@import "../assets/css/navstyle.css";
</style>
