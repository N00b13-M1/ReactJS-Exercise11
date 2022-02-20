import React from 'react';

export default function InputClick() {
    let changeBg = (e) => {
        e.target.style.backgroundColor = 'green'
        e.target.style.color = 'white'
    };

    let bgBack = (e) => {
        e.target.style.backgroundColor = ''
        e.target.style.color = ''
    };

    return(
        <div>
            <h1>Exo 4</h1>
            <h3>Change Bg</h3>
            <input onFocus={changeBg} onBlur={bgBack} type="text"/>
        </div>
    )
}

