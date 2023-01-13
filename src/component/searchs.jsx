import React from 'react';
import '../styles/search.css'
function Search(props){
    const busquedaRef = React.createRef();

    const onSubmit = (e)=>{
        e.preventDefault()
        const termino = busquedaRef.current.value;

        props.dataSearch(termino)
    }
 
    return(
        <div className='container_form' onSubmit={onSubmit}>
            <form className='form'>
                <input ref={busquedaRef} type="text" placeholder='search...' className='input_search'/>
                <input type="submit" className='input_submit' value='buscar'/>
            </form>
        </div>
    )
}

export default Search