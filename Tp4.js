let controlChart; // Variable global para almacenar el gráfico

// Trae los datos de la Api, según el control
function fetchData() {
    const caseNumber = document.getElementById('controlCase').value;
    const apiUrl = `https://apidemo.geoeducacion.com.ar/api/testing/control/${caseNumber}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                displayChart(data.data[0]);
                checkForAnomalies(data.data[0]);
            } else {
                alert('Error al obtener los datos de la API');
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Función para crear el gráfico
function displayChart(data) {
    const ctx = document.getElementById('controlChart');
    const values = data.valores.map(point => ({ x: point.x, y: point.y }));

    // Si ya existe uno, lo elimina
    if (controlChart) {
        controlChart.destroy();
    }

    // Crear el gráfico
    controlChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Valores de la variable',
                data: values,
                borderColor: 'blue',
                fill: false
            }, {
                label: 'Límite Superior de Control',
                data: values.map(point => ({ x: point.x, y: data.lsc })),
                borderColor: 'red',
                borderDash: [5, 5],
                fill: false
            }, {
                label: 'Límite Inferior de Control',
                data: values.map(point => ({ x: point.x, y: data.lic })),
                borderColor: 'red',
                borderDash: [5, 5],
                fill: false
            }, {
                label: 'Media',
                data: values.map(point => ({ x: point.x, y: data.media })),
                borderColor: 'green',
                borderDash: [5, 5],
                fill: false
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                }
            }
        }
    });
}

// Alerta si hay fuera de control
function checkForAnomalies(data) {
    const alertDiv = document.getElementById('alert');
    const { valores, lsc, lic } = data; // Extrae la inforación del obj data
    let alertMessage = '';

    const outOfControl = valores.some(point => point.y > lsc || point.y < lic); // Chequea los puntos con Lsc y Lic
    if (outOfControl) {
        alertMessage = 'Alerta: Hay puntos fuera de los límites de control.'; // En caso de ser true, manda el mensaje
    }

    alertDiv.textContent = alertMessage; // Se pasa el mensaje al Div de Html
}
