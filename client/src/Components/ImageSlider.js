import React, { useState } from 'react';
import ImageSetUp from './ImageSetUp';

function ImageSlider ({specificMovie, tries}) {
  const [picNum, setPicNum] = useState(specificMovie.tries)

  const Pic1 = () => {
    setPicNum(1)
  }

  const Pic2 = () => {
    setPicNum(2)
  }

  const Pic3 = () => {
    setPicNum(3)
  }

  const Pic4 = () => {
    setPicNum(4)
  }

  const Pic5 = () => {
    setPicNum(5)
  }

  const Pic6 = () => {
    setPicNum(6)
  }

  return (
    <div>
      { tries === 0 &&
          <div>
            <ImageSetUp picNum={picNum} tries={tries} specificMovie={specificMovie}/>
            <button onClick={Pic1}>1</button>
          </div>
      }
      { tries === 1 &&
          <div>
            <ImageSetUp picNum={picNum} tries={tries} specificMovie={specificMovie}/>
            <button onClick={Pic1}>1</button><button onClick={Pic2}>2</button>
          </div>
      
      }
      { tries === 2 &&
          <div>
            <ImageSetUp picNum={picNum} tries={tries} specificMovie={specificMovie}/>
            <button onClick={Pic1}>1</button><button onClick={Pic2}>2</button><button onClick={Pic3}>3</button>
          </div>
      
      }
      { tries === 3 &&
          <div>
            <ImageSetUp picNum={picNum} tries={tries} specificMovie={specificMovie}/>
            <button onClick={Pic1}>1</button><button onClick={Pic2}>2</button><button onClick={Pic3}>3</button><button onClick={Pic4}>4</button>
          </div>
      
      }
      { tries === 4 &&
          <div>
            <ImageSetUp picNum={picNum} tries={tries} specificMovie={specificMovie}/>
            <button onClick={Pic1}>1</button><button onClick={Pic2}>2</button><button onClick={Pic3}>3</button><button onClick={Pic4}>4</button><button onClick={Pic5}>5</button>
          </div>
      
      }
      { tries === 5 &&
          <div>
            <ImageSetUp picNum={picNum} tries={tries} specificMovie={specificMovie}/>
            <button onClick={Pic1}>1</button><button onClick={Pic2}>2</button><button onClick={Pic3}>3</button><button onClick={Pic4}>4</button><button onClick={Pic5}>5</button><button onClick={Pic6}>6</button>
          </div>
      
      }
      { tries === 6 &&
          <div>
            <ImageSetUp picNum={picNum} tries={tries} specificMovie={specificMovie}/>
            <button onClick={Pic1}>1</button><button onClick={Pic2}>2</button><button onClick={Pic3}>3</button><button onClick={Pic4}>4</button><button onClick={Pic5}>5</button><button onClick={Pic6}>6</button>
          </div>
      
      }
    </div>
  )
}

export default ImageSlider;