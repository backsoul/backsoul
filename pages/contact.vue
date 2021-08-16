<template>
  <div class="flex flex-col justify-center items-center mt-10">
    <div class="w-auto">
      <h1 class="font-bold text-3xl text-contact">
        Ideas,proyectos,trabajo etc...
      </h1>
    </div>
    <p class="text-1xl">¡enviame un correo si estas interesado!</p>
    <div class="mt-5">
      <form
        v-on:submit.prevent="sendEmail"
        method="POST"
        class="flex flex-col justify-center items-center"
      >
        {{ name }}
        <label class="font-extrabold text-1xl mb-2">Nombre</label>
        <input
          type="text"
          model="name"
          placeholder="Ingresa tu nombre"
          class="
            text-center
            p-2
            border-2 border-opacity-90 border-black
            rounded-xl
          "
        />
        <label class="font-extrabold text-1xl mt-5 mb-2"
          >Correo electrónico</label
        >
        <input
          type="email"
          model="email"
          placeholder="Ingresa tu email"
          class="
            text-center
            p-2
            border-2 border-opacity-90 border-black
            rounded-xl
          "
        />
        <label class="font-extrabold text-1xl mt-5 mb-2">Mensaje</label>
        <textarea
          name="message"
          model="message"
          cols="30"
          rows="5"
          placeholder="Hola!, me encantaría hablar contigo..."
          class="
            text-center
            p-2
            border-2 border-opacity-90 border-black
            rounded-xl
          "
        >
        </textarea>

        <input
          type="submit"
          value="Enviar"
          class="
            hover:cursor-pointer
            px-24
            py-3
            rounded-xl
            bg-orange
            text-white
            mt-10
          "
        />
      </form>
    </div>
  </div>
</template>
<script>
import emailjs from 'emailjs-com'

export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
    }
  },
  methods: {
    sendEmail(e) {
      e.preventDefault()
      emailjs
        .sendForm(
          'my_web',
          'template_0vkl9vp',
          e.target,
          'user_fAY0dsqhd5zpHFYDhkMD6',
          {
            name: this.name,
            email: this.email,
            message: this.message,
          }
        )
        .then((data) => {
          this.$vs.notification({
            title: 'Documentation Vuesax 4.0+',
            color: '#ffa500',
            title: '¡Mensaje enviado!',
            text: 'El mensaje se ha enviado correctamente.',
          })
          this.name = ''
          this.email = ''
          this.message = ''
          this.$router.push({
            path: '/',
          })
        })
        .catch((err) => {
          this.$vs.notification({
            title: 'Documentation Vuesax 4.0+',
            color: 'error',
            title: '¡Mensaje enviado!',
            text: 'Ocurrio un problema al enviar el mensaje.',
          })
        })
    },
  },
}
</script>

<style>
.text-contact {
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
</style>
