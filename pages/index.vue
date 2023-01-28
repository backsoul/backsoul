<template>
  <div class="flex flex-col justify-center">
    <div class="index-container">
      <div class="opacitybg"></div>
      <img :src="require(`~/assets/img/bg.gif`)" class="imagebg" />
      <div class="shadowimg"></div>
    </div>
    <Welcome />
  </div>
</template>

<script>
import "~/assets/icons";

export default {};
</script>

<style>
.opacitybg {
  background: black;
  z-index: 1;
  opacity: 0.85;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  background-size: cover;
}
.shadowimg {
  width: 100vw;
  height: 1px;
  position: absolute;
  left: 0;
  bottom: -1px;
  z-index: 2;
  box-shadow: 0px -10px 20px 30px #171717;
}
.imagebg {
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  background-size: cover;
}
.index-container {
  box-shadow: inset 1px 3px 124px #f8a100;
}
</style>
