import React from "react";
import Card from "react-bootstrap/Card";

const Clima = ({resultado}) => {
    // en vez de poner props pongo esto, y ya abajo, se me hace mas corto, 
    // por que ya no tengo que escribir props. antes de resultado.etc
  return (
    <Card>
      <Card.Body>
  <Card.Title>{resultado.name}</Card.Title>
        <Card.Text>
          Temperatura: {resultado.main.temp} °C
          <img src={`http://openweathermap.org/img/wn/${resultado.weather[0].icon}@2x.png`}></img>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Clima;
