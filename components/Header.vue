<template>

  <div class="flex justify-between mt-10 mx-10 font-semibold text-xl tracking-wide">
    <div class="grid grid-cols-3 gap-5">
    <NuxtLink to="about" class="hover:text-orange">Sobre mi</NuxtLink>
    <NuxtLink to="services" class="hover:text-orange">Trabajos</NuxtLink>
      <a href="" class="hover:text-orange">Contactame</a>
    </div>
    <div>
     <NuxtLink to="/" class="hover:text-orange">Portafolio</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>
