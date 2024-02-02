import "./Descripcion.css"
import imagenDescripcion from "../assets/mobile/image-interactive.jpg"

export const Descripcion = () => {
  return (
    <>
        <section className="tag-section--descripcion">
            <div className="container-section--descripcion">
                <div className="container-section__contenedor--imagen">
                    <img src={imagenDescripcion} alt="imagen" className="container-section--img" />
                </div>
                <div className="container-section--texto">
                    <h1>THE LEADER IN INTERACTIVE VR</h1>
                    <p>Founded in 2011, loopstudios has been produciong world-class virtual reality projects for some of the best companies around the globe.Our award-winning creations have transformed businesses through digital experiences that bind to their brand</p>
                </div>
            </div>
        </section>
    </>
  )
}
