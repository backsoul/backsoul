<template>
  <div class="w-screen flex flex-row justify-center bg-black">
    <div class="w-screen flex flex-col items-center bg-black">
      <div class="w-9/12">
        <!-- <Header /> -->
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import "~/assets/icons";

export default {
  layout: "default",
};
</script>

<style>
html {
  overflow-x: hidden;
}
</style>
