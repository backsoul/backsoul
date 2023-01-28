<template>
  <div>
    <h1 class="text-white text-center mt-20 font-semibold">
      Desarrollos implementados en los siguientes sellers
    </h1>
    <div class="slider">
      <div class="slide-track">
        <div class="slide">
          <img
            :src="require(`~/assets/img/corporativos/jarris_logo.png`)"
            class="image-sellers"
          />
        </div>
        <div class="slide">
          <img
            :src="require(`~/assets/img/corporativos/elektra_logo.png`)"
            class="image-sellers"
          />
        </div>
        <div class="slide">
          <img
            :src="require(`~/assets/img/corporativos/don-jacobo.png`)"
            class="image-sellers"
          />
        </div>
        <div class="slide">
          <img
            :src="require(`~/assets/img/corporativos/cts_logo.png`)"
            class="image-sellers"
          />
        </div>
        <div class="slide">
          <img
            :src="require(`~/assets/img/corporativos/copower.png`)"
            class="image-sellers"
          />
        </div>
        <div class="slide">
          <img
            :src="require(`~/assets/img/corporativos/proymelec_logo.png`)"
            class="image-sellers"
          />
        </div>
        <div class="slide">
          <img
            :src="require(`~/assets/img/corporativos/shf_logo.png`)"
            class="image-sellers"
          />
        </div>
        <div class="slide">
          <img
            :src="require(`~/assets/img/corporativos/adidas.png`)"
            class="image-sellers"
          />
        </div>
        <div class="slide">
          <img
            :src="require(`~/assets/img/corporativos/exito.png`)"
            class="image-sellers"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.image-sellers {
  height: 100%;
}
@mixin white-gradient {
  background: linear-gradient(to right, #171717 0%, rgba(255, 255, 255, 0) 100%);
}

$animationSpeed: 10s;

// Animation
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100px * 7));
  }
}

// Styling
.slider {
  background: none;
  height: auto;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
  margin-top: 1rem;

  &::before,
  &::after {
    @include white-gradient;
    content: "";
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
    animation: scroll $animationSpeed linear infinite;
    display: flex;
    width: calc(130px * 14);
  }

  .slide {
    height: 5rem;
    width: 100%;
    margin: 1rem;
    text-align: center;
    display: flex;
    justify-content: center;
  }
}
</style>
