// Importando o React
import React, { useEffect, useState } from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile'
// Importando o component Experience
import Experience from '../experience/experience'

import {getData} from '../../Firebase';

function Home(){

  const [someState, setSomeState] = useState();

  useEffect(() => {
    getData().then(data => setSomeState(data));
  }, []);

  var cargosList = (someState != null && someState.historico_profissional != null) ? someState.historico_profissional.map(function(item){
    return  <Experience key={item.cargo}
            title={item.cargo}
            company={item.empresa}
            description={item.descricao}
            avatar={item.foto}
    />
  }) : <div></div> 

  var cursosList = (someState != null && someState.historico_academico != null) ? someState.historico_academico.map(function(item){
    return  <Experience key={item.curso}
            title={item.curso}
            company={item.instituicao}
            description={item.descricao}
            avatar={item.foto}
    />
  }) : <div></div> 

  var projetosList = (someState != null && someState.projetos != null) ? someState.projetos.map(function(item){
    return  <Experience key={item.nome}
            title={item.nome}
            company={item.instituicao}
            description={item.descricao}
            avatar={item.foto}
    />
  }) : <div></div> 
  var competencias = "";
  competencias = (someState != null && someState.competencia != null) ? someState.competencia.map(function(item){
    return " - " + item;  
  }) : ""



  return (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <Card>
          <div>
            <p><b>Resumo pessoal</b></p>
            <div style={{backgroundColor:'#726794', height:'2px'}}></div>
            <br/>
            <p>{someState == null ? "" : someState.sobre}</p>
            <br/>
            <p><b>Skills</b></p>
            <div style={{backgroundColor:'#726794', height:'2px'}}></div>
            <br/>
            <p>{competencias}</p>
            <br/>
          </div>
        </Card>
        {
          <Card>
            <h5 className="subtitle">Histórico profissional</h5>
            {cargosList}
          </Card>
          
        }
        {
          <Card>
          <h5 className="subtitle">Histórico acadêmico</h5>
          {cursosList}
        </Card>
        }
        {
          <Card>
          <h5 className="subtitle">Projetos</h5>
          {projetosList}
          </Card>
          
        }
        
    </Col>
  </Row>
  );
}


export default Home;