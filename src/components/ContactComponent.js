
import React,{ useEffect} from 'react';
import '../css/ContactComponent.css';

const Contacthome = (props) =>{


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
    </div>
    </div>
  )

}
export default Contacthome;