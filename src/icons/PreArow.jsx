import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";

const PreArow = (props) => {
    const { className,onClick } = props;
    return (
    <div
        className={`${className} text-3xl absolute left-[3%] top-[50%] -translate-y-1/2 z-10`}
        // style={{ ...style, display: "block", background: "green" }} style,
        onClick={onClick}
    ><FaArrowLeft />
</div>
    );
}

export default PreArow