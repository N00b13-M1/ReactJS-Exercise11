import React from 'react'

export default function Increment(test) {
    
    let increment = () =>{

        test.setCount({clicks: test.count +1})
        // console.log(props.count)
    }
    

    return (
        <>
            <div>
                <div>
                    <h1>Exo1</h1>
                    <p>You have clicked <span>{test.count}</span> times</p>
                </div>
                <div>
                    <button type="submit" onClick={() => increment()}>Increase</button>
                </div>
            </div>
        </>
    )
}
