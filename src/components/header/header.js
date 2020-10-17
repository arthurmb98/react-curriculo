// Importantando o React
import React from "react";
// Importando os components necessárias da lib react-materialize
import { Navbar, NavItem, Row} from 'react-materialize';
// Importando o Component NavLink da nossa lib de rotas
import { NavLink } from 'react-router-dom'
import { Col } from 'react-materialize';
import { HeadStyle } from "../styles";

import uva_avatar from '../../images/uvas.png';


const Header = () => (
  <Row>  
    <Navbar style={HeadStyle}>
    <li>
        <img style={{width:'120px'}} src={uva_avatar} className="circle responsive-img" />
      </li>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="contact">Contato</NavLink></li>
    </Navbar>
  </Row>
);


export default Header;