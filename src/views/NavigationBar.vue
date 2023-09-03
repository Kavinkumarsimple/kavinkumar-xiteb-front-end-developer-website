<template>

</template>

<script>
import '../assets/js/navFunctions.js'
// import * as jQuery from "../assets/js/jquery.min.js";
// import * as NavFunctions from "../assets/js/navFunctions.js";


export default {
  
  data() {
    return {
      isResponsive: false,
    };
  },
  methods: {
    toggleResponsive() {
      this.isResponsive = !this.isResponsive;
    },
    // handleNavHoverEvent(event) {
    //   const $ = jQuery;
    //   $(".nav_drop").hover(
    //     function () {
    //       console.log("Hover");
    //       var $this = $(this);
    //       $this.addClass("drop-down-show");
    //       $this.find(".nav-dropdown").addClass("show");
    //     },
    //     function () {
    //       console.log("Not Hovered");
    //       var $this = $(this);
    //       $this.removeClass("drop-down-show");
    //       $this.find(".nav-dropdown").removeClass("show");
    //     }
    //   );
    // },
    // handleNavHover(event) {
    //   const $ = jQuery; // Use jQuery within the Vue component

    //   $("nav .dropdown").hover(
    //     function () {
    //       console.log("Hover");
    //       var $this = $(this);
    //       $this.addClass("show");
    //       // $this.find("> a").attr("aria-expanded", true);
    //       $this.find(".dropdown-menu").addClass("show");
    //     },
    //     function () {
    //       console.log("Not Hover");
    //       var $this = $(this);
    //       $this.removeClass("show");
    //       // $this.find("> a").attr("aria-expanded", false);
    //       $this.find(".dropdown-menu").removeClass("show");
    //     }
    //   );
    // },
  },
};
</script>


<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
@import "../assets/css/style.css";

.nav-dropdown {
  position: absolute;
  width: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}

.drop-down-show {
  display: block;
}

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04aa6d;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {
    position: relative;
  }
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
