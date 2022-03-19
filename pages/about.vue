<template>
  <div class="text-center mt-20">
    <!-- CITIX -->
    <div class="my-10">
      <h1 class="text-citix_gray font-bold my-10">Citix Colombia - FullStack Developer</h1>
      <div class="flex items-center justify-between gap-60">
      <img src="../assets/img/citix-phone.png" alt="" style="width: 20rem;">
      <div>
        <h2 class="text-citix_gray font-bold">Explicación,visión y roles.</h2>
      <p class="text-citix_text" style="font-size: .8rem;">
        Citix Colombia es una plataforma de domicilios y mensajeria en Bucaramanga y el area metropolitana, Mis funciones eran de FullStack developer Angular,Laravel y Ionic.
        Estuve desde el inicio tanto en la planeacion del proyecto,desarrollo y entrega al cliente final.
        <br />
        Citix Colombia es un sistema escalable enfocado a microservicios, igualmente se usaron tecnologias salientes como graphql,nestjs,capacitor y apollo. las anteriores no son todas
        pero da a entender la idea de que el sistema es escalable y se puede usar en cualquier plataforma.
        </p>
      </div>
      </div>

      <div  class="flex items-center justify-between gap-60">
        <div>
          <h2 class="text-citix_gray font-bold">Proceso de crecimiento</h2>
          <p class="text-citix_text" style="font-size: .8rem;">Citix colombia me permitio aprender nuevas tecnologias ademas no casarme con un framework ni lenguaje ademas de esto empleamos scrum master para el desarrollo agil (Scrums,Daily Scrum Meeting,Sprints Weeks), agradecimiento a Sebastian Manrique que hizo parte del aprendizaje y capacitacion.
            Actualmente me llena de sactifacion el enfoque que le dimos y su futuro.
          </p>
        </div>
          <img src="../assets/img/citix-brand.png" alt="" style="width: 20rem;">
      </div>

        <div>
          <h2 class="text-citix_gray font-bold">Impacto</h2>
          <p class="text-citix_text my-2" style="font-size: .8rem;">Citix colombia actualmente cuenta con importantes clientes tales como</p>
          <InfiniteEnterpriseCarousel
          :images="citix_images"
          class="infinite-enterprise"
        />
        </div>
    </div>
    <!-- ODOO SHF -->
  <div class="my-10">
    <h2 style="border: 0px solid rgb(226, 232, 240);
    line-height: 1;
    position: relative;
    top: 0px;" class="text-odoo_text my-10">Odoo Developer</h2>
     <div  class="flex items-center justify-between gap-60">
      <img src="../assets/img/shf/computer-shf.png" alt="" style="width: 30rem;">
      <div>
        <h2 class="text-odoo_text font-bold">Explicación,visión y roles.</h2>

      <p class="text-citix_text" style="font-size: .8rem;">Odoo es un framework enfocado a modulos en este caso de contabilidad y firmas de ingenieria.
        <br />
        Actualmente desarrollo modulos de contabilidad,nomina y facturacion electronica. Incluso a peticion del cliente
        se desarrollan modulos con compatibilidad con otros frameworks por ejemplo angular,ionic y react.
      </p>
      </div>
    </div>

    <div  class="flex items-center justify-between gap-60">
        <div>
        <h2 class="text-odoo_text font-bold">Proceso de crecimiento.</h2>

      <p class="text-citix_text" style="font-size: .8rem;">Odoo me permitio reforzar conocimientos en relaciones de base de datos,pensamiento
        modular,tratamiento de datos delicados,insercion de requerimientos del cliente,nuevo modelo de desarrollo (tickets).
      </p>
      </div>
      <img src="../assets/img/shf/shf-aprendizaje.png" alt="" style="width: 30rem;">
    </div>

    <div>
          <h2 class="text-odoo_text font-bold">Impacto</h2>
          <p class="text-citix_text my-2" style="font-size: .8rem;">Desarrolle modulos para empresas de ingenieria como</p>
          <InfiniteEnterpriseCarousel
          :images="shf_images"
          class="infinite-enterprise"
        />
        </div>
  </div>

  <div class="my-10">
    <h2 style="border: 0px solid rgb(226, 232, 240);
    line-height: 1;
    position: relative;
    top: 0px;" class="text-shf my-10">Productos independientes por clientes</h2>
     <div  class="flex items-center justify-between gap-60">
      <img src="../assets/img/shf/copower-qr.png" alt="" style="width: 20rem;
    border-radius: 50%;
    height: 20rem;
    object-fit: cover;">
      <div>
        <h2 class="text-shf font-bold">Copower QR - FullStack Developer</h2>

      <p class="text-citix_text" style="font-size: .8rem;">
        Copower QR es una aplicacion web que permite la generacion de codigos QR y generacion de reportes de
        codigos QR.
        <br />
        La aplicacion se desarrollo en el framework de Nuxtjs.
      </p>
      </div>
    </div>

    <div  class="flex items-center justify-between gap-60">
        <div>
        <h2 class="text-shf font-bold">Microservicios -  Backend Developer</h2>

      <p class="text-citix_text" style="font-size: .8rem;">Cuando las aplicaciones crecen los requerimiento y consumo tambien, cree microservicios para funciones en especificas, sms,gateway,etc.
        <br />
        Golang,express,django,aws,docker y firebase (sms push notification). son unas de las tecnologias que uso en el desarrollo de estos microservicios.
      </p>
      </div>
      <img src="../assets/img/microservice.png" alt="" style="width: 30rem;">
    </div>

    <div  class="flex items-center justify-between gap-60">
      <img src="../assets/img/shf/copower-qr.png" alt="" style="width: 20rem;
    border-radius: 50%;
    height: 20rem;
    object-fit: cover;">
      <div>
        <h2 class="text-shf font-bold">Creditodo / Prestafacil - FullStack Developer</h2>

      <p class="text-citix_text" style="font-size: .8rem;">
        Mantenimiento de aplicaciones ya existentes. Agregue nuevas features.
        <br />
       Tecnologías: Angular,Ionic, Laravel y Linux.
      </p>
      </div>
    </div>
  </div>


  <div>
    <h1>Tecnologías de uso diario</h1>
    <div class="grid grid-cols-7 item-center gap-7 mt-10">
      <a href="https://angular.io/" target="_blank">
        <svgicon
          name="angular"
          width="50"
          color="#fffff"
          class="
            fill-current
            hover:text-orange hover:-translate-y-2
            transform
            duration-500
          "
        ></svgicon>
      </a>
      <a href="https://nuxtjs.org/" class="mt-2" target="_blank">
        <svgicon
          name="nuxt"
          width="60"
          color="#fffff"
          class="
            fill-current
            hover:text-orange hover:-translate-y-2
            transform
            duration-500
          "
        ></svgicon>
      </a>
      <a href="https://ionicframework.com/" target="_blank">
        <svgicon
          name="ionic"
          width="60"
          color="#fffff"
          class="
            fill-current
            hover:text-orange hover:-translate-y-2
            transform
            duration-500
          "
        ></svgicon>
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <svgicon
          name="typescript"
          width="60"
          color="#fffff"
          class="
            fill-current
            hover:text-orange hover:-translate-y-2
            transform
            duration-500
          "
        ></svgicon>
      </a>
      <a href="https://laravel.com/" target="_blank">
        <svgicon
          name="laravel"
          width="60"
          color="#fffff"
          class="
            fill-current
            hover:text-orange hover:-translate-y-2
            transform
            duration-500
          "
        ></svgicon>
      </a>
      <a
        href="https://developer.mozilla.org/es/docs/Web/JavaScript"
        target="_blank"
      >
        <svgicon
          name="javascript"
          width="60"
          color="#fffff"
          class="
            fill-current
            hover:text-orange hover:-translate-y-2
            transform
            duration-500
          "
        ></svgicon>
      </a>
      <a href="https://www.python.org/" target="_blank">
        <svgicon
          name="python"
          width="60"
          color="#fffff"
          class="
            fill-current
            hover:text-orange hover:-translate-y-2
            transform
            duration-500
          "
        ></svgicon>
      </a>

      <a href="https://go.dev/" target="_blank">
        <svgicon
          name="golang"
          width="60"
          color="#fffff"
          class="
            fill-current
            hover:text-orange hover:-translate-y-2
            transform
            duration-500
          "
        ></svgicon>
      </a>
      <a href="https://www.rabbitmq.com/" target="_blank">
        <svgicon
          name="rabbitmq"
          width="60"
          color="#fffff"
          class="
            fill-current
            hover:text-orange hover:-translate-y-2
            transform
            duration-500
          "
        ></svgicon>
      </a>
      <a href="https://www.github.com/" target="_blank">
        <svgicon
          name="github"
          width="60"
          color="#fffff"
          class="
            fill-current
            hover:text-orange hover:-translate-y-2
            transform
            duration-500
          "
        ></svgicon>
      </a>
      <a href="https://www.github.com/" target="_blank">
        <svgicon
          name="docker"
          width="60"
          color="#fffff"
          class="
            fill-current
            hover:text-orange hover:-translate-y-2
            transform
            duration-500
          "
        ></svgicon>
      </a>
      <a href="https://www.github.com/" target="_blank">
        <svgicon
          name="nginx"
          width="60"
          color="#fffff"
          class="
            fill-current
            hover:text-orange hover:-translate-y-2
            transform
            duration-500
          "
        ></svgicon>
      </a>
      <a href="https://www.github.com/" target="_blank">
        <svgicon
          name="linux"
          width="60"
          color="#fffff"
          class="
            fill-current
            hover:text-orange hover:-translate-y-2
            transform
            duration-500
          "
        ></svgicon>
      </a>
      <a href="https://www.github.com/" target="_blank">
        <svgicon
          name="jira"
          width="60"
          color="#fffff"
          class="
            fill-current
            hover:text-orange hover:-translate-y-2
            transform
            duration-500
          "
        ></svgicon>
      </a>
      <a href="https://www.github.com/" target="_blank">
        <svgicon
          name="git"
          width="60"
          color="#fffff"
          class="
            fill-current
            hover:text-orange hover:-translate-y-2
            transform
            duration-500
          "
        ></svgicon>
      </a>
      <a href="https://www.github.com/" target="_blank">
        <svgicon
          name="digitalocean"
          width="60"
          color="#fffff"
          class="
            fill-current
            hover:text-orange hover:-translate-y-2
            transform
            duration-500
          "
        ></svgicon>
      </a>
      <a href="https://www.github.com/" target="_blank">
        <svgicon
          name="aws"
          width="60"
          color="#fffff"
          class="
            fill-current
            hover:text-orange hover:-translate-y-2
            transform
            duration-500
          "
        ></svgicon>
      </a>
      <a href="https://www.github.com/" target="_blank">
        <svgicon
          name="django"
          width="60"
          color="#fffff"
          class="
            fill-current
            hover:text-orange hover:-translate-y-2
            transform
            duration-500
          "
        ></svgicon>
      </a>
      <a href="https://www.github.com/" target="_blank">
        <svgicon
          name="node"
          width="60"
          color="#fffff"
          class="
            fill-current
            hover:text-orange hover:-translate-y-2
            transform
            duration-500
          "
        ></svgicon>
      </a>
      <a href="https://www.github.com/" target="_blank">
        <svgicon
          name="cloudflare"
          width="60"
          color="#fffff"
          class="
            fill-current
            hover:text-orange hover:-translate-y-2
            transform
            duration-500
          "
        ></svgicon>
      </a>
      <a href="https://www.github.com/" target="_blank">
        <svgicon
          name="odoo"
          width="60"
          color="#fffff"
          class="
            fill-current
            hover:text-orange hover:-translate-y-2
            transform
            duration-500
          "
        ></svgicon>
      </a>
    </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.enterprise-section {
  .infinite-enterprise {
    margin-top: 108px;
    margin-bottom: 108px;
  }
}

body{
  font-family: Airbnb Cereal App,Georgia,Cambria,Times New Roman,Times,serif;
}
</style>

<script>
export default {
  data(){
    return {
      citix_images:[
          require('@/assets/img/corporativos/don-jacobo.png'),
          require('@/assets/img/corporativos/nevada.png'),
          require('@/assets/img/corporativos/pinche-perro.png'),
          require('@/assets/img/corporativos/brownies-broche.png'),
          require('@/assets/img/corporativos/para-tu-rincon.png'),
          require('@/assets/img/corporativos/jarris.png'),
      ],
      shf_images:[
          require('@/assets/img/corporativos/copower.png'),
          require('@/assets/img/corporativos/cts.png'),
          require('@/assets/img/corporativos/proymelec.jpeg'),
          require('@/assets/img/corporativos/elektra.jpeg')
      ],
    }
  }
}
</script>
