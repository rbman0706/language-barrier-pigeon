import React from 'react';

function Textinput() {
    return(
        <div>
            <input type="text" id="input" required minLength="4" maxLength="255" placeholder="Enter Your Text Here"/>
            <button>Translate</button>
        </div>
    )
}

export default Textinput;