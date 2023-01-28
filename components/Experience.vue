<template>
  <div>
    <div class="container">
      <h1 class="font-bold text-2xl text-orange text-center">Experiencia</h1>
      <div class="row">
        <div class="col-md-12 hidden md:grid">
          <ul class="timeline">
            <li class="timeline-item">
              <div class="timeline-badge"><i class="glyphicon glyphicon-off"></i></div>
              <div class="timeline-mobile">
                <div class="timeline-heading">
                  <h4 class="timeline-title text-orange">Desarrollador Frontend</h4>
                  <p>
                    <small style="color: #939393">Hace 2 años</small>
                  </p>
                </div>
                <div class="timeline-body">
                  <p>
                    JavaScript, Angular 6 a 11, Soporte en más 6 proyectos creados en
                    Diseño e implementación Angular, Vue3, Nuxtjs, Pixel perfect, Atomic
                    Design.
                  </p>
                </div>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-badge"><i class="glyphicon glyphicon-check"></i></div>
              <div class="timeline-mobile">
                <div class="timeline-heading">
                  <h4 class="timeline-title text-orange">Desarrollador Backend</h4>
                  <p>
                    <small style="color: #939393">Hace 1.5 años</small>
                  </p>
                </div>
                <div class="timeline-body">
                  <p>
                    Diseño el flujo y arquitectura de microservicios en entornos reales,
                    desarrollo microservicios con las siguiente herramientas: Go Lang,
                    Django, Docker, Traefik, escalado de AWS, Rabbitmq, Odoo ERP, Grafana,
                    CI, CD. Uso de github actions para la gestión de acciones en los
                    servidores para despliegue en producción. Apoyo a los desarrolladores
                    en las áreas de Angular, Python,Typescript, vanilla JavaScript, Linux
                    y Docker.
                  </p>
                </div>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-badge"><i class="glyphicon glyphicon-check"></i></div>
              <div class="timeline-mobile">
                <div class="timeline-heading">
                  <h4 class="timeline-title text-orange">
                    Desarrollador FullStack (actualmente)
                  </h4>
                  <p>
                    <small style="color: #939393">Hace 1 año</small>
                  </p>
                </div>
                <div class="timeline-body">
                  <p>
                    Doy charlas técnicas a mis compañeros además de tener aprendizaje
                    continuo para mejorar el área.Hago parte del equipo Marketplace en
                    Dafiti, Cuento con Experiencia en los siguientes frameworks o
                    lenguajes: Go lang, PHP zend. Manejo las siguientes herramientas:
                    Docker, Kubernetes, Git, Scrum, Kanban, SQL, API REST, Kibana y
                    RabbitMQ.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- EXPERIENCE -->
        <ul class="md:grid md:hidden">
          <div class="timeline-mobile">
            <div class="timeline-heading">
              <h4 class="timeline-title text-orange">Desarrollador Frontend</h4>
              <p>
                <small style="color: #939393">Hace 2 años</small>
              </p>
            </div>
            <div class="timeline-body">
              <p>
                JavaScript, Angular 6 a 11, Soporte en más 6 proyectos creados en Diseño e
                implementación Angular, Vue3, Nuxtjs, Pixel perfect, Atomic Design.
              </p>
            </div>
          </div>
          <div class="timeline-mobile">
            <div class="timeline-heading">
              <h4 class="timeline-title text-orange">Desarrollador Backend</h4>
              <p>
                <small style="color: #939393">Hace 1.5 años</small>
              </p>
            </div>
            <div class="timeline-body">
              <p>
                Diseño el flujo y arquitectura de microservicios en entornos reales,
                desarrollo microservicios con las siguiente herramientas: Go Lang, Django,
                Docker, Traefik, escalado de AWS, Rabbitmq, Odoo ERP, Grafana, CI, CD. Uso
                de github actions para la gestión de acciones en los servidores para
                despliegue en producción. Apoyo a los desarrolladores en las áreas de
                Angular, Python,Typescript, vanilla JavaScript, Linux y Docker.
              </p>
            </div>
          </div>
          <div class="timeline-mobile">
            <div class="timeline-heading">
              <h4 class="timeline-title text-orange">
                Desarrollador FullStack (actualmente)
              </h4>
              <p>
                <small style="color: #939393">Hace 1 año</small>
              </p>
            </div>
            <div class="timeline-body">
              <p>
                Doy charlas técnicas a mis compañeros además de tener aprendizaje continuo
                para mejorar el área.Hago parte del equipo Marketplace en Dafiti, Cuento
                con Experiencia en los siguientes frameworks o lenguajes: Go lang, PHP
                zend. Manejo las siguientes herramientas: Docker, Kubernetes, Git, Scrum,
                Kanban, SQL, API REST, Kibana y RabbitMQ.
              </p>
            </div>
          </div>
        </ul>
        <h1 class="flex justify-center text-white m-10">La historia continua...</h1>
      </div>
    </div>
  </div>
