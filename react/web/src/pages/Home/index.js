import logo from "./img/logo.jpg"
import './styles.css'

export default function Home (){
  return (
    <div className="container">
      <b>Quer uma carona ? VemPraCar</b>
      <p>Quer dar uma carona ? VemPraCar também</p>
      <img src={logo} alt="sim"/>
      <a href="https://www.instagram.com/vempra_car">Siga-nos no nosso Instagram</a>
    </div>
  )
}