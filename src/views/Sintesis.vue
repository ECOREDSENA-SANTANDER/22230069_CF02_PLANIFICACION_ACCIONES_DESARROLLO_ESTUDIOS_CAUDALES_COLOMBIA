<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p En este componente formativo se abordaron los aspectos fundamentales para la planificación de estudios de caudal ambiental, considerando la organización de actividades técnicas, el uso de herramientas digitales y la elaboración de cronogramas para orientar el desarrollo del estudio.
    p Asimismo, se destacó la importancia de identificar los recursos necesarios y estructurar un presupuesto acorde con el alcance, la metodología y los requerimientos técnicos. Estos elementos permiten organizar las actividades y optimizar los recursos disponibles, favoreciendo el desarrollo eficiente y ordenado de los estudios de caudal ambiental.

    .row.justify-content-center
      .col-lg-11.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama conceptual sobre la proyección de recursos para el estudio de caudales ambientales, que incluye la planeación del estudio técnico, el plan de trabajo, las etapas del estudio y las herramientas digitales para su planificación y ejecución. También presenta los componentes del presupuesto, su concepto y las recomendaciones para su elaboración y presentación.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
