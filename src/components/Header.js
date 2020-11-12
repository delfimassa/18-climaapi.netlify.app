import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

const Header = (props) => {
  return (
    <div>
      <Jumbotron className="text-center bg-dark text-light">
        <h1>{props.titulo}</h1>
        <p>
          Utitlizando datos de la API OpenWeather https://openweathermap.org/
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Header;
