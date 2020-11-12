import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const Formulario = (props) => {
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    console.log(e.target.value);
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // validar campos
    if (busqueda.ciudad.trim() === "" || busqueda.pais.trim() === "") {
      // mostrar un cartel
      setError(true);
      return;
    }
    setError(false);
    consultarAPI();
  };
  const consultarAPI = async ()=> {
      const apikey = "94fc50fa16e861a8a063cfd8edefcfe7"
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${busqueda.ciudad},${busqueda.pais}&appid=${apikey}&units=metric`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json() ;
      console.log(resultado);

      if(resultado.cod === "404"){
        props.setResultado({});
        // arriba dice, cuando de error, no le envies nada a state x la funcion setResultado
        // mostrar el mensaje reutilizando alert, la ciudad no existe
      }else{
        props.setResultado(resultado);
        // si esta bien, le mando la info de la api   
      }

  }
  return (
    <Form onSubmit={handleSubmit}>
      {error ? (
        <Alert variant={"danger"}>Todos los campos son obligatorios.</Alert>
      ) : null}

      <Form.Group controlId="ciudadId">
        <Form.Label>Ciudad *</Form.Label>
        <Form.Control
          type="text"
          placeholder="Barcelona"
          onChange={handleChange}
          name="ciudad"
        />
      </Form.Group>
      <Form.Group controlId="paisId">
        <Form.Label>País *</Form.Label>
        <Form.Control
          as="select"
          placeholder="España"
          onChange={handleChange}
          name="pais"
        >
          <option value="">Seleccione un País</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="MX">Mexico</option>
          <option value="PE">Peru</option>
          <option value="US">Estados Unidos</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" className="w-100" type="submit">
        Buscar
      </Button>
    </Form>
  );
};

export default Formulario;
