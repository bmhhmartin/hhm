"use client";

import { Button } from "react-bootstrap";
import { FaCirclePlay } from "react-icons/fa6";


const VideoButton =()=>{
    return (
        <>
            <Button className="videoBtn" onClick={()=>{alert("This feature is coming soon.........")}}><FaCirclePlay/></Button>
        </>
    )
}
export default VideoButton;