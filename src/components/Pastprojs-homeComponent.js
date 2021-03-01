
import React,{useState, useEffect} from 'react';
import '../css/Pastprojs-homeComponent.css';
import bl1 from "../assets/images/carousel/bl1.jpg"
import bl2 from "../assets/images/carousel/bl2.jpg"
import bl3 from "../assets/images/carousel/bl3.jpg"
import bl4 from "../assets/images/carousel/bl4.jpg"
import bl5 from "../assets/images/carousel/bl5.jpg"
// import bl6 from "../assets/images/carousel/bl6.jpg"
// import bl7 from "../assets/images/carousel/bl7.jpg"
// import bl8 from "../assets/images/carousel/bl8.jpg"


const items = [
    {
      src: bl1,
      altText: 'Shafil Maheen',
      caption: 'IISC Bangalore',
      text: 'By Tensors, I was able to identify the chinks in my JEE preparation, literally. Tensors is so balanced inspite of being very detailed, that I got the true feel of writing the JEE exams. It developed my confidence and kept the tempo going in the last stages of preparation.  '    },
    {
      src: bl2,
      altText: 'Anand George',
      caption: 'IIT Madras',
      text: 'There has been a lot of hype built up around IIT JEE, particularly that it is something only extraordinary and brilliant people can qualify, but out of my experience, I can assure you that there is little truth in the statement.  '    },
    {
      src: bl3,
      altText: 'Denin Jose',
      caption: 'IIT Madras',
      text: 'The Tensors exam played a vital part in my JEE preparation. It enabled me to estimate my potential and therefore helped me know my limits and push them. It gave me an insight as to what topics I was weak in, and to mend my ways to focus more on my weakness.  '
    },
    {
      src: bl4,
      altText: 'Aghin Shah Alin',
      caption: 'IIT Madras',
      text: 'I used to be an average student, that was when I got introduced to tensors through my friends. It has been a great experience facing the questions, testing the analytical and practical applications simultaneously.  '
    },
    {
      src: bl5,
      altText: 'Leon Jose',
      caption: 'IIT Madras',
      text: 'Believe me when I say that Tensors is the best mock exam for JEE aspirants. It gives us a clear cut explanation about how the original exam would be. Through the Tensors exam I wasable to judge what would be my stand amoungst others in the state in jee exams.  '    },
//     {
//       src: bl6,
//       altText: 'Amal Mathew',
//       caption: 'IIT Bombay',
//       text: 'When you take a mock test you expect it to live up to the standards of the original. Tensors, probably because it was made by IITians with an intent to kill, broke that standard. Solving such a paper boosted my confidence due to the simple fact that IIT JEE was going to be easier.  '    },
//     {
//       src: bl7,
//       altText: 'Abhirami Elizbeth Prathap',
//       caption: 'IIT Madras',
//       text: 'Tensors is undoubtedly the best mock test available for JEE aspirants, hands down! The test helped me to identify the gaps in my preparation and start rectifying them. Tensors pointed out my weak topics while helping me understand the true benefit of efficient time management.  '
// },
//     {
//       src: bl8,
//       altText: 'Mohammed Irfan Thayyil',
//       caption: 'IIT Madras',
//       text: 'Tensors is modelled to encourage a more conceptual analysis of each problem. This helped me tremendously as I was finding a shortage of these problems. The test also introduced me to my peers who gave me tips on attempting certain types of questions.  '   
//      },
  ];

