// import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure this import is present



export default function About(props) {
  // let[btn,setbtn]=useState("enable light mode")

  // const [myStyle, setmyStyle] = useState({
  //   color: "cyan",
  //   backgroundColor: "black"
  // }
  // )
  // const mode = () => {
  //   if (myStyle.color === "cyan") {
  //     setmyStyle({
  //       backgroundColor: "white",
  //       color: "black",
  //     })
  //     setbtn("enable dark mode")
  //   }
  //   else {
  //     setmyStyle({
  //       backgroundColor: "black",
  //       color: "cyan"
  //     })
  //     setbtn("enable light mode")

  //   }
  // }


  return (
    <div className="container" style={{
            backgroundColor: props.mode === 'dark' ? 'black' : 'white',
            color: props.mode === 'dark' ? 'cyan' : 'black'
          }}>
      <h1 className='abhi'>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{
            backgroundColor: props.mode === 'dark' ? 'black' : 'white',
            color: props.mode === 'dark' ? 'cyan' : 'black'
          }}>
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{
            backgroundColor: props.mode === 'dark' ? 'black' : 'white',
            color: props.mode === 'dark' ? 'cyan' : 'black'
          }}>
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{
            backgroundColor: props.mode === 'dark' ? 'black' : 'white',
            color: props.mode === 'dark' ? 'cyan' : 'black'
          }}>
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{
            backgroundColor: props.mode === 'dark' ? 'black' : 'white',
            color: props.mode === 'dark' ? 'cyan' : 'black'
          }}>
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{
            backgroundColor: props.mode === 'dark' ? 'black' : 'white',
            color: props.mode === 'dark' ? 'cyan' : 'black'
          }}>
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body"style={{
            backgroundColor: props.mode === 'dark' ? 'black' : 'white',
            color: props.mode === 'dark' ? 'cyan' : 'black'
          }}>
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


