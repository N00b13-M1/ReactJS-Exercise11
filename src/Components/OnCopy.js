import React from 'react'

export default function OnCopy() {
    let copyTxt = (e) => {
        alert(e.target.value)
    };

    return(
        <div>
            <h1>Exo 3</h1>
            <h3>On copy</h3>
            <input onCopy={copyTxt} type="text"/>
        </div>
    )
}

