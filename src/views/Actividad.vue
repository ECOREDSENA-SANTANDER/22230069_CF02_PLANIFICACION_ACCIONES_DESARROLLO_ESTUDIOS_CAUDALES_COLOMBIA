<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Proyección de recursos para el estudio de caudales ambientales',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar el nivel de apropiación de los fundamentos relacionados con la Proyección de recursos para el estudio de caudales ambientales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la importancia de seleccionar adecuadamente los equipos y materiales para un estudio de caudales ambientales?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Garantizar únicamente el cumplimiento de los tiempos establecidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Obtener datos confiables y facilitar el desarrollo de las actividades técnicas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Reducir la cantidad de personal requerido en todas las actividades.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Evitar la necesidad de planificar las actividades de campo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Proyección de recursos para el estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Proyección de recursos para el estudio de caudales ambientales.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes equipos se utiliza para medir la velocidad del agua en una corriente?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pluviómetro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Termómetro ambiental.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Molinete hidrométrico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Brújula geológica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Proyección de recursos para el estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Proyección de recursos para el estudio de caudales ambientales.',
        },
        {
          id: 3,
          texto:
            '¿Qué aspecto debe considerarse al seleccionar los equipos para un estudio de caudales ambientales?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La apariencia y el tamaño de los equipos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La disponibilidad de equipos sin importar su función.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El costo de adquisición como único criterio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las características del sistema hídrico y los objetivos del estudio.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Proyección de recursos para el estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Proyección de recursos para el estudio de caudales ambientales.',
        },
        {
          id: 4,
          texto:
            '¿Por qué es importante verificar el estado de los equipos antes de realizar las mediciones en campo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para evitar la elaboración de registros técnicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Para disminuir el número de datos recolectados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para asegurar su funcionamiento y reducir posibles errores de medición.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Para reemplazar los procedimientos de calibración.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Proyección de recursos para el estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Proyección de recursos para el estudio de caudales ambientales.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es la función de los materiales de registro durante un estudio de caudales ambientales?',
          imagen: '@/assets/actividad/imagen05.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sustituir los instrumentos de medición.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Documentar los datos obtenidos y facilitar su organización y análisis.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la necesidad de verificar la información.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la cantidad de variables estudiadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Proyección de recursos para el estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Proyección de recursos para el estudio de caudales ambientales.',
        },
        {
          id: 6,
          texto:
            '¿Qué instrumento permite medir el nivel del agua en una corriente hídrica?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un pluviómetro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una mira limnimétrica.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un anemómetro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un termómetro ambiental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Proyección de recursos para el estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Proyección de recursos para el estudio de caudales ambientales.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es la función de un GPS durante un estudio de caudales ambientales?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Medir directamente la velocidad del agua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Determinar la concentración de oxígeno disuelto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Registrar las coordenadas geográficas de los puntos de muestreo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Calcular la precipitación de una cuenca.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Proyección de recursos para el estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Proyección de recursos para el estudio de caudales ambientales.',
        },
        {
          id: 8,
          texto:
            '¿Qué instrumento se utiliza para medir la temperatura del agua?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un molinete hidrométrico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un flexómetro.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un termómetro acuático.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un nivel topográfico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Proyección de recursos para el estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Proyección de recursos para el estudio de caudales ambientales.',
        },
        {
          id: 9,
          texto:
            '¿Para qué se utiliza un disco Secchi en estudios de sistemas acuáticos?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Medir la velocidad de la corriente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Determinar la profundidad total del río.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Estimar la transparencia del agua.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Medir la conductividad eléctrica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Proyección de recursos para el estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Proyección de recursos para el estudio de caudales ambientales.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la función de un multiparámetro portátil en la evaluación de un sistema hídrico?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Medir exclusivamente el caudal de una corriente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Determinar únicamente las coordenadas del sitio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Medir variables de calidad del agua, como el pH, la temperatura y la conductividad, según sus sensores.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Estimar la precipitación anual de una cuenca.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Proyección de recursos para el estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Proyección de recursos para el estudio de caudales ambientales.',
        },
        {
          id: 11,
          texto:
            '¿Qué elemento permite recolectar muestras de agua para su posterior análisis en laboratorio?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una mira limnimétrica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un trípode topográfico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un molinete hidrométrico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Un recipiente de muestreo adecuado para las variables que se analizarán.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Proyección de recursos para el estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Proyección de recursos para el estudio de caudales ambientales.',
        },
        {
          id: 12,
          texto:
            '¿Por qué es importante calibrar los instrumentos de medición?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para aumentar su tamaño y facilitar el transporte.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Para reducir la cantidad de mediciones necesarias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para verificar su exactitud y contribuir a la confiabilidad de los resultados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Para evitar el registro de datos durante el trabajo de campo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Proyección de recursos para el estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Proyección de recursos para el estudio de caudales ambientales.',
        },
        {
          id: 13,
          texto:
            '¿Qué criterio debe orientar la selección de los materiales para recolectar muestras de agua?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El color del recipiente y su apariencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La facilidad para conseguir cualquier recipiente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La compatibilidad del material con la muestra y los análisis previstos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El tamaño del equipo de trabajo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Proyección de recursos para el estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Proyección de recursos para el estudio de caudales ambientales.',
        },
        {
          id: 14,
          texto:
            '¿Qué elemento de protección personal es importante al realizar mediciones cerca de corrientes hídricas?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un delantal de laboratorio como único elemento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un tapabocas como única protección.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un chaleco salvavidas cuando las condiciones de riesgo y el procedimiento lo requieran.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un casco sin otros elementos de protección.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Proyección de recursos para el estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Proyección de recursos para el estudio de caudales ambientales.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es la finalidad de utilizar una cinta métrica durante las mediciones de campo?',
          imagen: '@/assets/actividad/imagen05.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Determinar la concentración de nutrientes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Medir la conductividad del agua.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Establecer distancias y dimensiones, como el ancho de una sección transversal.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Calcular directamente el caudal sin otros datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Proyección de recursos para el estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Proyección de recursos para el estudio de caudales ambientales.',
        },
        {
          id: 16,
          texto:
            '¿Qué equipo puede utilizarse para medir la velocidad del agua mediante tecnología acústica?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un disco Secchi.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un pluviómetro.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un velocímetro acústico para corrientes, según sus características y aplicación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Una mira limnimétrica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Proyección de recursos para el estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Proyección de recursos para el estudio de caudales ambientales.',
        },
        {
          id: 17,
          texto:
            '¿Por qué es necesario llevar baterías de repuesto o fuentes de alimentación para los equipos electrónicos?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para modificar los resultados de las mediciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Para sustituir la calibración de los instrumentos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para evitar la elaboración de registros de campo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para mantener la disponibilidad operativa de los equipos durante las actividades.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Proyección de recursos para el estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Proyección de recursos para el estudio de caudales ambientales.',
        },
        {
          id: 18,
          texto:
            '¿Qué información debe registrarse durante las mediciones de caudal en campo?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente el nombre del responsable de la actividad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo la fecha en que se realizó la visita.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La fecha, el lugar, las condiciones de medición, los valores obtenidos y las unidades correspondientes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exclusivamente las observaciones sobre el clima.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Proyección de recursos para el estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Proyección de recursos para el estudio de caudales ambientales.',
        },
        {
          id: 19,
          texto:
            '¿Qué práctica contribuye a conservar los equipos y materiales después de una jornada de campo?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Guardarlos húmedos y sin revisar su estado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Limpiarlos únicamente cuando presenten fallas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Limpiarlos según las indicaciones del fabricante, revisar su estado y almacenarlos adecuadamente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Dejarlos instalados en el sitio de medición para la siguiente visita.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Proyección de recursos para el estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Proyección de recursos para el estudio de caudales ambientales.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es la importancia de contar con equipos de respaldo para un estudio de caudales ambientales?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar la necesidad de planificar las actividades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la confiabilidad de las mediciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Disminuir las interrupciones del trabajo ante fallas o daños de los equipos principales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Evitar la participación del personal técnico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Proyección de recursos para el estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Proyección de recursos para el estudio de caudales ambientales.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre la Proyección de recursos para el estudio de caudales ambientales.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
