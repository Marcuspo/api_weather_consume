import React, { Fragment, useEffect, useState } from "react"
import axios from "axios"

function Index() {
  const [location, setLocation] = useState(false)
  const [weather, setWeather] = useState(false)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude)
      setLocation(true)
    })
  })

  let getWeather = async (lat, long) => {
    let res = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          lat: lat,
          lon: long,
          appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
          lang: "pt",
          units: "metric",
        },
      }
    )
    setWeather(res.data)
    console.log(res.data)
  }

  function refreshPage() {
    window.parent.location = window.parent.location.href
  }

  if (!location) {
    return <Fragment>Clique em PERMITIR para exibir os dados o/</Fragment>
  } else if (!weather) {
    return <Fragment>Carregando clima... wait aí</Fragment>
  } else {
    return (
      <Fragment>
        <h3>Hoje o clima está: ({weather["weather"][0]["description"]}) : </h3>
        <img
          src={`http://openweathermap.org/img/w/${weather["weather"][0]["icon"]}.png`}
        />
        <hr />
        <ul>
          <li>Temperatura atual: </li>
          <li>Temperatura máxima: </li>
          <li>Temperatura mínima: </li>
          <li>Pressão: </li>
          <li>Umidade: </li>
        </ul>
        <button type="button" onClick={refreshPage}>
          Atualizar clima
        </button>
      </Fragment>
    )
  }
}

export default Index
