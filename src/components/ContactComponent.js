
import React,{ useEffect} from 'react';
import '../css/ContactComponent.css';
import {Modal} from "react-bootstrap";
import Iframe from 'react-iframe';

function SubscribeModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
      <Iframe url="https://tensors-newsletter.herokuapp.com/" width="100%" height="600px"></Iframe>
      </Modal.Body>
    </Modal>
  );
}

const Contacthome = (props) =>{

  const [modalShow, setModalShow] = React.useState(false);

      const contactHandleScroll = () => {
        const curpos = window.scrollY;
        const h1 = document.getElementById('home').clientHeight;
        const h2 = document.getElementById('aboutus').clientHeight;
        const h3 = document.getElementById('mainproj1').clientHeight;
        const h4 = document.getElementById('pastprojs').clientHeight;
        const h5 = document.getElementById('contact').clientHeight;

        if ((curpos < (h1 + h2 + h3 + h4 - h5))){
          document.getElementById("pastprojs").style.position = "relative";
          document.getElementById("pastprojs").style.zIndex = 3;
          //document.getElementById("mainproj1").style.display = "block";
          //document.getElementById("mainproj1dummy").style.height = 0;
        }
        else{
          console.log("reachednow");
          document.getElementById("pastprojs").style.position = "sticky";
          document.getElementById("pastprojs").style.zIndex = 3;
          document.getElementById("pastprojs").style.top = 0;
          document.getElementById("pastprojs").style.left = 0;
          //document.getElementById("pastprojs").style.transform = "translate(-50%,-50%)";
          //document.getElementById("mainproj1dummy").style.height =`${h4}px`;
        }

      };
      
      useEffect(() => {
          window.addEventListener('scroll', contactHandleScroll, { passive: true });
      
          return () => {
              window.removeEventListener('scroll', contactHandleScroll);
          };
      }, []);

  return (
    <div className="row contactrow" id="contact">
    <div className="col h-100">
    <div className="contactcircle1"></div>
    <div className="contcontents">
    <div className="col h-100">
    <div className="row conttitle"><h1>Get In Touch</h1></div>
    <div className="row contitems">
    <div className="col-3 offset-2">
    <h5>Call Us</h5>
            <h6>Anfas Nujum K : +91 8157925677 <br/><a href="tel:+91-8157925677">&emsp;<i className="fa fa-phone"></i></a> &emsp;<a href="https://api.whatsapp.com/send?phone=918157925677"><i className="fa fa-whatsapp"></i></a></h6>
            <h6>Faseeh Ahmed : +91 7034073143 <br/><a href="tel:+91-7034073143">&emsp;<i className="fa fa-phone"></i></a> &emsp;<a href="https://api.whatsapp.com/send?phone=917034073143"><i className="fa fa-whatsapp"></i></a></h6>
    </div>
    <div className="col-2 offset-0">
    <h5>News Letter</h5>
    <h6>Subscribe to our newsletter to get monthly updates straight to your inbox</h6>
    <button className="boxbottom"  onClick={() => setModalShow(true)}>SUBSCRIBE</button>
    <SubscribeModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
    <div className="col-3 offset-1">
    <h5>Get Social</h5>
            <div className="socic">
              <a
                className="btn"
                href="https://www.facebook.com/tensorsofficial"
              >
                <i className="fa fa-facebook" />
              </a>
              &emsp;
              <a
                className="btn"
                href="https://www.linkedin.com/company/53201198"
              >
                <i className="fa fa-linkedin" />
              </a>
              &emsp;
              <a
                className="btn"
                href="https://www.instagram.com/tensors_official/"
              >
                <i className="fa fa-instagram" />
                </a>
                &emsp;
              <a className="btn " href="mailto:tensorsofficial@gmail.com">
                <i className="fa fa-envelope-o" />
              </a>
            </div>
    </div>
    </div>
    <div className="row justify-content-center cright">
    <div className="col-12 text-center">
      <p>© Copyright 2021 Tensors</p>
    </div>
  </div>
    </div>
    </div>
    </div>
    </div>
  )

}
export default Contacthome;