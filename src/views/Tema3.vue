<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Caso de estudio para identificar las actividades y los recursos requeridos en un estudio de caudal ambiental

    .bloque-texto-g.bloque-texto-g--inverso.bg1.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La planificación de un estudio de caudal ambiental requiere analizar las características del área de estudio, los objetivos del proyecto, la información disponible y los requerimientos técnicos establecidos por la autoridad ambiental competente. A partir de este análisis, es posible definir las actividades necesarias, identificar los vacíos de información, determinar los recursos humanos, técnicos, tecnológicos y logísticos, y establecer una secuencia de trabajo coherente con la metodología seleccionada.
          br

    p Los siguientes ejercicios de interpretación permiten aplicar estos criterios a situaciones propias del contexto ambiental, con el propósito de fortalecer la capacidad para planificar estudios de caudal ambiental y relacionar las necesidades técnicas con los recursos requeridos para su ejecución.

    .row.justify-content-start.mb-0(data-aos="zoom-in-left")
        .col-sm-12.col-lg-9
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t3/ico.svg")
            h3.bg2.py-1.w-card-text Ejercicio de interpretación: ¿Qué se necesita para realizar el estudio?
    
    .fondo01.mb-0.p-lg-5.p-5.py-2(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center
        .col-lg-8.mb-3 
          p #[b Propósito:] identificar las actividades, la información y los recursos necesarios para desarrollar un estudio de caudal ambiental, a partir de las características del proyecto, las condiciones de la cuenca hidrográfica y los requerimientos técnicos establecidos.
          h5.mb-0 Situación planteada
          p Una consultoría ambiental debe desarrollar un estudio de caudal ambiental para un proyecto de aprovechamiento hídrico ubicado en una cuenca andina de Colombia. La autoridad ambiental competente solicita determinar el régimen de caudal ambiental mediante la integración de información hidrológica, hidráulica, ecológica y relacionada con los usos del agua.
          p Para iniciar la planificación, se dispone de información preliminar sobre los siguientes aspectos:
          ul.lista-ul--color
            li.d-flex.mb-0
              i.fas.fa-angle-right2
              | Ubicación geográfica y características físicas de la cuenca hidrográfica.
            li.d-flex.mb-0
              i.fas.fa-angle-right2
              | Régimen de precipitación y variabilidad climática de la zona.
            li.d-flex.mb-0
              i.fas.fa-angle-right2
              | Registros históricos de caudal y disponibilidad de información hidrológica.
            li.d-flex.mb-0
              i.fas.fa-angle-right2
              | Características geomorfológicas e hidráulicas del cauce.
            li.d-flex.mb-0
              i.fas.fa-angle-right2
              | Ecosistemas acuáticos y terrestres asociados al sistema fluvial.
            li.d-flex.mb-0
              i.fas.fa-angle-right2
              | Usuarios del recurso hídrico y principales usos del agua.
            li.d-flex.mb-0
              i.fas.fa-angle-right2
              | Información técnica disponible y vacíos de información identificados.
            li.d-flex.mb-0
              i.fas.fa-angle-right2
              | Metodología seleccionada para determinar el caudal ambiental.
        .col-lg-4.col-md-6.col-11
          img(src="@/assets/curso/temas/t3/img02.png")

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-9
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t3/ico.svg")
            h3.bg2.py-1.w-card-text Actividad de aprendizaje
    
    p A partir de la situación planteada, desarrolle las siguientes actividades:

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-4(data-aos="zoom-in-left")
      .row.justify-content-center(titulo="Interpretar la información disponible")
        .col-md-11.mb-4.mb-md-0
          p Analizar las características de la cuenca, las condiciones hidrológicas, los componentes ecológicos y los usos del agua, con el fin de reconocer los aspectos que deben considerarse en el estudio.
      .row.justify-content-center(titulo="Identificar las actividades requeridas")
        .col-md-11.mb-4.mb-md-0
          p Establecer las acciones técnicas, administrativas y operativas necesarias para desarrollar el estudio, desde la recopilación de información hasta la elaboración y presentación de los resultados.

      .row.justify-content-center(titulo="Determinar los requerimientos de información adicional")
        .col-md-11.mb-4.mb-md-0
          p Identificar los datos que deben recopilarse o verificarse mediante fuentes secundarias, mediciones de campo, muestreos, consultas a entidades o interacción con los usuarios del recurso hídrico.

      .row.justify-content-center(titulo="Definir los recursos necesarios")
        .col-md-11.mb-4.mb-md-0
          p Establecer los perfiles profesionales, los equipos de medición, los materiales, las herramientas digitales, el software y los recursos logísticos requeridos para ejecutar las actividades identificadas.

      .row.justify-content-center(titulo="Organizar la secuencia de trabajo")
        .col-md-11.mb-4.mb-md-0
          p Ordenar las actividades de acuerdo con sus dependencias técnicas, desde la revisión inicial de la información y la planificación del trabajo de campo hasta el procesamiento de datos, la integración de resultados y la elaboración del informe final.

      .row.justify-content-center(titulo="Relacionar las actividades con los recursos")
        .col-md-11.mb-4.mb-md-0
          p Asociar cada actividad con los recursos necesarios, el tiempo estimado de ejecución y los productos esperados, como base para la elaboración del cronograma y el presupuesto del estudio.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 4.
      span Producto: matriz de actividades y recursos requeridos para el estudio de caudal ambiental
    .tabla-a.color-acento-contenido(data-aos="zoom-in-left")
      table
        thead
          tr
            th.bg4.text-izq Actividad
            th.bg4.text-izq Información requerida
            th.bg4.text-izq Recurso humano
            th.bg4.text-izq Recursos técnicos y tecnológicos
            th.bg4.text-izq Tiempo estimado
            th.bg4.text-izq Producto esperado
        tbody
          tr.bg3
            td #[b Recopilación de información hidrológica]
            td Series históricas de caudal, registros de precipitación e información de estaciones hidrométricas.
            td Hidrólogo.
            td Bases de datos hidrológicas, hojas de cálculo y herramientas de consulta de información.
            td 5 días
            td Base de datos hidrológica organizada y documentada.
          tr
            td #[b Análisis de series hidrológicas]
            td Registros de caudales diarios y mensuales, periodos de registro y datos de precipitación disponibles.
            td Hidrólogo/
            td #[i Software] estadístico, hojas de cálculo y herramientas de análisis de datos.
            td 4 días
            td Análisis hidrológico de las series y caracterización preliminar del régimen de caudales.
          tr.bg3
            td #[b Caracterización hidráulica del cauce]
            td Secciones transversales, geometría del cauce, niveles de agua, velocidades y demás parámetros hidráulicos disponibles.
            td Ingeniero hidráulico y personal técnico de campo.
            td GPS o GNSS, equipos topográficos, correntómetro o ADCP, según los requerimientos del estudio.
            td 3 días
            td Información geométrica e hidráulica del cauce.
          tr
            td #[b Evaluación ecológica]
            td Información sobre hábitats, comunidades biológicas, vegetación ribereña y ecosistemas asociados al sistema fluvial.
            td Biólogo o ecólogo y auxiliares de campo, según las necesidades del estudio.
            td Equipos de muestreo, instrumentos de medición y materiales para el registro de información biológica.
            td 5 días
            td Diagnóstico ecológico del área de estudio.
          tr.bg3
            td #[b Integración de resultados]
            td Resultados hidrológicos, hidráulicos y ecológicos, información geográfica y datos sobre los usos del agua.
            td Equipo interdisciplinario.
            td #[i Software] SIG, hojas de cálculo y herramientas de procesamiento y visualización de datos.
            td 4 días
            td Análisis integrado de los componentes del estudio y propuesta técnica de caudal ambiental.







</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
