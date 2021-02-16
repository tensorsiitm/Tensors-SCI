import React,{Component} from 'react';
import '../css/About-homeComponent.css';

class Abouthome extends Component{
    state = {
        opacitya: '0',
    }   
    componentDidMount() {
        if (typeof window !== "undefined") {
        window.addEventListener('scroll', this.listenToScroll)
        }
      }
      
      componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
      }

      listenToScroll = () => {
      let currentScrollPos = window.pageYOffset;
      let maxScroll =  window.innerHeight;
      if(currentScrollPos+10 > maxScroll){
        this.setState({ opacitya: "1",    
                     }) 
      }
      else{
        this.setState({ opacitya: "0",    
                     }) 
      }
      }

    
    render(){
        return(
            <React.Fragment>
            <div className='row aboutbg' style={{ opacity: `${this.state.opacitya}`}}>
            <div className="col story">
            <div className="row "><h1>Our Story</h1></div>
            <div className="row">
            <p align="justify" >
            The annual Tensors mock JEE examination is the most awaited end-of-the-year JEE examination in all major coaching institutes in South India. The questions papers are designed and conducted by IITians who have demonstrated their skill in cracking the JEE. There are two three-hour-long examinations for the JEE Mains and Advanced respectively.       
            The annual Tensors mock JEE examination is the most awaited end-of-the-year JEE examination in all major coaching institutes in South India. The questions papers are designed and conducted by IITians who have demonstrated their skill in cracking the JEE. There are two three-hour-long examinations for the JEE Mains and Advanced respectively.       
            </p>
            </div>
            </div>
            <div className="col"></div>
            </div>
            </React.Fragment>
        )
    }
}
export default Abouthome;