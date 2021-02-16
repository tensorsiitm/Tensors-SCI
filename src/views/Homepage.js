import React,{Component} from 'react';
import Top from '../components/NavComponent';
import Homehome from '../components/Home-homeComponent';
import Abouthome from '../components/About-homeComponent';
import Contact from '../components/ContactComponent';
class Home extends Component{
    render(){
        return(
            <React.Fragment>
            <Top />
            <Homehome />
            <Abouthome />
            <Contact />
            </React.Fragment>
        );
    }
}

export default Home;