const Pastprojshome = (props) =>{



  const [Index1, setIndex1] = useState(2);
  const [Index2, setIndex2] = useState(3);
  const [Index3, setIndex3] = useState(4);
  const [Index4, setIndex4] = useState(0);
  const [Index5, setIndex5] = useState(1);
  const [Rotate, setRotate] = useState(false);
  const [Rdirection, setRdirection] = useState(true);


  const next = () => {
    setRotate("palette rotateleft");
    setRdirection(false);
  }

  const prev = () => {
    setRotate("palette rotateright");
    setRdirection(true);
  }


  const onAnimationEnd = () => {
    setRotate( false );
if (Rdirection){
  setIndex1(Index1 === 0 ? items.length-1 : Index1 - 1);
  setIndex2(Index2 === 0 ? items.length-1 : Index2 - 1);
  setIndex3(Index3 === 0 ? items.length-1 : Index3 - 1);
  setIndex4(Index4 === 0 ? items.length-1 : Index4 - 1);
  setIndex5(Index5 === 0 ? items.length-1 : Index5 - 1);
}

else{
  setIndex1(Index1 === items.length-1  ? 0 : Index1 + 1);
  setIndex2(Index2 === items.length-1  ? 0 : Index2 + 1);
  setIndex3(Index3 === items.length-1  ? 0 : Index3 + 1);
  setIndex4(Index4 === items.length-1  ? 0 : Index4 + 1);
  setIndex5(Index5 === items.length-1  ? 0 : Index5 + 1);
}
  };


      let c1=items[Index1]
      let c2=items[Index2]
      let c3=items[Index3]
      let c4=items[Index4]
      let c5=items[Index5]

      const handleScroll = () => {
        const curpos = window.scrollY;
        const h1 = document.getElementById('home').clientHeight;
        const h2 = document.getElementById('aboutus').clientHeight;
        const h3 = document.getElementById('mainproj1').clientHeight;
        const h4 = document.getElementById('pastprojs').clientHeight;
        const op = ((curpos - h1 - h2 ) / (h4));

        console.log(curpos - h1 - h2);
        console.log(h4);
        console.log(op);
        

        if (curpos < (h1 + h2 + h3 - h4)){
          document.getElementById("mainproj1").style.position = "relative";
          document.getElementById("mainproj1").style.zIndex = 0;
          //document.getElementById("mainproj1dummy").style.height = 0;
          document.getElementById("opacitybg").style.display="none";
        }
        else{
          console.log("reached");
          document.getElementById("mainproj1").style.position = "fixed";
          document.getElementById("mainproj1").style.zIndex = 1;
          document.getElementById("mainproj1").style.bottom = 0;
         // document.getElementById("mainproj1dummy").style.height =`${h3}px`;
          document.getElementById("opacitybg").style.display="block";
          document.getElementById("opacitybg").style.opacity=op;
        }

      };
      
      useEffect(() => {
          window.addEventListener('scroll', handleScroll, { passive: true });
      
          return () => {
              window.removeEventListener('scroll', handleScroll);
          };
      }, []);

  return (
    <React.Fragment>
    <div className="row pastprojrow" id="pastprojs">
    <div className="col h-100">
    <div className="circle1"></div>
    <div className="circle2"></div>
    <div className="circle3"></div>
    <div className="circle4"></div>

    <div className="nextbtn" onClick={next}><i class="fa fa-arrow-circle-right"></i></div>
    <div className="prevbtn" onClick={prev}><i class="fa fa-arrow-circle-left"></i></div>

    <div className="paletteouter">
    <div className={Rotate ? Rotate : "palette"} onAnimationEnd={onAnimationEnd} >
    <div className="color1">
    <div className="innerdiv" style={{backgroundImage:`url(${c5.src})`, opacity:.5}}>
    <h3 style={{ opacity:.5}}>{c5.altText}</h3>
    <p style={{ opacity:.5}}>{c5.text}</p>
    <h5 style={{ opacity:.5}}>{c5.caption}</h5>
    </div>
    </div>
    <div className="color2">
    <div className="innerdiv" style={{backgroundImage:`url(${c1.src})`, opacity:1}}>
    <h3 style={{ opacity:1}}>{c1.altText}</h3>
    <p style={{ opacity:1}}>{c1.text}</p>
    <h5 style={{ opacity:1}}>{c1.caption}</h5>
    </div>
    </div>
    <div className="color3">
    <div className="innerdiv" style={{backgroundImage:`url(${c3.src})`, opacity:.5}}>
    <h3 style={{ opacity:.5}}>{c3.altText}</h3>
    <p style={{ opacity:.5}}>{c3.text}</p>
    <h5 style={{ opacity:.5}}>{c3.caption}</h5>
    </div>
    </div>
    <div className="color4">
    <div className="innerdiv" style={{backgroundImage:`url(${c2.src})`, opacity:.5}}>
    <h3 style={{ opacity:.5}}>{c2.altText}</h3>
    <p style={{ opacity:.5}}>{c2.text}</p>
    <h5 style={{ opacity:.5}}>{c2.caption}</h5>
    </div>
    </div>
    <div className="color5">
    <div className="innerdiv" style={{backgroundImage:`url(${c4.src})`, opacity:.5}}>
    <h3 style={{ opacity:.5}}>{c4.altText}</h3>
    <p style={{ opacity:.5}}>{c4.text}</p>
    <h5 style={{ opacity:.5}}>{c4.caption}</h5>
    </div>
    </div>
    </div>
    </div>

    </div>
    </div>
    </React.Fragment>
  )

}
export default Pastprojshome;