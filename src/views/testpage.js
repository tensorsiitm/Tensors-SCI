import React,{Component} from 'react';
import Top from '../components/NavComponent';
import Homehome from '../components/Home-homeComponent';
import Abouthome from '../components/About-homeComponent';
import Contacthome from '../components/ContactComponent';
import Mainproj1home from '../components/Mainproj1-homeComponent';
import Pastprojshome from '../components/Pastprojs-homeComponent';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import Decovhome from '../components/Decov-homeComponent';
import Tenmenthome from '../components/Tenment-homeComponent';

const SectionWipesStyled = styled.div`
  overflow: hidden;
  .panel {
    height: 100vh;
    width: 100vw;
  }
  
  .panel span {
    position: relative;
    display: block;
    overflow: visible;
  }
  
`;

const Test = () => (
  <SectionWipesStyled>
  <Top />
  <Homehome />            
  <Abouthome />
  <Tenmenthome />
    <Controller globalSceneOptions={{ triggerHook: 'onLeave'}}>
      <Scene pin>
        <div className="panel" >
        <span id="mainproj1">
        <Decovhome />
        </span>
        </div>
      </Scene>
      <Scene pin>
      <div className="panel" id="pastprojs">
      <span>
      <Pastprojshome />
      </span>
      </div>     
    </Scene>
      <Scene pin>
      <div className="panel" id="contact">
      <span>
      <Contacthome />
      </span>
      </div>
    </Scene>
    </Controller>
  </SectionWipesStyled>
);

export default Test;