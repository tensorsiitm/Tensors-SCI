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
      if(currentScrollPos+20 > maxScroll){
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
            <div className='row aboutbg' id="aboutus" style={{ opacity: `${this.state.opacitya}`}}>
            <div className="col-5 story d-flex flex-column">
            <div className="row">
            <div className="col-10 offset-2">
            <div className="row "><h1>Our Story</h1></div>
            <div className="row">
            <p align="justify" >
            The annual Tensors mock JEE examination is the most awaited end-of-the-year JEE examination in all major coaching institutes in South India. The questions papers are designed and conducted by IITians who have demonstrated their skill in cracking the JEE. There are two three-hour-long examinations for the JEE Mains and Advanced respectively.       
            The annual Tensors mock JEE examination is the most awaited end-of-the-year JEE examination in all major coaching institutes in South India. The questions papers are designed and conducted by IITians who have demonstrated their skill in cracking the JEE. There are two three-hour-long examinations for the JEE Mains and Advanced respectively.       
            </p>
            </div>
            </div>
            </div>
            <div className="row pattern flex-grow-1">
            </div>
            </div>
            <div className="col-6">
            <h2 className="bgtext">OUR VALUES</h2>
            <div class="graphic-container">
  
  <div class="center-circles-container">
    

    <div class="single">
      <div class="circle one">
        <div class="dot"></div>
        <div class="icon">
          <i class="fa fa-users"></i>
        </div>
        <div class="content-container">
          <div class="line"></div>
          <h2>Social Impact</h2>
          <div class="content">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error similique unde eius magnam, aliquam ducimus!</p>
          </div>
        </div>
      </div>
    </div>

    <div class="double">
      <div class="circle two">
        <div class="icon">
          <i class="fa fa-people-arrows"></i>
        </div>
        <div class="content-container">
          <div class="line"></div>
          <h2>Networking</h2>
          <div class="content">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error similique unde eius magnam, aliquam ducimus!</p>
          </div>
        </div>
        </div>
      <div class="circle three">
        <div class="icon">
          <i class="fa fa-chalkboard-teacher"></i>
        </div>
        <div class="content-container">
          <div class="line"></div>
          <h2>Mentorship</h2>
          <div class="content">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error similique unde eius magnam, aliquam ducimus!</p>
          </div>
        </div>
        </div>
    </div>

    <div class="double">
      <div class="circle four">
        <div class="dot"></div>
        <div class="icon">
          <i class="fa fa-graduation-cap"></i>
        </div>
        <div class="content-container">
          <div class="line"></div>
          <h2>Learning</h2>
          <div class="content">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error similique unde eius magnam, aliquam ducimus!</p>
          </div>
        </div>
        </div>
      <div class="circle five">
        <div class="icon">
          <i class="fa fa-user-cog"></i>
        </div>
        <div class="content-container">
          <div class="line"></div>
          <h2>Skill Development</h2>
          <div class="content">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error similique unde eius magnam, aliquam ducimus!</p>
          </div>
        </div>
        </div>
    </div>

    
  </div>
  
</div>
            </div>
            
            </div>
            </React.Fragment>
        )
    }
}
export default Abouthome;