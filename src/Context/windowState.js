import WindowContext from './WindowContext';
import { useState } from 'react';

const WindowState = (props) => {
    const [currWindow, setcurrWindow] = useState("");
    const [show, setShow] = useState("hide");
    return (
        <WindowContext.Provider value={{currWindow, setcurrWindow, show, setShow }}>
          {props.children}
        </WindowContext.Provider>
      );
}

export default WindowState;
