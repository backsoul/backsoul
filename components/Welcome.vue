<template>
  <div class="justify-between items-center">
    <div class=" h-screen flex justify-between items-center">
      <div>
        <h1 class="font-bold text-4xl text-welcome">Welcome enthusiastic!</h1>
        <p class="text-2xl">Daniel Sarmiento FullStack developer.</p>
        <div class="mt-2 grid grid-cols-2 w-2/12 gap-5">
          <a href="https://twitter.com/backsoul_" target="_blank">
            <svgicon
              name="twitter"
              width="30"
              color="#fffff"
              class="fill-current hover:text-orange"
            ></svgicon>
          </a>
          <a href="https://github.com/backsoul" target="_blank">
            <svgicon
              name="github"
              width="30"
              color="#fffff"
              class="fill-current hover:text-orange"
            ></svgicon>
          </a>
        </div>
      </div>
      <img :src="require(`~/assets/img/character-intro.png`)" class="image" />
    </div>
    <Skills />
  </div>
</template>

<script>
export default {}
</script>

<style>
.text-welcome {
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
