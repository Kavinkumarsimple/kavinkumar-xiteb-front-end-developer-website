<template>
  <li class="nav-item dropdown dropdown-mega">
    <a
      class="nav-link"
      href="#"
      data-bs-toggle="dropdown"
      data-bs-auto-close="outside"
      >{{ menuItem }}
      <i v-if="data" class="fa fa-chevron-down fa-sm"></i>
    </a>
    <div v-if="data" class="dropdown-menu">
      <div class="mega-content px-2" >
        <div class="container-fluid" style="max-width: 1150px; ">
          <div class="row" >
            <div class="col-12 col-sm-4 col-md-3 py-4" v-for="index in data['data']" :key="index" >
              <h5 class="menuSubHeading">{{ index["title"] }}</h5>
              <div class="list-group" v-for="subMenuData in index['list']" :key="subMenuData">
                <a class="subLinks" href="#">{{subMenuData}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "NavMenuItem",
  props: {
    menuItem: String,
    data: {
        type: String,
        default: undefined
    }
  },
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
@import "../assets/css/navstyle.css";
</style>