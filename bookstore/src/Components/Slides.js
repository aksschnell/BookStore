import React, { useEffect, useState} from "react";
import { Slide } from "react-slideshow-image";


const Slides = () => {
       
  const [books, setBooks] = useState([]);

  fetch('/books')
  .then(response => response.json())
  .then(data => setBooks(data));

  const style = {
    textAlign: 'center',
    background: 'teal',
    padding: '200px 0',
    fontSize: '30px',
    

  };

  const properties = {
    duration: 3000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    indicators: true,
    
  };

  return (
<>


    <div>
      <div>
        <Slide {...properties}>          
          
         <div style={style}>

         </div>
          <div style={style}>Second Slide</div>
          <div style={style}>Third Slide</div>
          <div style={style}>Fourth Slide</div>
          <div style={style}>Fifth Slide</div>
          <div style={style}>sixth Slide</div>
          <div style={style}>Seventh Slide</div>
          <div style={style}>Eight Slide</div>
        </Slide>
      </div>
    </div>

    </>
  );
  
};

export default Slides;
