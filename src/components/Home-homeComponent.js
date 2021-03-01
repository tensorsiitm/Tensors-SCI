import React,{Component} from 'react';
import tensors from "../assets/images/tensors.png";
import '../css/Home-homeComponent.css';



class Homehome extends Component{


      state = {
                circlerad:1700,
                opacityt: '1',
                display:"block",
                active: false
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
                        const scrollTop = window.scrollY;
                        const h1 = document.getElementById('home').clientHeight;
                        const cr = (1.13-(scrollTop/h1))*100;
                        console.log(scrollTop/h1 + "perc")
                        console.log(cr + "rad")
                        document.getElementById("go1").style.width = `${cr}%`;
                        // minrad = 0,
                        // circlerad = Math.max(minrad, 1750 - 2.3*scrollTop);
                        // this.setState({
                        //         circlerad: circlerad
                        // });
                      let currentScrollPos = window.pageYOffset;
                      let maxScroll =  window.innerHeight;
                      if (currentScrollPos > 50 ) {
                        this.setState({ opacityt: "0"
                                     })
                      } 
                      else {
                        this.setState({ opacityt: "1"  
                                     })
                      }
                      if(currentScrollPos+20 > maxScroll){
                        this.setState({ display: "none",    
                                     }) 
                      }
                      else{
                        this.setState({ display: "block",    
                                     })
                                     document.getElementById("navbar").style.backgroundColor="none"; 
                      }
                     
                    }

                toggleClass =()=> {
                  const currentState = this.state.active;
                  this.setState({ active: !currentState });
              };
             
    render(){

        
        return(
            
            <React.Fragment>
            <div class="slideshow" style={{ display: `${this.state.display}`}}>
            <ul>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            </ul>
        </div>
            <div className="greenoverlay1" id="go1" style={{ display: `${this.state.display}`}}></div>
            <div className="row darkoverlay" id="home">
            <div className="col text-center">
            <div className="row tensors">
            <div className="col h-30" style={{ opacity: `${this.state.opacityt}`}}>
            <img src={tensors} className="img-fluid"/>
            </div>
            </div>
            </div>

            <div id="circularMenu" className={this.state.active ? 'circular-menu active': 'circular-menu'} style={{ opacity: `${this.state.opacityt}`}}>

            <a className="floating-btn" onClick={this.toggleClass}>
              <i class="fa fa-plus"></i>
            </a>
          
            <menu className="items-wrapper">
              <a href="https://www.facebook.com/tensorsofficial" className="menu-item fa fa-facebook"></a>
              <a href="https://www.linkedin.com/company/53201198" className="menu-item fa fa-linkedin"></a>
              <a href="https://www.instagram.com/tensors_official/" className="menu-item fa fa-instagram"></a>
              <a href="mailto:tensorsofficial@gmail.com" className="menu-item fa fa-envelope"></a>
            </menu>
          
          </div>

            </div>
            
            </React.Fragment>
        )
    }
}
export default Homehome;