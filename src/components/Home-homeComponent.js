import React,{useState, useEffect} from 'react';
import tensors from "../assets/images/tensors.png";
import '../css/Home-homeComponent.css';
import bgvideo from "../assets/bgvideo.mp4";


const Homehome = (props) => {

  const [display, setdisplay] = useState("block");
  const [active, setactive] = useState(false);
  const [currentDiv, setcurrentDiv] = useState("home");
  const [opacityT, setopacityT] = useState('1');
  const [circleAnimation, setcircleAnimation] = useState('greenoverlay1');

         const scrollToAbout = () => {
         //  setcircleAnimation('greenoverlay1 circleIn')
              window.scrollTo({
                  top:document.getElementById('aboutus').offsetTop,
                 // behavior: 'smooth',
              })
          }

        const scrollToHome = () => {
         // setcircleAnimation('greenoverlay1 circleOut')
            window.scrollTo({
                top:document.getElementById('home').offsetTop,
               // behavior: 'smooth',
            })
        }

          const toggleClass = () => {
                  setactive(!active)
              };


        const listenToScroll = () => {
          let currentScrollPos = window.pageYOffset;
          let maxScroll =  window.innerHeight;
                      console.log(currentScrollPos)
                      console.log(maxScroll)
                      console.log(currentDiv)
                      if(currentScrollPos + 5> maxScroll){
                        document.getElementById("navbar").style.backgroundColor="#9cff62";
                        setcurrentDiv("about");                            
                      }
                      else if(currentScrollPos == 0){
                        document.getElementById("navbar").style.backgroundColor="transparent";
                        setopacityT('1');                          
                      }
                      else if (currentScrollPos > 20 && currentScrollPos < maxScroll && currentDiv == "home") {
                        //scrollToAbout();   
                        setopacityT('0');       
                      } 
                      if (currentScrollPos < maxScroll && currentDiv == "about") {
                        //scrollToHome();   
                        setopacityT('1');         
                      }
                      // if (currentScrollPos < 20){
                      //   setcurrentDiv("home"); 
                      // } 
                     
                    }

                    useEffect(() => {
                      window.addEventListener('scroll', listenToScroll, { passive: true });
                      return () => {
                          window.removeEventListener('scroll', listenToScroll);
                      };

                  }, []);
 
 
        return(

          <React.Fragment>
          <div className={circleAnimation} id="go1" style={{ display: `${display}`}}></div>
            <div className="row darkoverlay" id="home">
            <video autoPlay muted loop id="myVideo">
            <source src={bgvideo} type="video/mp4" />
          </video>
            <div className="col tensors text-center" style={{ opacity: `${opacityT}`}}>
            <img src={tensors} className="img-fluid"/>
            </div>

            <div id="circularMenu" className={active ? 'circular-menu active': 'circular-menu'} style={{ opacity: `${opacityT}`}}>

            <a className="floating-btn" onClick={toggleClass}>
              <i class="fa fa-plus"></i>
            </a>
          
            <menu className="items-wrapper">
              <a href="https://www.facebook.com/tensorsofficial" className="menu-item fa fa-facebook"></a>
              <a href="https://www.linkedin.com/company/53201198" className="menu-item fa fa-linkedin"></a>
              <a href="https://www.instagram.com/tensors_official/" className="menu-item fa fa-instagram"></a>
              <a href="mailto:tensorsofficial@gmail.com" className="menu-item fa fa-envelope"></a>
            </menu>
          
          </div>

          <div className="downbtn"></div>

            </div>
            </React.Fragment>

        )

}
export default Homehome;