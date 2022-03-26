import React from 'react'
import arrowLeftImg from "../../assets/images/arrow-left.svg";
import arrowRightImg from "../../assets/images/arrow-right.svg";

const ArrowLeft = () => {
    return (
        <div>
            <img src={arrowLeftImg}></img>
        </div>
    );
}


const ArrowRight = () => {
    return (
        <div>
            <img src={arrowRightImg}></img>
        </div>
    );
}

export{ArrowLeft, ArrowRight}