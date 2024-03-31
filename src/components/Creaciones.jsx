import "./Creaciones.css"
import { Tarjetas } from "./Tarjetas"
import imagenes from "../assets/imagenes"

export const Creaciones = () => {
  return (
    <>
        <div className="container-div-creaciones">
         <div className="container-tarjetas-ancho">
          <h1>Our Creations</h1>
          <div className="container-tarjetas-creaciones">
            <Tarjetas dato={imagenes.img1} titulo={imagenes.uno}/>
            <Tarjetas dato={imagenes.img2} titulo={imagenes.dos}/>
            <Tarjetas dato={imagenes.img3} titulo={imagenes.tres}/>
            <Tarjetas dato={imagenes.img4} titulo={imagenes.cuatro}/>
            <Tarjetas dato={imagenes.img5} titulo={imagenes.cinco}/>
            <Tarjetas dato={imagenes.img6} titulo={imagenes.seis}/>
            <Tarjetas dato={imagenes.img7} titulo={imagenes.siete}/>
            <Tarjetas dato={imagenes.img8} titulo={imagenes.ocho}/>
            
          </div>
          <a href="#">See All</a>
         </div>  
        </div>

    </>
  )
}
