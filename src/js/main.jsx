import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
let counter = 0;
let esRegresiva = false;
let estaDetenido = false
let limite;
const cuentaRegresiva = () => {
  counter = prompt("elige el nuevo número del contador", 0)
  esRegresiva = !esRegresiva
}
const alternarDetencion = () => {
  estaDetenido = !estaDetenido

}
const limiteFinal = () => {
  limite = prompt("Establece el número en el que debe acabar el número", 0)
}

const reactRender = ReactDOM.createRoot(document.getElementById('root'))
setInterval(() => {
  reactRender.render(
    <React.StrictMode>
      <Home data={{
        counter: counter,
        cuentaRegresiva: cuentaRegresiva,
        alternarDetencion: alternarDetencion,
        estaDetenido: estaDetenido,
        limiteFinal: limiteFinal,
        esRegresiva: esRegresiva
      }} />
    </React.StrictMode>,
  )
  if (!esRegresiva && !estaDetenido && limite == undefined) return counter++
  if (esRegresiva && !estaDetenido && limite == undefined) return counter--
  if (!esRegresiva && !estaDetenido && counter < limite) return counter++
  if (esRegresiva && !estaDetenido && counter > limite) return counter--
  if (counter == limite) return alert("Hemos llegado al número 😎"), counter = 0, limite = undefined
  if (!esRegresiva && counter > limite) return alert("Ese límite ya lo pasamos 😅"), limite = undefined

}, 1000);