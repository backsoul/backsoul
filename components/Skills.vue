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
          claro que aprender de todo y no especializarse esta mal.
        </p>
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
