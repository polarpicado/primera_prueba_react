import { useState } from 'react'
import './App.css'
import html2canvas from 'html2canvas'

function App() {
  const [linea1, setLinea1] = useState('')
  const [linea2, setLinea2] = useState('')
  const [imagen, setImagen] = useState('toystory')

  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value)
  }
  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value)
  }
  const onChangeImagen = function (evento) {
    setImagen(evento.target.value)
  }
  const onClickExportar = function () {
    html2canvas(document.querySelector('#meme')).then((canvas) => {
      var img = canvas.toDataURL('image/jpg')
      document.write('<img src="' + img + '"/>')
    })
  }
  return (
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="toystory">Toy Story</option>
        <option value="nigga">WTF Nigga</option>
        <option value="spider">Spiderverse</option>
        <option value="stonks">Stonks</option>
      </select>
      <br />
      <input
        onChange={onChangeLinea1}
        type="text"
        placeholder="Texto Superior"
      />
      <br />
      <input
        onChange={onChangeLinea2}
        type="text"
        placeholder="Texto Inferior"
      />
      <br />
      <button onClick={onClickExportar}>Exportar</button>
      <br />
      <div className="meme" id="meme">
        <span>{linea1}</span>
        <br />
        <span>{linea2}</span>
        <br />
        <img src={'/images/' + imagen + '.jpg'} />
      </div>
    </div>
  )
}

export default App
