import React,{Component} from 'react';
import '../css/About-homeComponent.css';

class Abouthome extends Component{
    state = {
        opacitya: '1',
    }   



    
    render(){
        return(
            <div className='row aboutbg ' id="aboutus" style={{ opacity: `${this.state.opacitya}`}}>
            <div className="col-xl-5 col-12 story d-flex flex-column">
            <div className="row">
            <div className="col-10 offset-xl-2 offset-1">
            <div className="row "><h1>Our Story</h1></div>
            <div className="row">
            <p align="justify" >
            The annual Tensors mock JEE examination is the most awaited end-of-the-year JEE examination in all major coaching institutes in South India. The questions papers are designed and conducted by IITians who have demonstrated their skill in cracking the JEE. There are two three-hour-long examinations for the JEE Mains and Advanced respectively.       
            The annual Tensors mock JEE examination is the most awaited end-of-the-year JEE examination in all major coaching institutes in South India. The questions papers are designed and conducted by IITians who have demonstrated their skill in cracking the JEE. There are two three-hour-long examinations for the JEE Mains and Advanced respectively.       
            </p>
            </div>
            <div className="row d-block d-xl-none mobile-values-title"><h1>Our Values</h1></div>
            </div>
            </div>
            <div className="row pattern flex-grow-1">
            </div>
            </div>
            <div className="col-xl-6 col-12">
            <h2 className="bgtext d-none d-xl-block">OUR VALUES</h2>
            <div class="graphic-container d-none d-md-block">
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

  <div class="mobile-container d-block d-md-none">
  <div className="row">
  <div className="col-12 col-sm-6 mobile-circle-container">
  <div class="mobile-circle">
  <div class="icon">
  <i class="fa fa-users"></i>
  </div>
  </div>
  </div>
  <div className="col-8 offset-2 col-sm-5 offset-sm-0 mobile-content-container">
  <h2>Social Impact</h2>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error similique unde eius magnam, aliquam ducimus!</p>
  </div>  
  </div>
  <div className="row">
  <div className="col-12 col-sm-6 mobile-circle-container">
  <div class="mobile-circle">
  <div class="icon">
  <i class="fa fa-people-arrows"></i>
  </div>
  </div>
  </div>
  <div className="col-8 offset-2 col-sm-5 offset-sm-0 mobile-content-container">
  <h2>Networking</h2>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error similique unde eius magnam, aliquam ducimus!</p>
  </div>  
  </div>
  <div className="row">
  <div className="col-12 col-sm-6 mobile-circle-container">
  <div class="mobile-circle">
  <div class="icon">
  <i class="fa fa-chalkboard-teacher"></i>
  </div>
  </div>
  </div>
  <div className="col-8 offset-2 col-sm-5 offset-sm-0 mobile-content-container">
  <h2>Mentorship</h2>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error similique unde eius magnam, aliquam ducimus!</p>
  </div>  
  </div>
  <div className="row">
  <div className="col-12 col-sm-6 mobile-circle-container">
  <div class="mobile-circle">
  <div class="icon">
  <i class="fa fa-graduation-cap"></i>
  </div>
  </div>
  </div>
  <div className="col-8 offset-2 col-sm-5 offset-sm-0 mobile-content-container">
  <h2>Learning</h2>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error similique unde eius magnam, aliquam ducimus!</p>
  </div>  
  </div>
  <div className="row">
  <div className="col-12 col-sm-6 mobile-circle-container">
  <div class="mobile-circle">
  <div class="icon">
  <i class="fa fa-user-cog"></i>
  </div>
  </div>
  </div>
  <div className="col-8 offset-2 col-sm-5 offset-sm-0 mobile-content-container">
  <h2>Skill Development</h2>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error similique unde eius magnam, aliquam ducimus!</p>
  </div>  
  </div>
  </div>

            </div>
            
            </div>
        )
    }
}
export default Abouthome;