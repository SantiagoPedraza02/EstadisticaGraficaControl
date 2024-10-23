# Gráfico de Control de Calidad

Este proyecto es una aplicación web para visualizar gráficos de control de calidad. Utiliza `Chart.js` para renderizar los gráficos y permite seleccionar diferentes casos de control para analizar los datos.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- [Chart.js](https://www.chartjs.org/) (librería para gráficos)
- API de ejemplo: `https://apidemo.geoeducacion.com.ar/api/testing/control/`

## Descripción del proyecto

La aplicación permite generar gráficos de control de calidad basados en datos obtenidos de una API. Los usuarios pueden seleccionar entre diferentes escenarios de control:

1. Caso fuera de control
2. Caso normal
3. 2 de 3 puntos fuera de 2-sigma
4. 4 de 5 puntos consecutivos fuera de sigma
5. 8 puntos consecutivos del mismo lado de la línea central

Una vez seleccionado un caso, se genera el gráfico con los valores obtenidos y se comprueba si hay puntos fuera de los límites de control.

## Estructura del proyecto

├── index.html # Página principal 
├── Tp4.css # Estilos CSS para la página   
├── Tp4.js # Lógica de JavaScript para el gráfico 
└── README.md # Documentación del proyecto

## Instrucciones para usar la aplicación

1. Clona el repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador.
3. Selecciona un caso de control en el menú desplegable.
4. Haz clic en el botón "Generar Gráfico" para visualizar el gráfico de control de calidad.

## Funcionalidades principales

- **Generación de gráficos**: Muestra un gráfico de líneas con los valores de la variable, límites de control superior e inferior, y la media.
- **Detección de anomalías**: Verifica si hay puntos fuera de los límites de control y muestra una alerta en caso afirmativo.
- **Interacción con la API**: Obtiene los datos del control desde una API externa según el caso seleccionado.



