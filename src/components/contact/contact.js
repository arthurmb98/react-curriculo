// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button } from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile'

import { ButtonStyle } from "../styles";

import firebase from '../../Firebase';
import "firebase/firestore";

import { useForm } from "react-hook-form";

function Contact(){

  const { register, handleSubmit, errors } = useForm();

  function onSubmit(data){
    console.log(data);
    firebase.firestore().collection("propostas").add({data}).then(resp =>
      alert("Mensagem enviada com sucesso!")
    );
  }

  return (<Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5>Contato</h5>
        <Card>
          <Row>
              <input name="email" placeholder="lorem@ipsum.com" type="email" label="Email" ref={register()} />
              <input name = "mensagem" placeholder="Lorem Ipsum..." label="Mensagem" ref={register()}/>
            <Col s={12} m={12}>
              <Button waves='light' className="right" style={ButtonStyle}  onClick={handleSubmit(onSubmit)}>Enviar</Button>
            </Col>
          </Row>
        </Card>
    </Col>
  </Row>);
}

export default Contact;