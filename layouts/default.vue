<template>
  <div class="w-screen flex flex-row justify-center h-screen">
    <div class="w-9/12">
      <Header />
     <Nuxt />
    </div>
  </div>
</template>

<script>
import '~/assets/icons'

export default {
  layout: 'default',
}
</script>

<style>
html{
    overflow-x: hidden;
}
</style>
