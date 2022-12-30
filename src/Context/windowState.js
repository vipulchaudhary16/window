import WindowContext from './WindowContext';
import { useState } from 'react';

const WindowState = (props) => {
    const [currWindow, setcurrWindow] = useState("");
    const [show, setShow] = useState("hide");
    
    // const [currWindow, setcurrWindow] = useState("contact");
    // const [show, setShow] = useState("show");
    return (
        <WindowContext.Provider value={{currWindow, setcurrWindow, show, setShow }}>
          {props.children}
        </WindowContext.Provider>
      );
}

export default WindowState;
