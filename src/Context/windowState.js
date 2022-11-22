import WindowContext from './WindowContext';
import { useState } from 'react';

const WindowState = (props) => {
    const [currWindow, setcurrWindow] = useState("");
    return (
        <WindowContext.Provider value={{currWindow, setcurrWindow }}>
          {props.children}
        </WindowContext.Provider>
      );
}

export default WindowState;
