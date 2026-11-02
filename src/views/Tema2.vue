<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Presupuesto: componentes, presentación y recomendaciones

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        img(src='@/assets/curso/temas/t2/img01.png', alt='')
    p La elaboración del presupuesto constituye una etapa fundamental en la planificación de los estudios de caudal ambiental, debido a que permite identificar los recursos económicos necesarios para desarrollar las actividades previstas y garantizar el cumplimiento de los objetivos establecidos. Para su formulación, es importante reconocer los componentes que conforman los costos, definir una estructura clara para su presentación y aplicar criterios que favorezcan la precisión de las estimaciones y el uso eficiente de los recursos. En este apartado se presentan los aspectos esenciales para estructurar, presentar y revisar un presupuesto acorde con las necesidades técnicas, operativas y financieras del estudio.

    separador
    #t_2_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.1 Concepto de presupuesto

    .row.justify-content-center.mb-3(data-aos="fade-left")
      .col-lg-5.mb-3.p-0.col-10.col-md-8
        img(src='@/assets/curso/temas/t2/img02.png', alt='')
      .col-lg-7
        .row.justify-content-center
          .col-lg-2.mb-3.col-4.col-md-3
            img(src='@/assets/curso/temas/t2/img03.svg', alt='')
          .col-lg-10
            p El presupuesto es una herramienta de planificación financiera que permite estimar los recursos económicos necesarios para desarrollar un estudio técnico de caudal ambiental. Su elaboración comprende la identificación y cuantificación de los costos asociados al personal profesional y técnico, los equipos, las actividades de campo, el procesamiento y análisis de la información, la elaboración de informes y los demás recursos requeridos para alcanzar los objetivos del proyecto. Asimismo, constituye un instrumento para la toma de decisiones, ya que facilita la evaluación de la viabilidad económica del estudio, la distribución eficiente de los recursos y el control de los gastos durante su ejecución (PMI, 2021).
          p En los estudios de caudal ambiental, el presupuesto debe formularse de manera articulada con el plan de trabajo, el cronograma de actividades y la metodología seleccionada. Para ello, es necesario considerar las características de la cuenca hidrográfica, la extensión del área de estudio, la disponibilidad y calidad de la información existente, los requerimientos de trabajo de campo, las necesidades de procesamiento de datos y el nivel de detalle exigido por la autoridad ambiental competente. Estos aspectos permiten establecer una estimación de costos coherente con el alcance técnico del estudio y con las condiciones necesarias para su desarrollo (IDEAM & MADS, 2017).

    separador
    #t_2_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.2 Componentes del presupuesto

    p El presupuesto de un estudio de caudal ambiental comprende los costos directos e indirectos asociados con su planificación, ejecución y entrega. Su identificación y estimación detallada permiten anticipar las necesidades financieras, optimizar la asignación de los recursos y reducir el riesgo de sobrecostos durante el desarrollo del proyecto.

    .titulo-sexto.color-secundario(data-aos='fade-right')
      h5 Figura 2. 
      span Información de costos para estudio de caudal ambiental 

    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-left")
      .col-lg-8
        img(src='@/assets/curso/temas/t2/img04.svg', alt='')

    .row.justify-content-start.mb-0(data-aos="zoom-in-left")
        .col-sm-12.col-lg-9
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t3/ico.svg")
            h3.bg02.py-1.w-card-text Costos de personal


    .fondo01.mb-0.p-lg-5.p-lg-5.p-4.py-2(data-aos="zoom-in-left").mb-2
      .row.justify-content-center.align-items-center
        .col-lg-8.mb-3 
          .row.justify-content-center
            .col-lg-2.mb-3.col-4.col-md-3
              img(src='@/assets/curso/temas/t2/img06.svg', alt='')
            .col-lg-10
              p Los costos de personal corresponden a los recursos económicos destinados a cubrir los honorarios, salarios y demás pagos asociados con la participación del equipo profesional, técnico y auxiliar responsable de ejecutar el estudio de caudal ambiental. Debido al carácter interdisciplinario de este tipo de estudios, este componente puede representar una proporción significativa del presupuesto total, en función del alcance del proyecto, la metodología seleccionada y el tiempo requerido para desarrollar las actividades.
            p El equipo de trabajo puede incluir profesionales en hidrología, ingeniería hidráulica, ingeniería ambiental, biología, ecología, geología, geomorfología, sistemas de información geográfica, topografía, estadística y ciencias sociales, según las necesidades del estudio. Asimismo, puede requerirse personal técnico para las mediciones de campo, auxiliares para las campañas de muestreo y profesionales encargados de la coordinación y gestión administrativa del proyecto.
            p Para estimar estos costos, se deben considerar el perfil requerido, la experiencia, el nivel de responsabilidad, la tarifa u honorario correspondiente, el tiempo de dedicación y la duración de las actividades asignadas. La dedicación puede expresarse en horas, días, semanas o meses, de acuerdo con la naturaleza del trabajo y la estructura del presupuesto. 
            p Una forma básica de calcular este componente es la siguiente:
        .col-lg-4.col-md-6.col-11
          img(src="@/assets/curso/temas/t2/img05.png")


    .bloque-texto-g.bg5.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img07.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[b Costo de personal = tarifa por unidad de tiempo × tiempo de dedicación]
          br
          br
          | La estimación debe ser coherente con el cronograma de actividades y evitar la duplicación de tiempos o la asignación de recursos a tareas que se desarrollen simultáneamente sin justificación. Por ejemplo, el especialista en hidráulica puede concentrar su participación en la caracterización de las condiciones del cauce y la modelación hidráulica, mientras que el profesional en biología o ecología puede tener una mayor dedicación durante las campañas de caracterización de los ecosistemas acuáticos y el análisis de su respuesta frente a las variaciones del régimen de caudales. Esta distribución permite asignar los recursos humanos de manera eficiente y mantener la correspondencia entre las necesidades técnicas y los costos proyectados.   

    img(src='@/assets/curso/temas/t2/podcast.svg', alt='')(data-aos="fade-left")
    .row.justify-content-center.g-0(data-aos="fade-right").mb-4
      .col-lg-12
        .tarjeta.clr--pink.p-4.rounded-0.h-100.color-primario
          .tarjeta.bg-white.p-4
            TarjetaAudio.color-acento-botones.mb-2.p-3(
            texto="Pódcast: Equipos y materiales "
            :audio="require_src('@/assets/curso/temas/t1/podcast.svg')"
        )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.mb-0 ¡Explore el pódcast sobre #[b equipos y materiales] para los estudios de caudales ambientales y descubra cómo contribuyen a la recolección de datos confiables y al desarrollo de estudios eficientes!

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-9
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t3/ico.svg")
            h3.bg02.py-1.w-card-text Trabajo de campo

    .row.justify-content-center.mb-3(data-aos="fade-left")
      .col-lg-5.mb-3.p-0.col-10
        img(src='@/assets/curso/temas/t2/img08.png', alt='')
      .col-lg-7
        .row.justify-content-center
          .col-lg-2.mb-3.col-4.col-md-3
            img(src='@/assets/curso/temas/t2/img09.svg', alt='')
          .col-lg-10
            p Las actividades de campo permiten obtener información primaria sobre las condiciones hidrológicas, hidráulicas, geomorfológicas, ecológicas y sociales del área de estudio. Por esta razón, su planificación presupuestal debe contemplar los recursos logísticos, operativos y humanos necesarios para desarrollar las mediciones, los muestreos y las observaciones previstas en el plan de trabajo.
          p Este componente incluye los gastos de desplazamiento, alquiler de vehículos, combustible, peajes, transporte fluvial, alojamiento y alimentación del personal. En áreas de difícil acceso, también puede ser necesario disponer de vehículos especializados, embarcaciones, guías locales o apoyo logístico adicional, según las características del territorio y las condiciones de seguridad.

    .bloque-texto-g.bloque-texto-g--inverso.bg1.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El costo de las campañas depende del número de jornadas programadas, la cantidad de profesionales participantes, las distancias que deben recorrerse, las condiciones de accesibilidad y los requerimientos de muestreo. Asimismo, es necesario considerar la frecuencia de las visitas y la necesidad de realizar mediciones en diferentes periodos hidrológicos para representar adecuadamente la variabilidad del régimen de caudales. En los estudios de caudal ambiental, la estrategia de campo puede incluir campañas durante periodos de aguas bajas y aguas altas, así como en otras condiciones hidrológicas relevantes para los objetivos del estudio. Por consiguiente, el presupuesto debe guardar correspondencia con la metodología seleccionada, el diseño de muestreo y el cronograma de actividades.
          br

    p La seguridad del personal también debe contemplarse en la estimación de los costos. Dependiendo de los riesgos identificados en el área de estudio, pueden requerirse seguros, equipos de comunicación, botiquines, chalecos salvavidas y otros elementos de protección. La inclusión de estos recursos contribuye a prevenir incidentes y a garantizar condiciones adecuadas para el desarrollo de las actividades.

    .row.justify-content-start.mb-0(data-aos="zoom-in-left")
        .col-sm-12.col-lg-9
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t3/ico.svg")
            h3.bg02.py-1.w-card-text Procesamiento y análisis de información

    .fondo01.mb-0.p-lg-5.p-4.py-2(data-aos="zoom-in-left").mb-2
      .row.justify-content-center.align-items-center
        .col-lg-8.mb-3 
          .row.justify-content-center
            .col-lg-2.mb-3.col-4.col-md-3
              img(src='@/assets/curso/temas/t2/img06.svg', alt='')
            .col-lg-10
              p Una vez recopilada la información primaria y secundaria, es necesario desarrollar actividades de organización, depuración, validación, procesamiento e interpretación de los datos. Este componente comprende los recursos humanos, tecnológicos y operativos requeridos para transformar la información disponible en resultados técnicamente sustentados que permitan evaluar las condiciones del régimen de caudales y su relación con el funcionamiento del ecosistema.
            p Entre las actividades de análisis hidrológico se encuentran la revisión de la calidad y consistencia de las series de datos, el análisis estadístico, la construcción de curvas de duración de caudales y la evaluación de indicadores de alteración del régimen hidrológico. Según el alcance del estudio, también puede requerirse la modelación hidrológica para estimar caudales y evaluar diferentes escenarios.
            p En el componente hidráulico pueden desarrollarse modelos que permitan analizar variables como la profundidad, la velocidad y la distribución espacial del flujo bajo distintos escenarios de caudal. Por su parte, el análisis ecológico puede comprender la organización de bases de datos biológicas, el cálculo de índices ecológicos y la evaluación de las relaciones entre las condiciones del flujo y la disponibilidad de hábitat para las especies acuáticas.
            p Asimismo, pueden incluirse actividades de elaboración de cartografía temática, procesamiento de imágenes obtenidas mediante drones, análisis de información geográfica e integración de resultados provenientes de diferentes disciplinas.
        .col-lg-4.col-md-6.col-11
          img(src="@/assets/curso/temas/t2/img11.png")

    .row.justify-content-center.mb-3.bg6.g-0(data-aos="fade-left")
      .col-lg-6.p-0
        img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t2/img12.png', alt='')
      .col-lg-6
        .row.mb-0.p-4
          .col-lg-12
            p.mb-0 Los costos de este componente dependen del volumen y la calidad de los datos disponibles, la complejidad de los análisis, las herramientas empleadas y el nivel de detalle requerido. En general, los enfoques que integran información hidrológica, hidráulica, ecológica y social pueden demandar mayores esfuerzos de procesamiento y coordinación interdisciplinaria que aquellos basados exclusivamente en el análisis hidrológico. Por ello, es importante definir previamente los procedimientos de análisis y los recursos necesarios para garantizar la calidad y trazabilidad de los resultados.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-9
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t3/ico.svg")
            h3.bg2.py-1.w-card-text #[em Software] y licencias

    .row.justify-content-center.mb-3(data-aos="fade-left")
      .col-lg-5.mb-3.p-0.col-10
        img(src='@/assets/curso/temas/t2/img13.png', alt='')
      .col-lg-7
        .row.justify-content-center
          .col-lg-2.mb-3.col-4.col-md-3
            img(src='@/assets/curso/temas/t2/img14.svg', alt='')
          .col-lg-10
            p Las herramientas digitales constituyen un recurso fundamental para organizar, procesar, analizar y representar la información generada durante el estudio de caudal ambiental. Según las necesidades del proyecto, pueden utilizarse programas especializados en sistemas de información geográfica, modelación hidrológica e hidráulica, análisis estadístico y gestión de proyectos.
          p Cuando se emplean herramientas comerciales, el presupuesto debe contemplar los costos de adquisición, suscripción, renovación y mantenimiento de las licencias, cuando corresponda. También es necesario verificar su vigencia, las condiciones de uso y el número de usuarios autorizados para evitar gastos adicionales o limitaciones durante la ejecución del proyecto.

    .row.justify-content-center.align-items-center.mb-4.bg1.p-4(data-aos="fade-left")
      .col-lg-12
        p.mb-0 Como alternativa para optimizar los recursos financieros, pueden evaluarse herramientas de código abierto y de uso libre, como QGIS, R y Python, que permiten realizar análisis espaciales y estadísticos, automatizar procedimientos y procesar diferentes tipos de datos. Sin embargo, la elección del software no debe depender únicamente de su costo, sino también de su funcionalidad, compatibilidad con los formatos de información, capacidad técnica del equipo de trabajo y correspondencia con la metodología seleccionada.

    p Por lo tanto, la selección de las herramientas digitales debe realizarse durante la etapa de planificación, con el propósito de identificar anticipadamente las necesidades de licenciamiento, evitar gastos imprevistos y garantizar la compatibilidad entre los programas utilizados en las diferentes fases del estudio.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-9
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t3/ico.svg")
            h3.bg02.py-1.w-card-text Elaboración del informe

    p La elaboración del informe constituye una fase fundamental del estudio de caudal ambiental, debido a que permite integrar, interpretar y comunicar los resultados obtenidos durante las actividades de campo y los procesos de análisis. Su desarrollo requiere recursos humanos y tecnológicos, así como tiempo suficiente para garantizar la calidad técnica, la coherencia y la claridad de los productos finales.

    .bloque-texto-g.bloque-texto-g--inverso.bg1.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img15.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este componente comprende la redacción del documento técnico, la revisión e integración de resultados, la elaboración de mapas, tablas y figuras, la diagramación, la preparación de anexos y la organización de los soportes documentales. También incluye las actividades de verificación de datos, control de calidad y revisión interdisciplinaria necesarias para comprobar la consistencia de la información presentada.
          br
          br
          | Cuando el estudio debe entregarse a una autoridad ambiental o a una entidad contratante, pueden generarse costos adicionales relacionados con reuniones técnicas, socialización de resultados, preparación de presentaciones y atención de observaciones o solicitudes de ajuste. Aunque la entrega digital permite reducir los gastos de impresión, algunos proyectos pueden requerir ejemplares físicos, mapas impresos u otros productos específicos.

    p Para estimar adecuadamente este componente, es recomendable definir desde el inicio los productos que deben entregarse, los requisitos de presentación, los responsables de su elaboración y los tiempos destinados a la revisión y aprobación. De esta manera, se facilita la asignación de recursos y se reduce el riesgo de retrasos o costos adicionales durante el cierre del proyecto.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-9
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t3/ico.svg")
            h3.bg02.py-1.w-card-text Administración e imprevistos


    .row.justify-content-center.mb-3(data-aos="fade-left")
      .col-lg-5.mb-3.p-0.col-10.col-md-8
        img(src='@/assets/curso/temas/t2/img16.png', alt='')
      .col-lg-7
        .row.justify-content-center
          .col-lg-2.mb-3.col-4.col-md-3
            img(src='@/assets/curso/temas/t2/img17.svg', alt='')
          .col-lg-10
            p Los costos administrativos corresponden a los recursos necesarios para coordinar, gestionar y apoyar la ejecución del estudio de caudal ambiental. Pueden incluir la coordinación administrativa, la gestión financiera, las comunicaciones, los servicios de oficina y otros gastos generales relacionados con el funcionamiento del proyecto. Su estimación depende de la estructura organizativa, las condiciones contractuales y el periodo de ejecución.
          p De acuerdo con las características del contrato, también pueden considerarse los costos de pólizas, seguros, impuestos y demás obligaciones aplicables. Estos conceptos deben identificarse y calcularse según las disposiciones contractuales, los requisitos legales y los criterios financieros establecidos para el proyecto, evitando incluir valores que no correspondan a su naturaleza o alcance.
          p Por otra parte, durante la ejecución pueden presentarse situaciones que generen gastos adicionales, como cambios en las condiciones hidrológicas, fallas de equipos, repetición de mediciones, dificultades de acceso al área de estudio o requerimientos técnicos no identificados inicialmente. Para atender estas situaciones, puede establecerse una provisión para imprevistos, siempre que esté justificada y se ajuste a los criterios presupuestales y contractuales aplicables.
      p La provisión debe definirse a partir de la evaluación de los riesgos, la incertidumbre de las actividades y las características del proyecto. No debe utilizarse para compensar deficiencias en la planificación ni para incorporar gastos sin justificación técnica o administrativa. Su finalidad es facilitar una respuesta oportuna ante situaciones imprevistas que puedan afectar el desarrollo del estudio.

    separador
    #t_2_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.3 Presentación del presupuesto

    p El presupuesto debe presentarse de manera clara, organizada y verificable, permitiendo identificar cada uno de los conceptos que integran el costo total del estudio. Generalmente se organiza en una tabla que incluya la actividad, el recurso requerido, la cantidad, el valor unitario y el costo total.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 3.
      span Ejemplo simplificado de presupuesto para un estudio de caudal ambiental
    .tabla-a.color-acento-contenido(data-aos="zoom-in-left").mb-4
      table
        thead
          tr
            th.bg4.text-izq Concepto
            th.bg4.text-izq Unidad
            th.bg4.text-izq Cantidad
            th.bg4.text-izq Valor unitario (COP)
            th.bg4.text-izq Valor total (COP)
        tbody
          tr.bg3
            td #[b Director del proyecto]
            td.text-center Día
            td.text-center 20
            td.text-center $900.000
            td.text-center $18.000.000
          tr
            td #[b Hidrólogo]
            td.text-center Día
            td.text-center 25
            td.text-center $700.000
            td.text-center $17.500.000
          tr.bg3
            td #[b Profesional en SIG]
            td.text-center Día
            td.text-center 15
            td.text-center $550.000
            td.text-center $8.250.000
          tr
            td #[b Campañas de campo]
            td.text-center Jornada
            td.text-center 6
            td.text-center $2.000.000
            td.text-center $12.000.000
          tr.bg3
            td #[b Transporte y viáticos]
            td.text-center Global
            td.text-center 1
            td.text-center $8.000.000
            td.text-center $8.000.000
          tr
            td #[b Procesamiento de información]
            td.text-center Global
            td.text-center 1
            td.text-center $10.000.000
            td.text-center $10.000.000
          tr.bg3
            td #[b Elaboración del informe]
            td.text-center Global
            td.text-center 1
            td.text-center $5.000.000
            td.text-center $5.000.000
          tr
            td #[b Total estimado]
            td.text-center -
            td.text-center -
            td.text-center -
            td.text-center #[b $78.750.000]
    p La presentación del presupuesto debe estar alineada con el cronograma de actividades y permitir identificar la distribución de los recursos financieros a lo largo de las distintas fases del estudio.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-9
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t3/ico.svg")
            h3.bg2.py-1.w-card-text Recomendaciones para la elaboración del presupuesto

    p La elaboración del presupuesto de un estudio de caudal ambiental requiere una planificación detallada que permita estimar los recursos económicos necesarios y mantener la coherencia entre los objetivos, las actividades y los productos esperados. Para mejorar la precisión de las estimaciones y favorecer el uso eficiente de los recursos, se recomienda tener en cuenta los siguientes aspectos:


    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-left")
      .col-lg-6.mb-3.col-10.col-md-8 
        img(src='@/assets/curso/temas/t2/img18.png', alt='')
      .col-lg-6
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Definir el alcance y la metodología del estudio")
            .col-md-12.mb-4.mb-md-0
              br
              p.mb-0 Elaborar el presupuesto una vez establecidos los objetivos, las actividades, los requerimientos técnicos y los productos que se deben entregar.

          .row(numero="2" titulo="Consultar precios de mercado actualizados")
            .col-md-12.mb-4.mb-md-0
              br
              p.mb-0 Utilizar tarifas y cotizaciones vigentes para estimar los costos del personal, los equipos, los materiales, el transporte y los demás servicios requeridos.

          .row(numero="3" titulo="Estimar los tiempos de ejecución")
            .col-md-12.mb-4.mb-md-0
              br
              p.mb-0 Calcular la dedicación del equipo de trabajo y la duración de las actividades de campo, el procesamiento de la información, el análisis de resultados y la elaboración del informe.

          .row(numero="4" titulo="Incluir los costos operativos y logísticos")
            .col-md-12.mb-4.mb-md-0
              br
              p.mb-0 Considerar los gastos de desplazamiento, alojamiento, alimentación, alquiler y mantenimiento de equipos, materiales, comunicaciones y elementos de protección personal, según las necesidades del proyecto.

          .row(numero="5" titulo="Prever recursos para imprevistos")
            .col-md-12.mb-4.mb-md-0
              br
              p.mb-0 Establecer una provisión justificada para atender situaciones no previstas que puedan generar costos adicionales, de acuerdo con los criterios presupuestales y contractuales aplicables.

          .row(numero="6" titulo="Verificar la coherencia de la planificación")
            .col-md-12.mb-4.mb-md-0
              br
              p.mb-0 Comprobar que los recursos asignados, las cantidades estimadas y los costos presupuestados correspondan con el cronograma y el plan de trabajo.

          .row(numero="7" titulo="Documentar los criterios de estimación")
            .col-md-12.mb-4.mb-md-0
              br
              p.mb-0 Registrar las fuentes de precios, las cotizaciones, los supuestos, las unidades de medida y los procedimientos utilizados para calcular los costos, de manera que el presupuesto pueda verificarse, actualizarse y justificarse.

          .row(numero="8" titulo="Realizar seguimiento y actualización")
            .col-md-12.mb-4.mb-md-0
              br
              p.mb-0 Revisar periódicamente la ejecución presupuestal y comparar los costos reales con los valores estimados para identificar desviaciones y adoptar medidas correctivas oportunamente.    
   
    p Una adecuada formulación del presupuesto permite optimizar la asignación de los recursos, anticipar necesidades financieras, reducir el riesgo de sobrecostos y facilitar el seguimiento económico del proyecto. De esta manera, contribuye al desarrollo ordenado de las actividades y al cumplimiento de los objetivos técnicos del estudio de caudal ambiental.



















</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
