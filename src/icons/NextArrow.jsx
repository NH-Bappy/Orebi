import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const NextArrow = (props) => {
    const { className,onClick } = props;
    return (
    <div
        className={`${className} text-3xl absolute right-[3%] top-[50%] -translate-y-1/2`}
        // style={{ ...style, display: "block", background: "red" }} style, 
        onClick={onClick}
    ><FaArrowRight /></div>
    );
}

export default NextArrow