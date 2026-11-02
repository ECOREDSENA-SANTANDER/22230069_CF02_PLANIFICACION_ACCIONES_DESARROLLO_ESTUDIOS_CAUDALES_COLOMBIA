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


      .row.justify-content-center.mb-4.bg7.g-0
        .col-lg-5.p-0
          img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t1/img03.png', alt='')
        .col-lg-7
          .row.mb-0.p-4
            .col-lg-2.mb-3.col-4.col-md-3
              img(src='@/assets/curso/temas/t1/img04.svg', alt='')
            .col-lg-12
              p.mb-0 El plan de trabajo es un instrumento técnico y administrativo que permite organizar y orientar de manera sistemática la ejecución de un proyecto, estudio o investigación. En este documento se definen las actividades que se desarrollarán, los responsables de su ejecución, los recursos humanos, técnicos y financieros necesarios, los plazos establecidos, los mecanismos de seguimiento y los productos esperados. Su propósito es establecer una secuencia lógica de actividades que facilite la coordinación de los procesos y contribuya al cumplimiento de los objetivos propuestos (Project Management Institute [PMI], 2021).

      p En el ámbito de la gestión ambiental, el plan de trabajo facilita la organización de los equipos interdisciplinarios, la programación de las actividades de campo, el procesamiento de la información y el cumplimiento de los requerimientos técnicos y normativos aplicables. En los estudios de caudal ambiental en Colombia, su formulación debe considerar los lineamientos metodológicos de las autoridades ambientales competentes y las orientaciones técnicas del Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM) y del Ministerio de Ambiente y Desarrollo Sostenible (MADS), con el fin de orientar la recopilación, el análisis y la interpretación de la información necesaria para evaluar el comportamiento del sistema hídrico (IDEAM & MADS, 2017).

      .row.justify-content-center.align-items-center.mb-3
        .col-lg-6.mb-3 
          img(src='@/assets/curso/temas/t1/img05.svg', alt='')
        .col-lg-6.bg1.p-3
          p En particular, el plan de trabajo constituye la hoja de ruta del estudio técnico de caudal ambiental, pues articula las diferentes etapas del proceso, desde la revisión de información secundaria y la caracterización del área de estudio hasta la programación de campañas de campo, el análisis hidrológico e hidráulico, la evaluación ecológica y la elaboración del informe técnico final. La secuencia y el alcance de estas actividades deben definirse de acuerdo con los objetivos del estudio, las características del sistema hídrico y la disponibilidad de información, equipos y personal especializado. De esta manera, se favorece el desarrollo ordenado de las actividades y se optimiza el uso de los recursos disponibles (King et al., 2008).

      p Asimismo, este instrumento facilita la comunicación y la coordinación entre los actores involucrados, como consultores, entidades ambientales, comunidades locales, instituciones de investigación y empresas ejecutoras. Esta articulación es fundamental, debido a que los estudios de caudal ambiental requieren integrar conocimientos de disciplinas como la hidrología, la hidráulica, la biología, la ecología, la ingeniería ambiental, la geomática y las ciencias sociales. La definición de responsabilidades y canales de comunicación permite reducir la duplicidad de esfuerzos y favorecer la integración de los resultados obtenidos por cada equipo de trabajo (King et al., 2008).
      p Para garantizar una adecuada organización y ejecución del estudio, el plan de trabajo debe contemplar los siguientes aspectos:

      SlyderF(columnas="col-lg-6 col-xl-4").mb-4
        .tarjeta.bgtar.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t1/1.svg' alt='')
          h4.text-center Organización de las actividades
          p.text-center Establecer las etapas del estudio y su secuencia de ejecución.

        .tarjeta.bgtar.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t1/2.svg' alt='')
          h4.text-center Asignación de responsabilidades
          p.text-center Definir las funciones del personal técnico y de los demás actores involucrados.

        .tarjeta.bgtar.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t1/3.svg' alt='')
          h4.text-center Gestión de recursos
          p.text-center Determinar los recursos humanos, financieros, tecnológicos y logísticos necesarios.

        .tarjeta.bgtar.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t1/4.svg' alt='')
          h4.text-center Programación de tiempos
          p.text-center Establecer los plazos de ejecución y los hitos de seguimiento, considerando los periodos hidrológicos requeridos para las campañas de campo.

        .tarjeta.bgtar.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t1/5.svg' alt='')
          h4.text-center Gestión de riesgos
          p.text-center Identificar posibles dificultades y definir medidas para prevenirlas o reducir sus efectos.

        .tarjeta.bgtar.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t1/6.svg' alt='')
          h4.text-center Seguimiento y control
          p.text-center Establecer mecanismos para verificar el avance de las actividades y el cumplimiento de los objetivos.

        .tarjeta.bgtar.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t1/7.svg' alt='')
          h4.text-center Control de calidad y trazabilidad
          p.text-center Definir criterios para revisar, documentar y respaldar la información y los productos generados.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-9
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t3/ico.svg")
            h3.bg02.py-1.w-card-text Características de un buen plan de trabajo

      .row.justify-content-center.mb-3(data-aos="fade-left")
        .col-lg-5.mb-3.p-0.col-10
          img(src='@/assets/curso/temas/t1/img05.png', alt='')
        .col-lg-7
          .row.justify-content-center
            .col-lg-2.mb-3.col-4.col-md-3
              img(src='@/assets/curso/temas/t1/img07.svg', alt='')
            .col-lg-10
              p La calidad de un estudio técnico depende, en gran medida, de la planificación y organización de las actividades necesarias para su desarrollo. Un plan de trabajo bien estructurado permite establecer prioridades, anticipar posibles dificultades, optimizar los recursos disponibles y realizar un seguimiento sistemático del cumplimiento de los objetivos. De acuerdo con los principios de dirección de proyectos del Project Management Institute (PMI, 2021), la planificación debe facilitar la coordinación de las actividades, el control de los avances y la toma de decisiones durante la ejecución del proyecto.
            p En los estudios técnicos de caudal ambiental, el plan de trabajo debe responder a las características del sistema hídrico, los objetivos de la evaluación, la metodología seleccionada y los requerimientos de información. Para ello, debe reunir características que permitan orientar las actividades de manera organizada, asegurar su viabilidad y facilitar la integración de los componentes hidrológicos, hidráulicos, ecológicos, geomorfológicos y socioeconómicos. 
      p Entre las principales características se encuentran las siguientes:

      .tarjeta.bg8.p-4.mb-4
        SlyderA(tipo="b")
          .row
            .col-lg-6.mb-4.mb-md-0
              h5 Claridad
              p Las actividades deben describirse de manera precisa, mediante un lenguaje técnico comprensible que evite interpretaciones ambiguas. Cada actividad debe indicar qué se realizará, quién será responsable, qué recursos se requieren, en qué plazo se ejecutará y cuál será el producto esperado. Por ejemplo, la caracterización hidrológica debe especificar las fuentes de información, los parámetros por analizar y los resultados que se deben obtener.
            .col-lg-6.col-10.col-md-8
              figure
                img(src='@/assets/curso/temas/t1/1.png', alt='')
          .row
            .col-lg-6.mb-4.mb-md-0
              h5 Coherencia
              p Debe existir una relación lógica entre los objetivos del estudio, la metodología seleccionada, las actividades programadas y los resultados esperados. Las acciones deben contribuir al cumplimiento de los objetivos y mantener una secuencia técnica adecuada. En un estudio de caudal ambiental, por ejemplo, la selección de los puntos de muestreo debe responder a las necesidades de caracterización del sistema hídrico y a los requerimientos de la metodología adoptada (IDEAM & MADS, 2017).
            .col-lg-6.col-10.col-md-8
              figure
                img(src='@/assets/curso/temas/t1/2.png', alt='')

          .row
            .col-lg-6.mb-4.mb-md-0
              h5 Viabilidad
              p Las actividades deben ser técnica, económica y logísticamente realizables, considerando la disponibilidad presupuestal, el personal especializado, los equipos, la información existente, las condiciones de acceso y el tiempo requerido. También es necesario verificar que los recursos sean suficientes para desarrollar las campañas de campo y los análisis previstos, sin comprometer la calidad de los resultados.
            .col-lg-6.col-10.col-md-8
              figure
                img(src='@/assets/curso/temas/t1/3.png', alt='')

          .row
            .col-lg-6.mb-4.mb-md-0
              h5 Flexibilidad
              p El plan debe permitir ajustes cuando se presenten situaciones imprevistas, como lluvias intensas, variaciones de los niveles del río, dificultades de acceso, fallas en los equipos o retrasos en la disponibilidad de información. La flexibilidad facilita la reorganización del cronograma y de los recursos sin perder de vista los objetivos, los criterios técnicos y las condiciones de calidad establecidos.
            .col-lg-6.col-10.col-md-8
              figure
                img(src='@/assets/curso/temas/t1/4.png', alt='')

          .row
            .col-lg-6.mb-4.mb-md-0
              h5 Medibilidad
              p Las actividades deben contar con indicadores, metas o evidencias verificables que permitan determinar su nivel de cumplimiento. Estos elementos facilitan el seguimiento del cronograma, la identificación de retrasos y la implementación de acciones correctivas. Por ejemplo, se puede verificar el avance mediante el porcentaje de estaciones hidrológicas caracterizadas, el número de campañas realizadas o la proporción de informes técnicos revisados y aprobados.
            .col-lg-6.col-10.col-md-8
              figure
                img(src='@/assets/curso/temas/t1/5.png', alt='')

          .row
            .col-lg-6.mb-4.mb-md-0
              h5 Integralidad
              p El plan debe articular los componentes hidrológicos, hidráulicos, ecológicos, geomorfológicos y socioeconómicos, de acuerdo con el alcance del estudio. Esta integración permite analizar las relaciones entre el régimen de caudales, las condiciones físicas del cauce, los requerimientos ecológicos y los usos del agua. La participación interdisciplinaria contribuye a comprender el funcionamiento del ecosistema fluvial y las posibles consecuencias de las modificaciones del régimen hídrico (King et al., 1999).
            .col-lg-6.col-10.col-md-8
              figure
                img(src='@/assets/curso/temas/t1/6.png', alt='')   

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-9
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t3/ico.svg")
            h3.bg2.py-1.w-card-text Componentes del plan de trabajo para un estudio técnico de caudal ambiental

      p El plan de trabajo debe integrar los elementos técnicos, administrativos y operativos necesarios para orientar la ejecución del estudio, desde la definición de los objetivos hasta la entrega de los resultados. La siguiente tabla presenta los principales componentes, su descripción y su aplicación en los estudios de caudal ambiental.

      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-4(data-aos="zoom-in-left")
        .row.justify-content-center(titulo="Objetivo")
          .col-md-11.mb-4.mb-md-0
            p Define el propósito general y los resultados que se pretenden alcanzar con el estudio. Debe orientar las actividades hacia la estimación del caudal ambiental y la comprensión de las condiciones hidrológicas, hidráulicas y ecológicas del sistema hídrico, de acuerdo con el alcance establecido.

        .row.justify-content-center(titulo="Alcance")
          .col-md-11.mb-4.mb-md-0
            p Delimita las áreas geográficas, los periodos de análisis y los componentes temáticos que serán evaluados. Especifica los tramos fluviales, las variables de interés, los aspectos que se incluirán y las limitaciones del estudio.

        .row.justify-content-center(titulo="Actividades")
          .col-md-11.mb-4.mb-md-0
            p Describe las tareas necesarias para cumplir los objetivos, organizadas en etapas y en una secuencia lógica. Puede incluir la revisión de información secundaria, la caracterización del área, las campañas de campo, el análisis de datos, la modelación y la elaboración del informe técnico.

        .row.justify-content-center(titulo="Metodología")
          .col-md-11.mb-4.mb-md-0
            p Establece los métodos, procedimientos, protocolos y criterios técnicos que se utilizarán para desarrollar el estudio. Su selección debe responder a los objetivos, las características del sistema hídrico y la disponibilidad y calidad de la información.

        .row.justify-content-center(titulo="Responsables")
          .col-md-11.mb-4.mb-md-0
            p Identifica al personal encargado de ejecutar, coordinar y supervisar cada actividad, especificando sus funciones y responsabilidades. Puede incluir profesionales de hidrología, hidráulica, biología, ecología, ingeniería ambiental, geomática y otras disciplinas requeridas.

        .row.justify-content-center(titulo="Recursos")
          .col-md-11.mb-4.mb-md-0
            p Determina los recursos humanos, financieros, tecnológicos, materiales y logísticos necesarios. Incluye, según corresponda, equipos de medición, instrumentos de campo, programas informáticos, transporte, materiales, elementos de seguridad y presupuesto.

        .row.justify-content-center(titulo="Información requerida")
          .col-md-11.mb-4.mb-md-0
            p Identifica las fuentes de información primaria y secundaria necesarias para la evaluación, como registros históricos de caudales, datos meteorológicos, cartografía, características del cauce, información ecológica y datos sobre los usos del agua. También establece criterios para verificar su calidad, disponibilidad y representatividad.

        .row.justify-content-center(titulo="Cronograma")
          .col-md-11.mb-4.mb-md-0
            p Define la duración, las fechas de inicio y finalización y la secuencia de las actividades. Debe considerar las dependencias entre tareas, los tiempos de procesamiento y análisis, y los periodos hidrológicos apropiados para las campañas de campo.

        .row.justify-content-center(titulo="Presupuesto")
          .col-md-11.mb-4.mb-md-0
            p Estima los costos asociados con el personal, los desplazamientos, los equipos, los materiales, los análisis especializados y la elaboración de los productos. Permite verificar la disponibilidad financiera y distribuir los recursos de acuerdo con las necesidades del estudio.

        .row.justify-content-center(titulo="Riesgos y contingencias")
          .col-md-11.mb-4.mb-md-0
            p Identifica situaciones que pueden afectar el desarrollo del estudio, como condiciones climáticas adversas, dificultades de acceso, fallas en los equipos, pérdida de información o retrasos. Define medidas preventivas y acciones de contingencia para reducir sus efectos.

        .row.justify-content-center(titulo="Productos y entregables")
          .col-md-11.mb-4.mb-md-0
            p Especifica los resultados que deben generarse durante cada etapa y al finalizar el estudio. Pueden incluir bases de datos, registros de campo, mapas temáticos, resultados de análisis hidrológicos e hidráulicos, evaluaciones ecológicas, modelos y el informe técnico final.

        .row.justify-content-center(titulo="Indicadores")
          .col-md-11.mb-4.mb-md-0
            p Establece medidas cuantitativas o cualitativas para evaluar el avance, el cumplimiento de las actividades y la calidad de los resultados. Puede incluir el porcentaje de actividades ejecutadas, las campañas realizadas, los productos entregados y las observaciones técnicas atendidas.

        .row.justify-content-center(titulo="Seguimiento y control")
          .col-md-11.mb-4.mb-md-0
            p Define los mecanismos para verificar el cumplimiento del cronograma, las responsabilidades, el presupuesto y los productos esperados. Puede contemplar reuniones de seguimiento, informes de avance, listas de verificación y acciones correctivas ante posibles desviaciones.

        .row.justify-content-center(titulo="Control de calidad")
          .col-md-11.mb-4.mb-md-0
            p Establece procedimientos para revisar, validar y verificar la consistencia de los datos, los análisis y los documentos generados. Incluye la comprobación de registros de campo, la revisión de cálculos y modelos, y la verificación del cumplimiento de los criterios técnicos aplicables.

        .row.justify-content-center(titulo="Gestión documental y trazabilidad")
          .col-md-11.mb-4.mb-md-0
            p Define los procedimientos para organizar, almacenar, respaldar y actualizar la información del estudio. Permite identificar las fuentes de los datos, los métodos utilizados, las modificaciones realizadas y las versiones de los productos, facilitando su consulta y verificación posterior.

        .row.justify-content-center(titulo="Coordinación y comunicación")
          .col-md-11.mb-4.mb-md-0
            p Establece los canales de comunicación, los mecanismos para compartir información y las responsabilidades de coordinación entre el equipo técnico, la entidad responsable y los demás actores involucrados. Favorece la integración de los resultados y la resolución oportuna de dificultades.

      separador
      #t_1_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.2. Etapas de un estudio técnico de caudal ambiental

      .row.justify-content-center.mb-3(data-aos="fade-left")
        .col-lg-5.mb-3.p-0.col-10
          img(src='@/assets/curso/temas/t1/img08.png', alt='')
        .col-lg-7
          .row.justify-content-center
            .col-lg-2.mb-3.col-4.col-md-3
              img(src='@/assets/curso/temas/t1/img09.svg', alt='')
            .col-lg-10
              p El desarrollo de un estudio técnico de caudal ambiental comprende una serie de etapas articuladas que permiten organizar la recopilación de información, analizar las condiciones del sistema hídrico y establecer un régimen de caudales que contribuya a la conservación de los ecosistemas acuáticos y considere los usos del recurso hídrico.
            p Aunque la secuencia y el alcance de las actividades pueden variar según las características del sistema hídrico, la metodología seleccionada y los objetivos de la evaluación, el estudio generalmente comprende cinco fases: planeación, recolección de información, procesamiento y análisis, interpretación de resultados y elaboración del informe técnico. Estas fases facilitan el desarrollo ordenado del estudio y la obtención de resultados técnicamente sustentados (IDEAM & MADS, 2017; ANLA, 2013).
      p Entre las principales características se encuentran las siguientes:

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-9
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t3/ico.svg")
            h3.bg2.py-1.w-card-text Fases para el desarrollo del estudio técnico de caudal ambiental

      p El desarrollo de un estudio técnico de caudal ambiental requiere una secuencia organizada de fases que permita planificar las actividades, recopilar información confiable, analizar las condiciones del sistema hídrico e interpretar los resultados para establecer un régimen de caudal ambiental técnicamente sustentado. Cada fase comprende actividades específicas, productos verificables y criterios que orientan la continuidad del proceso.


      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 1.
        span Fases técnicas

      .tabla-a.color-acento-contenido(data-aos="zoom-in-left").mb-4
        table
          thead
            tr
              th.bg4.text-izq.w-25 Fase
              th.bg4.text-izq Descripción y principales actividades
              th.bg4.text-izq Producto esperado
          tbody
            tr.bg3
              td #[b 1. Planeación]
              td Define los objetivos, el alcance geográfico y técnico, la metodología y los recursos necesarios. Incluye la revisión de antecedentes, el análisis normativo, la conformación del equipo interdisciplinario y la programación de las campañas de campo.
              td Plan de trabajo con actividades, responsables, cronograma, presupuesto y metodología definida.
            tr
              td #[b 2. Recolección de información]
              td Recopila datos hidrológicos, hidráulicos, ecológicos, geomorfológicos y socioeconómicos mediante la revisión de registros existentes y la realización de mediciones de campo, aforos, levantamientos topográficos e inventarios ambientales, según las necesidades del estudio.
              td Bases de datos, registros de campo, cartografía e información ambiental organizada y verificada.
            tr.bg3
              td #[b 3. Procesamiento y análisis]
              td Organiza y valida los datos recopilados. Comprende el análisis estadístico de series hidrológicas, la caracterización hidráulica, la modelación cuando corresponda y la evaluación de la información ecológica. Se pueden utilizar herramientas como HEC-RAS, HEC-HMS, QGIS, ArcGIS, R y Python, según los requerimientos técnicos.
              td Resultados de análisis, modelos, mapas temáticos y caracterizaciones técnicas del sistema hídrico.
            tr
              td #[b 4. Interpretación de resultados]
              td Integra los resultados hidrológicos, hidráulicos y ecológicos para evaluar el comportamiento del sistema hídrico, los requerimientos del ecosistema y los posibles efectos de las alteraciones del régimen de caudales. Con base en esta evaluación, se establece el régimen de caudal ambiental recomendado.
              td Propuesta técnicamente justificada del régimen de caudal ambiental y recomendaciones para su implementación y seguimiento.
            tr.bg3
              td #[b 5. Elaboración del informe técnico]
              td Consolida la metodología, las fuentes de información, los análisis realizados y los resultados obtenidos. Incluye la presentación de tablas, mapas, gráficas, conclusiones y recomendaciones para la gestión del recurso hídrico.
              td Informe técnico final con sus anexos y soportes, que documenta los resultados y fundamenta las recomendaciones del estudio.

      p Estas fases deben desarrollarse de manera articulada y ajustarse a las características del sistema hídrico, la metodología seleccionada y los requerimientos técnicos y normativos aplicables. Asimismo, los resultados de las campañas de campo y de los análisis pueden requerir ajustes en la planificación o la revisión de etapas anteriores.
      p La aplicación de esta secuencia facilita la organización del estudio, el uso eficiente de los recursos y la trazabilidad de los resultados, proporcionando una base técnica para la toma de decisiones sobre la gestión sostenible del recurso hídrico y la conservación de los ecosistemas acuáticos.
      
      separador
      #t_1_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.3. Herramientas digitales para la planeación y ejecución de estudios de caudal ambiental
      
      .row.justify-content-center.mb-4.bg7.g-0
        .col-lg-5.p-0
          img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t1/img10.png', alt='')
        .col-lg-7
          .row.mb-0.p-4
            .col-lg-2.mb-3.col-4.col-md-3
              img(src='@/assets/curso/temas/t1/img11.svg', alt='')
            .col-lg-12
              p.mb-0 El desarrollo de un estudio técnico de caudal ambiental requiere organizar actividades, coordinar equipos interdisciplinarios y gestionar información hidrológica, hidráulica, ecológica y geográfica. En este contexto, las herramientas digitales facilitan la planificación de las actividades, la administración de los recursos, el procesamiento de datos y la modelación de escenarios, lo que contribuye a mejorar la eficiencia y la trazabilidad de los procesos técnicos.
              br
              p Estas herramientas permiten optimizar diferentes etapas del estudio, desde la programación de las campañas de campo hasta la interpretación de resultados y la elaboración de informes técnicos. Su selección depende de los objetivos del proyecto, la metodología aplicada, las características del sistema hídrico y la disponibilidad de recursos tecnológicos.

      p De acuerdo con su funcionalidad, las herramientas digitales utilizadas en estos estudios se pueden organizar en cinco grupos: gestión de proyectos, sistemas de información geográfica (SIG), modelación hidrológica e hidráulica, análisis y procesamiento de datos, y comunicación y trabajo colaborativo. Cada grupo cumple una función específica y complementaria en la planeación y ejecución del estudio

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 1.
        span  Información que integra las herramientas digitales aplicadas al cálculo de caudales ambientales
      .row.mb-4
        .col-lg-12
          img(src='@/assets/curso/temas/t1/fig1.svg', alt='Diagrama que presenta las seis etapas de un estudio de caudal ambiental, desde la recolección y organización de datos hasta el cálculo e interpretación de resultados, con sus actividades, herramientas digitales y productos esperados.')

      p En conclusión, las herramientas digitales constituyen un apoyo indispensable para la planeación y ejecución de estudios de caudal ambiental, ya que permiten organizar las actividades, integrar información de diferentes fuentes, modelar el comportamiento hidrológico e hidráulico de los cuerpos de agua y facilitar la toma de decisiones. La selección de estas herramientas dependerá de la complejidad del estudio, de la metodología empleada y de la disponibilidad de recursos técnicos y humanos.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 2.
        span Herramientas digitales para la gestión de estudios de caudal ambiental

      .tabla-a.color-acento-contenido(data-aos="zoom-in-left").mb-4
        table
          thead
            tr
              th.bg4.text-izq.w-25 Tipo de herramienta
              th.bg4.text-izq Software o plataforma
              th.bg4.text-izq Funciones principales
              th.bg4.text-izq Aplicación en los estudios de caudal ambiental
          tbody
            tr.bg3
              td #[b Gestión de proyectos]
              td Microsoft Project y ProjectLibre.
              td Organizar actividades, asignar responsabilidades, elaborar cronogramas mediante diagramas de Gantt, gestionar recursos y controlar la ruta crítica.
              td Planificar las actividades técnicas, administrativas y logísticas, controlar los plazos y realizar seguimiento al avance del estudio.
            tr
              td #[b Sistemas de Información Geográfica (SIG)]
              td QGIS y ArcGIS Pro.
              td Integrar, visualizar y analizar información espacial; delimitar cuencas y elaborar cartografía temática.
              td Analizar la red de drenaje, el uso del suelo, la cobertura vegetal, las estaciones hidrométricas y las áreas protegidas de la cuenca hidrográfica.
            tr.bg3
              td #[b Modelación hidrológica e hidráulica]
              td HEC-HMS y HEC-RAS.
              td Simular procesos de lluvia-escorrentía, estimar caudales y analizar variables hidráulicas, como profundidad, velocidad y áreas inundables.
              td Evaluar diferentes escenarios de caudal y analizar sus efectos sobre las condiciones físicas del cauce y el ecosistema acuático.
            tr
              td #[b Análisis y procesamiento de datos]
              td Microsoft Excel, R y Python.
              td Organizar bases de datos, realizar análisis estadísticos, generar gráficos, automatizar cálculos y procesar grandes volúmenes de información.
              td Procesar registros hidrológicos, identificar tendencias, analizar la variabilidad de los caudales y mejorar la precisión y reproducibilidad de los resultados.
            tr.bg3
              td #[b Colaboración y comunicación]
              td Microsoft Teams, Google Drive y Trello.
              td Facilitar la comunicación, compartir y almacenar documentos, distribuir tareas y realizar seguimiento a las actividades programadas.
              td Coordinar el trabajo entre los profesionales del estudio, centralizar la información y favorecer el cumplimiento de las actividades y los plazos establecidos.






























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
