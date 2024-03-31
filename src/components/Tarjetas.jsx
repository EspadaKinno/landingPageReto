import React from "react"
import "./Tarjetas.css"
export const Tarjetas = ({dato, titulo}) => {
  return (
    <>
        <div className="container-div--tarjetas">
            <div className="container-tarjetas--img">
              <img src={dato} alt="imagen" />
              <h3>{titulo}</h3>
            </div>
        </div>
    </>
  )
}

