<template>
  <div class="h-screen items-center justify-center">
    <div class="grid grid-cols-2 h-screen items-center justify-center">
      <img :src="require(`~/assets/img/character-skills.png`)" class="image" />
      <div class="flex justify-start flex-col items-center">
        <h1 class="font-bold text-2xl">Motivación</h1>
        <p class="mt-5 font-sm">
          La programación la considero una obra de arte, Por ello mantengo
          informado de los últimos pinceles. Dejando a un lado las metáforas, Me
          considero una persona con un aprendizaje constante me divierte
          aprender nuevas tecnologías por eso mi stack tech creció. Pero está
          claro que aprender de todo y no especializarse esta mal, por eso mis
          fuertes son:
        </p>
        <div class="grid grid-cols-7 item-center gap-7 mt-10">
          <a href="https://angular.io/" target="_blank">
            <svgicon
              name="angular"
              width="50"
              color="#fffff"
              class="
                fill-current
                hover:text-orange hover:-translate-y-2
                transform
                duration-500
              "
            ></svgicon>
          </a>
          <a href="https://nuxtjs.org/" class="mt-2" target="_blank">
            <svgicon
              name="nuxt"
              width="60"
              color="#fffff"
              class="
                fill-current
                hover:text-orange hover:-translate-y-2
                transform
                duration-500
              "
            ></svgicon>
          </a>
          <a href="https://ionicframework.com/" target="_blank">
            <svgicon
              name="ionic"
              width="60"
              color="#fffff"
              class="
                fill-current
                hover:text-orange hover:-translate-y-2
                transform
                duration-500
              "
            ></svgicon>
          </a>
          <a href="https://www.typescriptlang.org/" target="_blank">
            <svgicon
              name="typescript"
              width="60"
              color="#fffff"
              class="
                fill-current
                hover:text-orange hover:-translate-y-2
                transform
                duration-500
              "
            ></svgicon>
          </a>
          <a href="https://laravel.com/" target="_blank">
            <svgicon
              name="laravel"
              width="60"
              color="#fffff"
              class="
                fill-current
                hover:text-orange hover:-translate-y-2
                transform
                duration-500
              "
            ></svgicon>
          </a>
          <a
            href="https://developer.mozilla.org/es/docs/Web/JavaScript"
            target="_blank"
          >
            <svgicon
              name="javascript"
              width="60"
              color="#fffff"
              class="
                fill-current
                hover:text-orange hover:-translate-y-2
                transform
                duration-500
              "
            ></svgicon>
          </a>
          <a href="https://www.python.org/" target="_blank">
            <svgicon
              name="python"
              width="60"
              color="#fffff"
              class="
                fill-current
                hover:text-orange hover:-translate-y-2
                transform
                duration-500
              "
            ></svgicon>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.image {
  animation: float 5s infinite;
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
