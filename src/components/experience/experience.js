// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';

// Recebe os parâmetros passadados para o Componenet na variável props
const Experience = (props) => (
  <div>
    <div style={{backgroundColor:'#726794', height:'2px'}}></div>
    <br/>
      <Row>
        <Col s={2} m={2}>
          <img src={props.avatar} className="circle responsive-img" style={{justifyContent:'center'}} />
          { props.name }
        </Col>

        <Col s={10} s={10}>
          <p><b>{props.title} na {props.company}</b></p>
          <p>{props.description}</p>
        </Col>
      </Row>
  </div>
);

export default Experience;