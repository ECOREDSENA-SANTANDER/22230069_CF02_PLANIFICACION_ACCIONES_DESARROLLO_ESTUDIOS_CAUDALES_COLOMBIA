export default {
  global: {
    Name: 'Proyección de recursos para el estudio de caudales ambientales',
    Description:
      'Desarrolla los conocimientos y habilidades necesarios para planificar las actividades, recursos humanos, técnicos, tecnológicos, logísticos y financieros requeridos para la ejecución de estudios de caudal ambiental, de acuerdo con la metodología seleccionada. El componente aborda la estructuración de planes de trabajo, cronogramas y presupuestos, así como la organización de actividades de campo, procesamiento y análisis de información y elaboración de informes técnicos. Además, promueve el uso de herramientas digitales, la gestión interdisciplinaria y la toma de decisiones orientada a la eficiencia, calidad, trazabilidad y cumplimiento de los requerimientos técnicos y ambientales aplicables en Colombia.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.jpg',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Planeación del estudio técnico de caudal ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Plan de trabajo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Etapas de un estudio técnico de caudal ambiental',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Herramientas digitales para la planeación y ejecución de estudios de caudal ambiental',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Presupuesto: componentes, presentación y recomendaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto de presupuesto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Componentes del presupuesto',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Presentación del presupuesto',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Caso de estudio para identificar las actividades y los recursos requeridos en un estudio de caudal ambiental',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Aforo',
      significado:
        'medición de la cantidad de agua que pasa por una sección de una corriente en un tiempo determinado.',
    },
    {
      termino: 'Análisis hidrológico',
      significado:
        'estudio de los registros de caudal para identificar el comportamiento del agua a lo largo del tiempo.',
    },
    {
      termino: 'Área útil de hábitat',
      significado:
        'superficie del cauce que ofrece condiciones adecuadas para la vida de las especies acuáticas.',
    },
    {
      termino: 'Caudal ambiental',
      significado:
        'cantidad y variación de agua necesarias para conservar los ecosistemas acuáticos y sus funciones.',
    },
    {
      termino: 'Caudal base',
      significado:
        'flujo de agua que mantiene una corriente durante periodos sin lluvia, principalmente por el aporte de aguas subterráneas.',
    },
    {
      termino: 'Caudal medio anual',
      significado:
        'promedio de los caudales registrados durante un año hidrológico.',
    },
    {
      termino: 'Clasificación de metodologías',
      significado:
        'organización de los métodos utilizados para estimar el caudal ambiental según sus características y fundamentos.',
    },
    {
      termino: 'Enfoque ecohidráulico',
      significado:
        'método que relaciona las condiciones del agua, como la profundidad y la velocidad, con las necesidades de las especies acuáticas.',
    },
    {
      termino: 'Enfoque hidrológico',
      significado:
        'método que utiliza registros históricos de caudales para estimar el caudal ambiental.',
    },
    {
      termino: 'Enfoque holístico',
      significado:
        'método que integra aspectos hidrológicos, físicos, ecológicos y sociales para determinar el caudal ambiental.',
    },
    {
      termino: 'Estudio de caudal ambiental',
      significado:
        'proceso técnico que permite determinar el régimen de agua necesario para conservar los ecosistemas acuáticos.',
    },
    {
      termino: 'Metodología hidrológica',
      significado:
        'procedimiento que utiliza datos históricos de caudales para estimar el caudal ambiental.',
    },
    {
      termino: 'Metodología hidráulica',
      significado:
        'procedimiento que analiza características del agua y del cauce, como la profundidad, la velocidad y el perímetro mojado, para estimar el caudal ambiental.',
    },
    {
      termino: 'Metodología holística',
      significado:
        'procedimiento que combina información ambiental, ecológica y social para establecer el régimen de caudal ambiental.',
    },
    {
      termino: 'Régimen de flujo',
      significado:
        'comportamiento de los caudales de un río a lo largo del tiempo, según su magnitud, frecuencia, duración y variación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Acreman, M., Arthington, A. H., Colloff, M. J., Couch, C., Crossman, N. D., Dyer, F., Overton, I., Pollino, C. A., Stewardson, M. J., & Young, W. (2014). Environmental flows for natural, hybrid, and novel riverine ecosystems in a changing world. Frontiers in Ecology and the Environment, 12(8), 466–473.',
    },
    {
      referencia:
        'Arthington, A. H. (2023). Environmental flows: From theory to implementation in a changing world. River Research and Applications, 39(5), 695–709.',
    },
    {
      referencia:
        "Grill, G., Lehner, B., Thieme, M., Geenen, B., Tickner, D., Antonelli, F., Babu, S., Cheng, L., Crochetiere, H., Macedo, H. E., et al. (2024). Mapping the world's free-flowing rivers and environmental flow challenges. Nature Water, 2(3), 189–201.",
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales. (2022). Estudio nacional del agua 2022.',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales, & Ministerio de Ambiente y Desarrollo Sostenible. (2017). Guía metodológica para la estimación del caudal ambiental.',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2018). Metodología general para la elaboración y presentación de estudios ambientales.',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible, & Instituto de Hidrología, Meteorología y Estudios Ambientales. (2019). Metodología para la estimación del caudal ambiental en el río Bogotá.',
    },
    {
      referencia:
        'Pastor, A. V., Ludwig, F., Biemans, H., Hoff, H., & Kabat, P. (2014). Accounting for environmental flow requirements in global water assessments. Hydrology and Earth System Sciences, 18, 5041–5059.',
    },
    {
      referencia:
        'Poff, N. L., & Zimmerman, J. K. H. (2010). Ecological responses to altered flow regimes: A literature review to inform environmental flows science and management. Freshwater Biology, 55(1), 194–205.',
    },
    {
      referencia:
        'Richter, B. D., Baumgartner, J. V., Wigington, R., & Braun, D. P. (1997). How much water does a river need? Freshwater Biology, 37(1), 231–249.',
    },
    {
      referencia:
        'Sandoval-Solis, S., Paladino, S., Garza-Diaz, L. E., Nava, L. F., Friedman, J. R., Ortiz-Partida, J. P., Plassin, S., Gomez-Quiroga, G., Koch, J., Fleming, J., Lane, B. A., Wineland, S., Mirchi, A., Saiz-Rodríguez, R., & Neeson, T. M. (2022). Environmental flows in the Rio Grande–Rio Bravo basin. Ecology and Society, 27(1), Article 20.',
    },
    {
      referencia:
        'Tharme, R. E. (2003). A global perspective on environmental flow assessment: Emerging trends in the development and application of environmental flow methodologies for rivers. River Research and Applications, 19(5–6), 397–441.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional grado 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Víctor Hugo Polo Calvo',
          cargo: 'Instructor',
          centro:
            'Centro para el Desarrollo Agroecológico - Regional Atlántico',
        },
        {
          nombre: 'Margarita Inés Viloria Villegas',
          cargo: 'Profesional 04',
          centro: 'Centro Biotecnológico del Caribe - Regional Cesar',
        },
        {
          nombre: 'Verónica del Socorro Polo Martínez',
          cargo: 'Profesional 02',
          centro:
            'Centro para el Desarrollo Agroecológico - Regional Atlántico',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodríguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
