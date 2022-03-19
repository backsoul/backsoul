<template>
  <div class="flex justify-between mt-10 font-semibold text-xl tracking-wide">
    <div class="grid grid-cols-3 gap-5">
      <NuxtLink to="/about" class="hover:text-orange hover:cursor-pointer"
        >Sobre mi</NuxtLink
      >
      <a
        href="https://backsoul-doc.web.app/"
        class="hover:text-orange hover:cursor-pointer"
        >Documentación</a
      >
    </div>
    <div>
      <NuxtLink to="/" class="hover:text-orange hover:cursor-pointer"
        >Inicio</NuxtLink
      >
    </div>
  </div>
</template>

<script>
// <NuxtLink to="/" class="hover:text-orange">Trabajos</NuxtLink>
export default {
  name: 'Header',
}
</script>
<style>
a.nuxt-link-exact-active {
  color: orange;
}
</style>
