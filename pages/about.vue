<template>
  <div class="text-center mt-20">
    <!-- CITIX -->
    <div class="my-10">
      <a class="text-citix_gray font-bold my-10" href="https://citix.com.co/inicio">Citix Colombia - FullStack Developer</a>
      <div class="flex items-center justify-between gap-60">
      <img src="../assets/img/citix-phone.png" alt="" style="width: 20rem;">
      <div>
        <h2 class="text-citix_gray font-bold">Explicación,visión y roles.</h2>
      <p class="text-citix_text" style="font-size: .8rem;">
        Citix Colombia es una plataforma de domicilios y mensajería en Bucaramanga y el área metropolitana, Mis funciones eran de FullStack developer Angular,Laravel y Ionic. Estuve desde el inicio tanto en la planeación del proyecto, desarrollo y entrega al cliente final.
        <br />
        Citix Colombia es un sistema escalable enfocado a microservicios, igualmente se usaron tecnologías salientes como graphql,nestjs,capacitor y apollo. Las anteriores no son todas, pero da a entender la idea de que el sistema es escalable y se puede emplear en cualquier plataforma.
        </p>
      </div>
      </div>

      <div  class="flex items-center justify-between gap-60">
        <div>
          <h2 class="text-citix_gray font-bold">Proceso de crecimiento</h2>
          <p class="text-citix_text" style="font-size: .8rem;">Citix Colombia me permitió aprender nuevas tecnologías, además no casarme con un framework ni lenguaje, además de esto empleamos scrum master para el desarrollo agil (Scrums,Daily Scrum Meeting,Sprints Weeks), agradecimiento a Sebastián Manrique que hizo parte del aprendizaje y capacitación. Actualmente, me llena de satisfacción el enfoque que le dimos y su futuro.
          </p>
        </div>
          <img src="../assets/img/citix-brand.png" alt="" style="width: 20rem;">
      </div>

        <div>
          <h2 class="text-citix_gray font-bold">Impacto</h2>
          <p class="text-citix_text my-2" style="font-size: .8rem;">Citix Colombia actualmente cuenta con importantes clientes tales como</p>
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
    top: 0px;" class="text-odoo_text my-10" href="https://odoo.shf.com.co/">Odoo Developer</h2>
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

      <p class="text-citix_text" style="font-size: .8rem;">Odoo me permitió reforzar conocimientos en relaciones de base de datos, pensamiento
        modular, tratamiento de datos delicados, insercion de requerimientos del cliente, nuevo modelo de desarrollo (tickets).
      </p>
      </div>
      <img src="../assets/img/shf/shf-aprendizaje.png" alt="" style="width: 30rem;">
    </div>

    <div>
          <h2 class="text-odoo_text font-bold">Impacto</h2>
          <p class="text-citix_text my-2" style="font-size: .8rem;">Desarrolle módulos para empresas de ingeniería como</p>
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
        <a class="text-shf font-bold" href="https://qr.copower.com.co/">Copower QR - FullStack Developer</a>

      <p class="text-citix_text" style="font-size: .8rem;">
        Copower QR es una aplicación web que permite la generación de códigos QR y búsqueda del vendedor para fácil aseso a sus portafolios.
        <br />
        La aplicación se desarrolló en el framework de Nuxtjs.
      </p>
      </div>
    </div>

    <div  class="flex items-center justify-between gap-60">
        <div>
        <h2 class="text-shf font-bold">Microservicios -  Backend Developer</h2>

      <p class="text-citix_text" style="font-size: .8rem;">Cuando las aplicaciones crecen el requerimiento y consumo también, cree microservicios para funciones en específicas, sms,gateway,etc.
        <br />
        Golang,express,django,aws,docker y firebase (sms push notification). Son unas de las tecnologías que uso en el desarrollo de estos microservicios.
      </p>
      </div>
      <img src="../assets/img/microservice.png" alt="" style="width: 30rem;">
    </div>

    <div  class="flex items-center justify-around gap-60 my-10">
      <img src="../assets/img/prestafacil.png" alt="" style="width: 10rem;border-radius: 50%">
      <div>
        <a class="text-shf font-bold" href="https://play.google.com/store/apps/details?id=corp.shf.prestacobros">Creditodo / Prestafacil - FullStack Developer</a>

      <p class="text-citix_text" style="font-size: .8rem;">
        Mantenimiento de aplicaciones ya existentes. Agregue nuevas features.
        <br />
       Tecnologías: Angular,Ionic, Laravel,Django,Docker y Linux.
      </p>
      </div>
    </div>

    <div  class="flex items-center justify-around gap-60 my-10">

      <div>
        <a class="text-shf font-bold" href="https://play.google.com/store/apps/details?id=com.citix.aliados&hl=es_CO&gl=US">Citix Aliados - FullStack Developer</a>

      <p class="text-citix_text" style="font-size: .8rem;">
        Desarrolle la aplicación para el aliado de citix junto a mi equipo de trabajo. además brindo soporte al backend.
        <br />
       Tecnologías: Angular,Ionic, Laravel,Docker y Linux.
      </p>
      </div>
      <img src="../assets/img/citix.png" alt="" style="width: 10rem;border-radius: 50%">
    </div>
  </div>


  <div>
    <h1>Tecnologías que uso entre semana</h1>
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
      <a href="https://www.docker.com" target="_blank">
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
      <a href="https://www.nginx.com/" target="_blank">
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
      <a href="https://www.linux.org/" target="_blank">
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
      <a href="https://www.atlassian.com/es/software/jira" target="_blank">
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
      <a href="https://git-scm.com/" target="_blank">
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
      <a href="https://www.digitalocean.com/" target="_blank">
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
      <a href="https://aws.amazon.com/es/" target="_blank">
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
      <a href="https://www.djangoproject.com/" target="_blank">
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
      <a href="https://nodejs.org/es/" target="_blank">
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
      <a href="https://www.cloudflare.com/es-es/" target="_blank">
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
      <a href="https://www.odoo.com/" target="_blank">
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
