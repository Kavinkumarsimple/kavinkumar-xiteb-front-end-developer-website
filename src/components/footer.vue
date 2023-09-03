<template>
  <div class="footer-img-holder">
    <img src="../assets/images/bottom-img.jpeg" style="width: 100%" />
    <img class="footer-top" src="../assets/images/footer-top.png" />
  </div>

  <div class="footer-holder">
    <div class="footer-container d-flex">
      <div class="footer-content d-flex flex-column align-items-start">
        <p class="footer-title">About</p>
        <a href="#" class="footer-sub"> About Cinnamon Hotels & Resorts</a>
        <a href="#" class="footer-sub"> Media & Accolades</a>
        <a href="#" class="footer-sub"> Gallery</a>
        <a href="#" class="footer-sub"> CSR & Sustainability</a>
        <a href="#" class="footer-sub"> John Keells Group</a>
        <a href="#" class="footer-sub"> Cinnamon Air </a>
        <a href="#" class="footer-sub"> Nature Trails</a>
        <a href="#" class="footer-sub"> Cinnamon Box Office</a>
        <a href="#" class="footer-sub"> Terms & Conditions </a>
        <a href="#" class="footer-sub"> Privacy Statement</a>
      </div>
      <div class="footer-content d-flex flex-column align-items-start">
        <p class="footer-title">Get In Touch</p>
        <a href="#" class="footer-sub">Know Sri Lanka</a>
        <a href="#" class="footer-sub">Know Maldives</a>
        <a href="#" class="footer-sub">Contact Us</a>
        <a href="#" class="footer-sub">FAQs</a>
        <br />
        <p class="footer-title">Sections</p>
        <a href="#" class="footer-sub">Careers</a>
        <a href="#" class="footer-sub">Blog</a>
      </div>
      <div class="footer-content d-flex flex-column align-items-start">
        <p class="footer-title">Follow Us</p>
        <div class="d-flex flex-row">
          <a href="#" class="social-icon fa fa-facebook"></a>
          <a href="#" class="social-icon fa fa-twitter"></a>
          <a href="#" class="social-icon fa fa-linkedin"></a>
          <a href="#" class="social-icon fa fa-instagram"></a>
          <a href="#" class="social-icon fa fa-youtube"></a>
        </div>

        <br />
        <p class="footer-title">Get Cinnamon in your inbox</p>
        <div class="input-container">
          <input
            type="email"
            class="emailtxt"
            aria-describedby="emailHelp"
            placeholder="Email Address"
          />
          <span class="suffix-icon">
            <i class="fa fa-chevron-right"></i>
          </span>
        </div>
        <br />
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label
            class="check-description form-check-label"
            for="flexCheckDefault"
          >
            By Checking this box, I consent to the processing of my Personal
            Data by Cinnamon for the purpose and within the Conditions set out
            in this form and the
            <b> <a class="decoration-none" href="#"> Cinnamon Data Protection Policy</a></b>
          </label>
        </div>
      </div>
    </div>
    <img class="footer-bottom" src="../assets/images/footer-img.png" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  name: "Footer",
  components: {},
  props: {},
};
</script>

<style>
.input-container {
  position: relative;
  display: inline-block;
}

.emailtxt {
  background-color: white;
  border: 1px solid rgba(37, 39, 118, 0.2);
  font-size: 18px;
  width: 500px;
  padding: 18px;
  text-align: left;
  color: #9a9a9a;
}

.suffix-icon {
  position: absolute;
  top: 50%;
  right: 20px; 
  transform: translateY(-50%);
  color: #999; 
  cursor: pointer; 
}

.social-icon {
  font-size: 22px;
  color: #9a9a9a;
  margin-right: 20px;
  text-decoration: none;
}

.social-icon:hover {
  color: #77328b;
}

.footer-container {
  width: 90%;
  /* margin-left: 80px; */
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
  padding-bottom: 120px;
}

.footer-title {
  font-family: "Bodoni Moda", serif;
  color: #77328b;
  font-weight: 600;
  font-size: 30px;
}

.footer-sub {
  color: #9a9a9a;
  font-size: 15px;
  text-decoration: none;
  margin-bottom: 14px;
}

.check-description {
  color: #9a9a9a;
  font-size: 15px;
  text-decoration: none;
  margin-bottom: 14px;
  width: 400px;
  text-align: left;
}

.decoration-none {
    text-decoration: none;
    color: #9a9a9a;
}

.footer-sub:hover {
  color: black;
}

.footer-content {
  height: auto;
  padding: 10px 40px 20px 40px;
}

.footer-holder {
  position: relative;
}

.footer-bottom {
  z-index: -1;

  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.footer-img-holder {
  position: relative;
  text-align: center;
}

.footer-top {
  width: 100%;
  position: absolute;
  bottom: -30px;
  left: 0;
  right: 0;
}
</style>