import React, { Fragment, useEffect, useState } from "react"
import axios from "axios"

function Index() {
  const [location, setLocation] = useState(false)
  const [weather, setWeather] = useState(false)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude)
      setLocation(true)
    })
  })

  if (location == false) {
    return <Fragment>Clique em PERMITIR para exibir os dados o/</Fragment>
  } else {
    return (
      <Fragment>
        <h3>Exemplo de consumo</h3>
        <hr />
        <ul>
          <li>Temperatura atual: </li>
          <li>Temperatura máxima: </li>
          <li>Temperatura mínima: </li>
          <li>Pressão: </li>
          <li>Umidade: </li>
        </ul>
      </Fragment>
    )
  }
}

export default Index
