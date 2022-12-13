import React from "react";

function ImageSetUp ({picNum, specificMovie}) {
    return (
        <div>
            { picNum === 1 && <img className="guessImage" src={specificMovie.image1} />}
            { picNum === 2 && <img className="guessImage" src={specificMovie.image2} />}
            { picNum === 3 && <img className="guessImage" src={specificMovie.image3} />}
            { picNum === 4 && <img className="guessImage" src={specificMovie.image4} />}
            { picNum === 5 && <img className="guessImage" src={specificMovie.image5} />}
            { picNum === 6 && <img className="guessImage" src={specificMovie.image6} />}
        </div>

    )
}

export default ImageSetUp