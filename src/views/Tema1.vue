<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Planeación del estudio técnico de caudal ambiental
        
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-1.mb-3.col-md-3.col-4
          img(src='@/assets/curso/temas/t1/img01.svg', alt='')
        .col-lg-11
          p Todo estudio técnico requiere una planificación previa que permita organizar las actividades de campo y el procesamiento de la información de manera lógica y secuencial. Este proceso facilita el cumplimiento de los objetivos propuestos, optimiza el uso de los recursos disponibles y contribuye a reducir la incertidumbre durante el desarrollo del proyecto.

      .row.justify-content-center.align-items-center.mb-3
        .col-lg-5.mb-3.col-10.col-md-8  
          img(src='@/assets/curso/temas/t1/img02.png', alt='')
        .col-lg-7 
          p En los estudios de caudal ambiental, la planeación es fundamental debido a la integración de información hidrológica, hidráulica, ecológica, geomorfológica y socioeconómica. Su adecuada recopilación y análisis requieren la participación de equipos interdisciplinarios, así como la programación de campañas de campo en diferentes periodos hidrológicos del año, con el fin de obtener información representativa de las condiciones del sistema hídrico evaluado (King et al., 2008).
          p Una planificación deficiente puede generar retrasos en la ejecución, sobrecostos, pérdida de información, duplicidad de actividades y resultados técnicamente insuficientes para sustentar procesos de licenciamiento ambiental o apoyar la toma de decisiones. Por ello, es necesario establecer desde el inicio una ruta de trabajo que articule las actividades, los responsables, los tiempos de ejecución y los recursos requeridos.
      p En este sentido, la Guía metodológica para la estimación del caudal ambiental en Colombia resalta la importancia de planificar la evaluación mediante la identificación de la información disponible, la selección de la metodología más adecuada y la determinación de los recursos necesarios para desarrollar el estudio (IDEAM & MADS, 2017). Estos elementos constituyen la base para orientar las etapas posteriores y garantizar que el estudio responda a los objetivos planteados y a las características del sistema hídrico objeto de análisis.

      separador
      #t_1_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.1. Plan de trabajo






















  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
