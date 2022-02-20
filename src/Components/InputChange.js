import React from 'react'

export default function InputChange(props) {
    
    
    let changeTxt = (k) => {
        if (k.key === 'Enter') {
            // text = e.target.value
            props.new({text : k.target.value});
        };
        console.log(k)
    };
    return (
        <>
            <div>
                <h1>Exo2</h1>
                <h3>{props.original}</h3>
                <input onKeyPress={(k) => changeTxt (k)} />
            </div>
        </>
    )
}
