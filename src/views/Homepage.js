import React,{Component} from 'react';
import Top from '../components/NavComponent';
import Homehome from '../components/Home-homeComponent';
import Abouthome from '../components/About-homeComponent';
import Contacthome from '../components/ContactComponent';
import Mainproj1home from '../components/Mainproj1-homeComponent';
import Pastprojshome from '../components/Pastprojs-homeComponent';
class Home extends Component{
    render(){
        return(
            <React.Fragment>
            <Top />
            
            <Homehome />
            
            <Abouthome />
            
            <Mainproj1home />
            
            <Pastprojshome />
            
            <Contacthome />

            </React.Fragment>
        );
    }
}

export default Home;