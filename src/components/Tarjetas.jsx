import React from "react"
import "./Tarjetas.css"
export const Tarjetas = ({dato}) => {
  return (
    <>
        <div className="container-div--tarjetas">
            <div className="container-tarjetas--img">
              <img src={dato} alt="imagen" />
              <h3>Deep Earth</h3>
            </div>
        </div>
    </>
  )
}

