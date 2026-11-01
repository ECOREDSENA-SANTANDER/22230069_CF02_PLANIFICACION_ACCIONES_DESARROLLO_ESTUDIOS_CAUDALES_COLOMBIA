<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-3(data-aos="fade-left")
      .col-lg-5.mb-3.p-0.col-10
        img(src='@/assets/curso/temas/intro/img01.png', alt='')
      .col-lg-7
        .row.justify-content-center
          .col-lg-2.mb-3.col-4.col-md-3
            img(src='@/assets/curso/temas/intro/img02.svg', alt='')
          .col-lg-10
            p La planificación de estudios técnicos constituye una etapa esencial para garantizar la calidad y confiabilidad de los resultados en proyectos relacionados con la gestión del recurso hídrico. En el caso de los estudios de caudal ambiental, esta fase permite definir el alcance, organizar las actividades, asignar responsabilidades y estimar los recursos necesarios para su ejecución. Una adecuada planificación favorece el cumplimiento de los objetivos técnicos, optimiza el uso de los recursos disponibles y disminuye los riesgos asociados al desarrollo del proyecto (Project Management Institute [PMI], 2021).
          p Los estudios de caudal ambiental integran información hidrológica, hidráulica, ecológica y socioeconómica para establecer el régimen de flujo que permita conservar la funcionalidad de los ecosistemas acuáticos y satisfacer las necesidades de los diferentes usuarios del agua. Debido a su carácter interdisciplinario, estos estudios requieren una organización rigurosa que contemple actividades de gabinete, campañas de campo, procesamiento de información y elaboración de productos técnicos, siguiendo metodologías reconocidas y criterios científicos (IDEAM & MADS, 2017).

    .bloque-texto-g.bloque-texto-g--inverso.bg1.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/intro/img03.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En Colombia, la planeación de estos estudios se desarrolla conforme a los lineamientos establecidos por el Ministerio de Ambiente y Desarrollo Sostenible, el Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM) y la Autoridad Nacional de Licencias Ambientales (ANLA). Estas entidades han definido metodologías y orientaciones técnicas que promueven la estimación del caudal ambiental mediante un enfoque integral, basado en el régimen natural de flujo y la conservación de los ecosistemas acuáticos, como soporte para la gestión sostenible del recurso hídrico (ANLA, 2013; IDEAM & MADS, 2017).
          br

    p Este componente formativo proporciona los conocimientos necesarios para proyectar las actividades y los recursos requeridos en la ejecución de estudios de caudal ambiental, de acuerdo con la metodología seleccionada. Asimismo, desarrolla los fundamentos para la elaboración de planes de trabajo, cronogramas, presupuestos y estrategias de seguimiento, fortaleciendo las competencias del aprendiz para participar en procesos de planificación técnica bajo criterios de eficiencia, calidad y cumplimiento de la normativa ambiental vigente (ISO, 2020; PMI, 2021).



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
