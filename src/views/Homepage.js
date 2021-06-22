import React,{Component} from 'react';
import Top from '../components/NavComponent';
import Homehome from '../components/Home-homeComponent';
import Abouthome from '../components/About-homeComponent';
import Contacthome from '../components/ContactComponent';
import Mainproj1home from '../components/Mainproj1-homeComponent';
import Pastprojshome from '../components/Pastprojs-homeComponent';
import { Controller, Scene } from 'react-scrollmagic';
class Home extends Component{
    render(){
        return(
            <div className='homepagecontainer'>
            <Top />
            <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
            <Scene pin>
            <Homehome />
            </Scene>
            <Scene pin>
            <Abouthome />
            </Scene>
            <Scene pin>
            <Mainproj1home />            
            </Scene>
            <Scene pin>
            <Pastprojshome />
            </Scene>
            <Scene pin>
            <Contacthome />
            </Scene>
          </Controller>

            </div>
        );
    }
}

export default Home;