</template>

<style lang="less">
/* Timeline */
.timeline {
  list-style: none;
  padding: 20px;
  position: relative;
  &:before {
    top: 40px;
    bottom: 0;
    position: absolute;
    content: " ";
    width: 3px;
    background-color: #eeeeee;
    left: 50%;
    margin-left: -1.5px;
  }

  .timeline-item {
    margin-bottom: 20px;
    position: relative;
    &:before,
    &:after {
      content: "";
      display: table;
    }
    &:after {
      clear: both;
    }
    .timeline-badge {
      color: #fff;
      width: 54px;
      height: 54px;
      line-height: 52px;
      font-size: 22px;
      text-align: center;
      position: absolute;
      top: 18px;
      left: 50%;
      margin-left: -25px;
      background-color: #303030;
      border: 3px solid #9f9f9f;
      z-index: 100;
      border-top-right-radius: 50%;
      border-top-left-radius: 50%;
      border-bottom-right-radius: 50%;
      border-bottom-left-radius: 50%;
      i,
      .fa,
      .glyphicon {
        top: 2px;
        left: 0px;
      }
      &.primary {
        background-color: #eee;
      }
      &.info {
        background-color: #0333;
      }
      &.success {
        background-color: #222;
      }
      &.warning {
        background-color: #222;
      }
      &.danger {
        background-color: #222;
      }
    }
    .timeline-mobile {
      position: relative;
      width: 46%;
      float: left;
      right: 16px;
      border: 1px solid #333;
      border-radius: 1rem;
      background: none;
      border-radius: 2px;
      padding: 20px;
      -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
      &:before {
        position: absolute;
        top: 26px;
        right: -16px;
        display: inline-block;
        border-top: 16px solid transparent;
        border-left: 16px solid #333;
        border-right: 0 solid #333;
        border-bottom: 16px solid transparent;
        content: " ";
      }
      .timeline-title {
        margin-top: 0;
        // color: white;
      }
      .timeline-body > p,
      .timeline-body > ul {
        color: white;
        margin-bottom: 0;
      }
      .timeline-body > p + p {
        margin-top: 5px;
        color: white;
      }
    }
  }
  .timeline-item:last-child {
    &:nth-child(even) {
      float: right;
    }
  }
  .timeline-item:nth-child(even) {
    .timeline-mobile {
      float: right;
      left: 16px;
      &:before {
        border-left-width: 0;
        border-right-width: 14px;
        left: -14px;
        right: auto;
      }
    }
  }
}
.timeline-horizontal:extend(.timeline) {
  list-style: none;
  position: relative;
  padding: 20px 0px 20px 0px;
  display: inline-block;
  &:before {
    height: 3px;
    top: auto;
    bottom: 26px;
    left: 56px;
    right: 0;
    width: 100%;
    margin-bottom: 20px;
  }
  .timeline-item {
    display: table-cell;
    height: 280px;
    width: 20%;
    min-width: 320px;
    float: none !important;
    padding-left: 0px;
    padding-right: 20px;
    margin: 0 auto;
    vertical-align: bottom;
    .timeline-mobile {
      top: auto;
      bottom: 64px;
      display: inline-block;
      float: none !important;
      left: 0 !important;
      right: 0 !important;
      width: 100%;
      margin-bottom: 20px;
      &:before {
        top: auto;
        bottom: -16px;
        left: 28px !important;
        right: auto;
        border-right: 16px solid transparent !important;
        border-top: 16px solid #333 !important;
        border-bottom: 0 solid #333 !important;
        border-left: 16px solid transparent !important;
      }
    }
    &:before,
    &:after {
      display: none;
    }
    .timeline-badge {
      top: auto;
      bottom: 0px;
      left: 43px;
    }
  }
}
.timeline-mobile {
  background: #1e1e1e;
  border-radius: 1rem;
  margin: 1rem;
  padding: 1rem;
  color: white;
}
</style>
