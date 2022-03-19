<template>
  <div :class="['infinite-carousel slider']">
    <div class="slide-track">
      <div v-for="(item, index) in images" :key="index" class="slide">
        <img class="lazyload" :src="item" alt="" />
      </div>
      <div
        v-for="(item, index) in images"
        :key="'double-' + index"
        class="slide"
      >
        <img class="lazyload" :src="item" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.slider {
  background: white;
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 960px;

  &::before,
  &::after {
    background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
    );
    content: '';
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }

  .slide-track {
    animation: scroll 40s linear infinite;
    display: flex;
    width: calc(250px * 14);
  }

  .slide {
    height: 100px;
    min-width: 262px;
    width: 250px;
    padding: 10px;
    img {
      display: flex;
      justify-content: center;
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}
</style>


<script>
export default {
  data() {
    return {
      images:[
          require('@/assets/img/corporativos/don-jacobo.png'),
          require('@/assets/img/corporativos/nevada.png'),
          require('@/assets/img/corporativos/pinche-perro.png'),
          require('@/assets/img/corporativos/brownies-broche.png'),
          require('@/assets/img/corporativos/para-tu-rincon.png'),
          require('@/assets/img/corporativos/jarris.png'),
      ]
    }
  }
}
</script>
