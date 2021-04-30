import React,{useState, useEffect} from 'react';
import tensors from "../assets/images/tensors.png";
import '../css/Home-homeComponent.css';



const Homehome = (props) => {

  const [display, setdisplay] = useState("block");
  const [active, setactive] = useState(false);
  const [currentDiv, setcurrentDiv] = useState("home");
  const [opacityT, setopacityT] = useState('1');
  const [circleAnimation, setcircleAnimation] = useState('greenoverlay1');

         const scrollToAbout = () => {
           setcircleAnimation('greenoverlay1 circleIn')
              window.scrollTo({
                //  top:document.getElementById('aboutus').offsetTop +10 ,
                  behavior: 'smooth',
              })
          }

        const scrollToHome = () => {
          setcircleAnimation('greenoverlay1 circleOut')
            window.scrollTo({
                top:document.getElementById('home').offsetTop,
                behavior: 'smooth',
            })
        }

          const toggleClass = () => {
                  setactive(!active)
              };


      // state = {
      //          // circlerad:1700,
      //           opacityt: '1',
      //           display:"block",
      //           active: false,
      //           currentDiv: "home"
      //       }
      //       componentDidMount() {
      //         if (typeof window !== "undefined") {
      //         window.addEventListener('scroll', this.listenToScroll)
      //         }
      //       }
            
      //       componentWillUnmount() {
      //         window.removeEventListener('scroll', this.listenToScroll)
      //       }



        const listenToScroll = () => {
          let currentScrollPos = window.pageYOffset;
          let maxScroll =  window.innerHeight;
                      console.log(currentScrollPos)
                      console.log(maxScroll)
                      console.log(currentDiv)
                      if (currentScrollPos > 20 && currentScrollPos < maxScroll && currentDiv == "home") {
                        scrollToAbout();   
                        setopacityT('0');       
                      } 
                      else {
                        setopacityT('1');
                      }
                      if(currentScrollPos > maxScroll){
                        setdisplay("none"); 
                        document.getElementById("navbar").style.backgroundColor="#9cff62";
                        setcurrentDiv("about");                            
                      }
                      else{
                        setdisplay("block");
                        document.getElementById("navbar").style.backgroundColor="transparent"; 
                      }
                      if (currentScrollPos < maxScroll && currentDiv == "about") {
                        scrollToHome();   
                        setopacityT('1');         
                      }
                      if (currentScrollPos < 20){
                        setcurrentDiv("home"); 
                      } 
                     
                    }
                  
      //       listenToScroll = () => {
      //                   // const scrollTop = window.scrollY;
      //                   // const h1 = document.getElementById('home').clientHeight;
      //                   // const cr = (1.13-(scrollTop/h1))*100;
      //                   // console.log(scrollTop/h1 + "perc")
      //                   // console.log(cr + "rad")
      //                   // document.getElementById("go1").style.width = `${cr}%`;
      //                   // minrad = 0,
      //                   // circlerad = Math.max(minrad, 1750 - 2.3*scrollTop);
      //                   // this.setState({
      //                   //         circlerad: circlerad
      //                   // });
      //                 let currentScrollPos = window.pageYOffset;
      //                 let maxScroll =  window.innerHeight;
      //                 if (currentScrollPos > 20 && this.state.currentDiv == "home") {
      //                   this.scrollToAbout();   
      //                   this.setState({ opacityt: "0",
      //                                   currrentDiv : "about"
      //                                })
                                  
      //                 } 
      //                 else {
      //                   this.setState({ opacityt: "1"  
      //                                })
      //                 }
      //                 if(currentScrollPos < maxScroll && this.state.currentDiv == "about"){
      //                   this.scrollToHome();
      //                   this.setState({ display: "none",
      //                                   currentDiv: "home"    
      //                                })
      //                                document.getElementById("navbar").style.backgroundColor="#9cff62" 
      //                 }
      //                 else{
      //                   this.setState({ display: "block",    
      //                                })
      //                                document.getElementById("navbar").style.backgroundColor="transparent"; 
      //                 }
                     
      //               }

      useEffect(() => {
        window.addEventListener('scroll', listenToScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', listenToScroll);
        };

    }, []);

        
        return(
            
            <React.Fragment>
            <div class="slideshow" style={{ display: `${display}`}}>
            <ul>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li> 
            <li><span></span></li>
            </ul>
            </div>
            <div className={circleAnimation} id="go1" style={{ display: `${display}`}}></div>
            <div className="row darkoverlay" id="home">
            <div className="col text-center">
            <div className="row tensors">
            <div className="col h-30" style={{ opacity: `${opacityT}`}}>
            <img src={tensors} className="img-fluid"/>
            </div>
            </div>
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