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
              <Tarjetas dato={imagenes.img1}/>
              <Tarjetas dato={imagenes.img2}/>
              <Tarjetas dato={imagenes.img3}/>
              <Tarjetas dato={imagenes.img4}/>
              <Tarjetas dato={imagenes.img5}/>
              <Tarjetas dato={imagenes.img6}/>
              <Tarjetas dato={imagenes.img7}/>
              <Tarjetas dato={imagenes.img8}/>
            
              </div>
         </div>  
        </div>

    </>
  )
}
