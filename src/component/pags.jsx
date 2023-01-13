import React from 'react';
import '../styles/pags.css'

function Pags(props){

    return(
        <form className='form_btn'>
            
            <button onClick={props.pagant} className='btn'>🡨</button>
            <button onClick={props.pagsig} className='btn'>🡪</button>
        </form>
    )
}

export default Pags;