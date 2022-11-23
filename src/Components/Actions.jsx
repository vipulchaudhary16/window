import {React, useContext} from 'react'
import { AiOutlineMinus } from "react-icons/ai";
import { BiSquareRounded } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import windowContext from "../Context/WindowContext";

export default function Actions() {
    const {setcurrWindow} = useContext(windowContext)

  return (
    <div>
      <AiOutlineMinus className="icon_nav" />
            <BiSquareRounded className="icon_nav" />
            <AiOutlineClose className="icon_nav danger" onClick={()=> setcurrWindow("")} />
    </div>
  )
}
