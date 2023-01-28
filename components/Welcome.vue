<template>
  <div class="justify-between items-center" style="position: relative; z-index: 2">
    <div class="h-screen flex justify-between items-center">
      <div>
        <h1 class="font-bold text-sm md:text-4xl text-welcome">Welcome enthusiastic!</h1>
        <p class="text-2xl text-white">Daniel Sarmiento FullStack developer.</p>
        <div class="mt-2 grid grid-cols-3 w-3/12 gap-10">
          <a href="https://github.com/backsoul" target="_blank"
            ><svg
              version="1.1"
              viewBox="0 0 512 512"
              class="fill-current hover:text-orange text-white svg-icon svg-fill"
              style="width: 30px"
            >
              <path
                fill="#fffff"
                stroke="none"
                pid="0"
                d="M256 0C115.39 0 0 115.39 0 256c0 119.988 84.195 228.984 196 256v-84.695c-11.078 2.425-21.273 2.496-32.55-.828-15.13-4.465-27.423-14.543-36.548-29.91-5.816-9.813-16.125-20.454-26.879-19.672l-2.636-29.883c23.254-1.992 43.37 14.168 55.312 34.23 5.305 8.922 11.41 14.153 19.246 16.465 7.575 2.23 15.707 1.16 25.184-2.187 2.379-18.973 11.07-26.075 17.637-36.075v-.015c-66.68-9.946-93.254-45.32-103.801-73.242-13.977-37.075-6.477-83.391 18.238-112.66.48-.571 1.348-2.063 1.012-3.106-11.332-34.23 2.476-62.547 2.984-65.55 13.078 3.866 15.203-3.892 56.809 21.386l7.191 4.32c3.008 1.793 2.063.77 5.07.543 17.372-4.719 35.684-7.324 53.727-7.558 18.18.234 36.375 2.84 54.465 7.75l2.328.234c-.203-.031.633-.149 2.035-.984 51.973-31.481 50.106-21.192 64.043-25.723.504 3.008 14.13 31.785 2.918 65.582-1.512 4.656 45.059 47.3 19.246 115.754-10.547 27.933-37.117 63.308-103.797 73.254v.015c8.547 13.028 18.817 19.957 18.762 46.832V512c111.809-27.016 196-136.012 196-256C512 115.39 396.61 0 256 0zm0 0"
              ></path></svg
          ></a>
          <a href="https://www.linkedin.com/in/danielstevensarmiento/" target="_blank"
            ><svg
              version="1.1"
              viewBox="0 0 455 455"
              class="fill-current hover:text-orange text-white svg-icon svg-fill"
              style="width: 30px"
            >
              <g fill-rule="evenodd" clip-rule="evenodd">
                <path
                  fill="#fffff"
                  stroke="none"
                  pid="0"
                  d="M246.4 204.35v-.665c-.136.223-.324.446-.442.665h.442z"
                ></path>
                <path
                  fill="#fffff"
                  stroke="none"
                  pid="1"
                  d="M0 0v455h455V0H0zm141.522 378.002H74.016V174.906h67.506v203.096zm-33.753-230.816h-.446C84.678 147.186 70 131.585 70 112.085c0-19.928 15.107-35.087 38.211-35.087 23.109 0 37.31 15.159 37.752 35.087 0 19.5-14.643 35.101-38.194 35.101zM385 378.002h-67.524V269.345c0-27.291-9.756-45.92-34.195-45.92-18.664 0-29.755 12.543-34.641 24.693-1.776 4.34-2.24 10.373-2.24 16.459v113.426h-67.537s.905-184.043 0-203.096H246.4v28.779c8.973-13.807 24.986-33.547 60.856-33.547 44.437 0 77.744 29.02 77.744 91.398v116.465z"
                ></path>
              </g></svg
          ></a>
          <a href="https://danielsarmientodeveloper.medium.com/" target="_blank"
            ><svg
              version="1.1"
              viewBox="0 0 24 24"
              class="fill-current hover:text-orange text-white svg-icon svg-fill"
              style="width: 30px"
            >
              <path
                fill="#fffff"
                stroke="none"
                pid="0"
                d="M2.846 6.887a.928.928 0 00-.303-.784l-2.24-2.7V3h6.958l5.378 11.795L17.367 3H24v.403L22.084 5.24a.561.561 0 00-.213.538v13.498a.56.56 0 00.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537V8.321l-5.389 13.688h-.728L4.28 8.321v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404H0v-.404l2.521-3.058c.27-.279.39-.67.325-1.052V6.887z"
              ></path></svg
          ></a>
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
      <div class="mt-8">
        <h1 class="font-bold text-xl text-orange text-center">
          Tecnologías que uso durante la semana
        </h1>
        <div class="grid grid-cols-4 md:grid-cols-7 item-center gap-7 mt-12">
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
