<template>
  <div class="w-screen flex flex-row justify-center">
    <div class="w-9/12">
      <Header />
      <div class="flex justify-between items-center mt-40">
        <div>
          <h1 class="font-bold text-4xl text-welcome">Welcome intusiaste!</h1>
          <p>my name is Daniel Sarmiento aka backsoul in github.</p>
        </div>
        <img :src="require(`~/assets/img/character-intro.png`)" class="image"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
}
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

.image{
animation: float 5s infinite;
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
