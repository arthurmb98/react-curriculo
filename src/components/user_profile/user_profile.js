// Importando o React
import React, { useEffect, useState } from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// importando a foto do usuário (note que depois podemos usa-la facilmente chamando apenas avatar ao invés do caminho completo)
import avatar from '../../images/avatar.png';

import { Style } from "../styles";

import {getData} from '../../Firebase';

function UserProfile(){
  const [someState, setSomeState] = useState();

  useEffect(() => {
    getData().then(data => setSomeState(data));
  }, []);

  return(<Card>
    <Row>
      <Col s={8} m={8} offset="s2 m2">
        <img src={someState == null ? "" : someState.foto} className="circle responsive-img" />
      </Col>
    </Row>
    <Row className="center-align">
      <h5 >{someState == null ? "" : someState.nome}</h5>
      <p style={Style}>{someState == null ? "" : someState.headline}</p>
    </Row>
</Card>);
  
};

export default UserProfile;