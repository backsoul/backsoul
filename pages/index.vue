<template>
  <div class="w-screen flex flex-row justify-center h-screen">
    <div class="w-9/12">
      <Header />
      <Welcome />
      <div class="mt-20 grid grid-cols-2">
        <img :src="require(`~/assets/img/character-skills.png`)" />
        <div class="flex justify-start flex-col items-center">
          <h1 class="font-bold text-2xl">Motivación</h1>
          <p class="mt-5 font-sm">
            La programación la considero un arte, es por ello mantengo informado
            de los últimos pinceles. Dejando a un lado las metáforas, me
            considero una persona con un aprendizaje constante me divierte
            aprender nuevas tecnologías por eso mi stack tech creció. Pero está
            claro que aprender de todo y no especializarse esta mal, por eso mis
            fuertes son:
          </p>
          <div class="grid grid-cols-7 item-center gap-7 mt-10">
            <a href="">
              <svgicon
                name="angular"
                width="60"
                color="#fffff"
                class="fill-current hover:text-orange hover:-translate-y-2  transform duration-500"
              ></svgicon>
            </a>
             <a href="" class="mt-2">
              <svgicon
                name="nuxt"
                width="60"
                color="#fffff"
                class="fill-current hover:text-orange hover:-translate-y-2  transform duration-500"
              ></svgicon>
            </a>
            <a href="">
              <svgicon
                name="ionic"
                width="60"
                color="#fffff"
                class="fill-current hover:text-orange hover:-translate-y-2  transform duration-500"
              ></svgicon>
            </a>
             <a href="">
              <svgicon
                name="typescript"
                width="60"
                color="#fffff"
                class="fill-current hover:text-orange hover:-translate-y-2  transform duration-500"
              ></svgicon>
            </a>
             <a href="">
              <svgicon
                name="laravel"
                width="60"
                color="#fffff"
                class="fill-current hover:text-orange hover:-translate-y-2  transform duration-500"
              ></svgicon>
            </a>
            <a href="">
              <svgicon
                name="javascript"
                width="60"
                color="#fffff"
                class="fill-current hover:text-orange hover:-translate-y-2  transform duration-500"
              ></svgicon>
            </a>
            <a href="">
              <svgicon
                name="python"
                width="60"
                color="#fffff"
                class="fill-current hover:text-orange hover:-translate-y-2  transform duration-500"
              ></svgicon>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '~/assets/icons'

export default {
  layout: 'default',
}
</script>

<style></style>
