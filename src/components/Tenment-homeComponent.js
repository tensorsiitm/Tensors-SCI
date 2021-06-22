import React,{Component} from 'react';
import '../css/Tenment-homeComponent.css';
import a1 from "../assets/images/a1.svg";
import a2 from "../assets/images/a2.svg";
import a3 from "../assets/images/a3.svg";
import a4 from "../assets/images/a4.svg";

class Tenmenthome extends Component{

    render(){
        return(
            <div className='tenmentbg ' id="tenment">
            <div className="row">
            <div className="col-xl-6 col-12 order-2 order-xl-1 d-none d-md-block">
<div class="accordion-wrapper">
  <div class="accordion">
    <input type="radio" name="radio-a" id="check1" checked/>
    <label class="accordion-label" for="check1">Tensors Exam</label>
    <div class="accordion-content">
      <p>The annual Tensors mock JEE examination is the most awaited pre-JEE examination for all serious JEE aspirants and coaching institutes in India. The question papers are designed as well as conducted by IITians who have demonstrated their skill in cracking the JEE.
      </p>
    </div>
  </div>
  <div class="accordion">
    <input type="radio" name="radio-a" id="check2"/>
    <label class="accordion-label" for="check2">Josaa Counselling</label>
    <div class="accordion-content">
      <p>The Tensors team is passionate of helping you make the right choice regarding both your dream branch and institute. Here at Tensors, our consultant team have built the largest inter-collegiate network, so we can help you make the right choice going into a career in Engineering.
      </p>
    </div>
  </div>
  <div class="accordion">
    <input type="radio" name="radio-a" id="check3"/>
    <label class="accordion-label" for="check3">Test Series</label>
    <div class="accordion-content">
      <p>The test series will include new content each month, covering all the topics relevant to both the JEE Mains and JEE Advanced examinations. The Question papers are prepared by present IITians with deep knowledge in each subject and who have proven their ability in cracking the JEE.
      </p>
    </div>
  </div>
  <div class="accordion">
  <input type="radio" name="radio-a" id="check4" checked/>
  <label class="accordion-label" for="check4">Mentorship</label>
  <div class="accordion-content">
    <p>The Tensors mentorship programme has been designed by IITians to help you crack JEE with continuous guidance throughout the year. All the registered students will be assigned mentors who will provide doubt clearance, motivation and guidance throughout the year to help you in your studies.
    </p>
  </div>
</div>
</div>
            </div>
            <div className="col-xl-5 col-12 story d-flex flex-column order-1 order-xl-2">
            <div className="row">
            <div className="col-10 offset-xl-2 offset-1">
            <div className="row "><h1>Tensors EDU</h1></div>
            <div className="row">
            <p align="justify" >
            The annual Tensors mock JEE examination is the most awaited end-of-the-year JEE examination in all major coaching institutes in South India. The questions papers are designed and conducted by IITians who have demonstrated their skill in cracking the JEE. There are two three-hour-long examinations for the JEE Mains and Advanced respectively.       
            The annual Tensors mock JEE examination is the most awaited end-of-the-year JEE examination in all major coaching institutes in South India. The questions papers are designed and conducted by IITians who have demonstrated their skill in cracking the JEE. There are two three-hour-long examinations for the JEE Mains and Advanced respectively.       
            </p>
            <button className="visitpage"><a>Visit the page <i className="fa fa-external-link-alt"></i></a></button>
            </div>
            </div>
            </div>
            <div className="row pattern flex-grow-1">
            </div>
            </div>  
            </div>
                   
            </div>
        )
    }
}
export default Tenmenthome;