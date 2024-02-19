# Conversor de Monedas

Este proyecto es un conversor de monedas que permite convertir un monto en pesos chilenos a diferentes monedas extranjeras. Fue creado como parte de una prueba técnica.

## Funcionalidades

- Permite ingresar un monto en pesos chilenos a convertir
- Seleccionar la moneda a la cual convertir desde un dropdown (USD, UF, UTM)
- Al hacer clic en el botón "Convertir", se realiza una consulta a la API de indicadores económicos mindicador.cl usando fetch para obtener el tipo de cambio
- Muestra el resultado de la conversión en pantalla
- Muestra un gráfico con el historial de los últimos 10 días del valor de la moneda seleccionada utilizando Chart.js
- Manejo de errores con try/catch en caso de problemas con la API

## Instalación

1. Clona este repositorio

## Tecnologías

- JavaScript
- HTML
- CSS
- Chart.js
- API mindicador.cl

## Créditos

Este proyecto fue desarrollado como parte de una prueba técnica de [Desafío Latam](https://www.desafiolatam.com/).
