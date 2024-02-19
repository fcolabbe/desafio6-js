const apiURL = "https://mindicador.cl/api/";
const resultado = document.querySelector(".resultado"); 
const selectElement = document.getElementById('moneda');
const botonElement = document.getElementById("buscar");
const pesos = document.getElementById("pesos-clp");

botonElement.addEventListener('click', function(){
    renderResultado(selectElement.value);
    renderGrafica()
});

async function getIndicadores(){
    try {
        const res = await fetch(apiURL);
        const indicadores = await res.json();
        return indicadores;
    } catch (error) {
        console.error("Error al obtener los indicadores: ", error);
        resultado.textContent = 'Error al cargar los datos.';
    }
}

async function renderResultado(nombreIndicador){
    const indicadores = await getIndicadores();
    if(indicadores[nombreIndicador]) {
        let total = Number(pesos.value) /  Number(indicadores[nombreIndicador].valor)
        let html = `
            <p>Resultado: $${total.toFixed(2)}</p>
        `;
        resultado.innerHTML = html;
    } else {
        resultado.textContent = 'No se encontró el indicador seleccionado.';
    }
}

async function getAndCreateDataToChart(nombreIndicador) {
    url = apiURL + nombreIndicador 
    const res = await fetch(url);
    const precios = await res.json();
  
    const label = precios["serie"].slice(0,10).map(function(precio) {
        return precio.fecha;
    });

    const data = precios["serie"].slice(0,10).map(function(precio) {
        return Number(precio.valor);
    });

    const datasets = [{
        label: "Precio",
        borderColor: "rgb(255, 99, 132)",
        data
    }];
    return { labels: label, datasets }; 
}

let myChartInstance = null;

async function renderGrafica() {
    const data = await getAndCreateDataToChart(selectElement.value); const config = {
        type: "line",
        data
    };
    const myChart = document.getElementById("myChart");
    myChart.style.backgroundColor = "white";
    if (myChartInstance) {
        myChartInstance.destroy();
    }
    myChartInstance = new Chart(myChart, config);
}
