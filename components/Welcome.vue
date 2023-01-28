<template>
  <div class="justify-between items-center" style="position: relative; z-index: 2">
    <div class="h-screen flex justify-between items-center">
      <div>
        <h1 class="font-bold text-4xl text-welcome">Welcome enthusiastic!</h1>
        <p class="text-2xl text-white">Daniel Sarmiento FullStack developer.</p>
        <div class="mt-2 grid grid-cols-3 w-3/12 gap-5">
          <a href="https://github.com/backsoul" target="_blank">
            <svgicon
              name="github"
              width="30"
              color="#fffff"
              class="fill-current hover:text-orange text-white"
            ></svgicon>
          </a>
          <a href="https://www.linkedin.com/in/danielstevensarmiento/" target="_blank">
            <svgicon
              name="linkedin"
              width="30"
              color="#fffff"
              class="fill-current hover:text-orange text-white"
            ></svgicon>
          </a>
          <a href="https://danielsarmientodeveloper.medium.com/" target="_blank">
            <svgicon
              name="medium"
              width="30"
              color="#fffff"
              class="fill-current hover:text-orange text-white"
            ></svgicon>
          </a>
        </div>
      </div>
    </div>
    <div style="display: flex; justify-content: center; margin-top: -7rem">
      <img
        :src="require(`~/assets/img/scrolldown.gif`)"
        class="image"
        style="position: relative; z-index: 2; width: 7rem"
      />
    </div>
    <div>
      <Skills />
      <Experience />
      <Products />
      <div class="mt-32">
        <h1 class="flex justify-center text-white m-10 font-semibold">
          Tecnologías que uso durante la semana
        </h1>
        <div class="grid grid-cols-7 item-center gap-7 mt-12">
          <a href="https://angular.io/" target="_blank">
            <svgicon
              name="angular"
              width="50"
              color="#fffff"
              class="fill-current hover:text-orange hover:-translate-y-2 transform duration-500"
            ></svgicon>
          </a>
          <a href="https://nuxtjs.org/" class="mt-2" target="_blank">
            <svgicon
              name="nuxt"
              width="60"
              color="#fffff"
              class="fill-current hover:text-orange hover:-translate-y-2 transform duration-500"
            ></svgicon>
          </a>
          <a href="https://ionicframework.com/" target="_blank">
            <svgicon
              name="ionic"
              width="60"
              color="#fffff"
              class="fill-current hover:text-orange hover:-translate-y-2 transform duration-500"
            ></svgicon>
          </a>
          <a href="https://www.typescriptlang.org/" target="_blank">
            <svgicon
              name="typescript"
              width="60"
              color="#fffff"
              class="fill-current hover:text-orange hover:-translate-y-2 transform duration-500"
            ></svgicon>
          </a>
          <a href="https://laravel.com/" target="_blank">
            <svgicon
              name="laravel"
              width="60"
              color="#fffff"
              class="fill-current hover:text-orange hover:-translate-y-2 transform duration-500"
            ></svgicon>
          </a>
          <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank">
            <svgicon
              name="javascript"
              width="60"
              color="#fffff"
              class="fill-current hover:text-orange hover:-translate-y-2 transform duration-500"
            ></svgicon>
          </a>
          <a href="https://www.python.org/" target="_blank">
            <svgicon
              name="python"
              width="60"
              color="#fffff"
              class="fill-current hover:text-orange hover:-translate-y-2 transform duration-500"
            ></svgicon>
          </a>

          <a href="https://go.dev/" target="_blank">
            <svgicon
              name="golang"
              width="60"
              color="#fffff"
              class="fill-current hover:text-orange hover:-translate-y-2 transform duration-500"
            ></svgicon>
          </a>
          <a href="https://www.rabbitmq.com/" target="_blank">
            <svgicon
              name="rabbitmq"
              width="60"
              color="#fffff"
              class="fill-current hover:text-orange hover:-translate-y-2 transform duration-500"
            ></svgicon>
          </a>
          <a href="https://www.github.com/" target="_blank">
            <svgicon
              name="github"
              width="60"
              color="#fffff"
              class="fill-current hover:text-orange hover:-translate-y-2 transform duration-500"
            ></svgicon>
          </a>
          <a href="https://www.docker.com" target="_blank">
            <svgicon
              name="docker"
              width="60"
              color="#fffff"
              class="fill-current hover:text-orange hover:-translate-y-2 transform duration-500"
            ></svgicon>
          </a>
          <a href="https://www.nginx.com/" target="_blank">
            <svgicon
              name="nginx"
              width="60"
              color="#fffff"
              class="fill-current hover:text-orange hover:-translate-y-2 transform duration-500"
            ></svgicon>
          </a>
          <a href="https://www.linux.org/" target="_blank">
            <svgicon
              name="linux"
              width="60"
              color="#fffff"
              class="fill-current hover:text-orange hover:-translate-y-2 transform duration-500"
            ></svgicon>
          </a>
          <a href="https://www.atlassian.com/es/software/jira" target="_blank">
            <svgicon
              name="jira"
              width="60"
              color="#fffff"
              class="fill-current hover:text-orange hover:-translate-y-2 transform duration-500"
            ></svgicon>
          </a>
          <a href="https://git-scm.com/" target="_blank">
            <svgicon
              name="git"
              width="60"
              color="#fffff"
              class="fill-current hover:text-orange hover:-translate-y-2 transform duration-500"
            ></svgicon>
          </a>
          <a href="https://www.digitalocean.com/" target="_blank">
            <svgicon
              name="digitalocean"
              width="60"
              color="#fffff"
              class="fill-current hover:text-orange hover:-translate-y-2 transform duration-500"
            ></svgicon>
          </a>
          <a href="https://aws.amazon.com/es/" target="_blank">
            <svgicon
              name="aws"
              width="60"
              color="#fffff"
              class="fill-current hover:text-orange hover:-translate-y-2 transform duration-500"
            ></svgicon>
          </a>
          <a href="https://www.djangoproject.com/" target="_blank">
            <svgicon
              name="django"
              width="60"
              color="#fffff"
              class="fill-current hover:text-orange hover:-translate-y-2 transform duration-500"
            ></svgicon>
          </a>
          <a href="https://nodejs.org/es/" target="_blank">
            <svgicon
              name="node"
              width="60"
              color="#fffff"
              class="fill-current hover:text-orange hover:-translate-y-2 transform duration-500"
            ></svgicon>
          </a>
          <a href="https://www.cloudflare.com/es-es/" target="_blank">
            <svgicon
              name="cloudflare"
              width="60"
              color="#fffff"
              class="fill-current hover:text-orange hover:-translate-y-2 transform duration-500"
            ></svgicon>
          </a>
          <a href="https://www.odoo.com/" target="_blank">
            <svgicon
              name="odoo"
              width="60"
              color="#fffff"
              class="fill-current hover:text-orange hover:-translate-y-2 transform duration-500"
            ></svgicon>
          </a>
        </div>
      </div>
      <Sellers />
    </div>
  </div>
</template>

<script>
import Experience from "./Experience.vue";
import Sellers from "./Sellers.vue";
import Products from "./Products.vue";

export default { components: { Experience, Sellers, Products } };
</script>

<style>
.text-welcome {
  color: white;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}

.image {
  animation: float 5s infinite;
  border-radius: 50%;
  width: 35rem;
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-10px);
  }
  100% {
    transform: translatey(0px);
  }
}
</style>
