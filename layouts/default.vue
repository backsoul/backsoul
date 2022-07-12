<template>
  <div class="w-screen flex flex-row justify-center bg-black">
    <div class="w-screen flex flex-col items-center bg-black">
      <div class="w-9/12">
        <Header />
        <Nuxt />
      </div>
      <div class="w-screen  text-citix_gray flex justify-center mt-20">
        <a href="https://github.com/backsoul" class="text-citix_gray ">@Backsoul</a>
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

<style>
html {
  overflow-x: hidden;
}
</style>
