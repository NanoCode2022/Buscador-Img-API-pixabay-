import React from "react";
import '../styles/major.css'

function Major(props){

  return(

    <React.Fragment>
      {
        props.articles.map((e,index)=>{
          return <div key={e.id} className='container_article'>
            <img src={e.largeImageURL} alt={e.tags} className='img'/>
            <article className='container_info'>
              <p className='info'>Dowlands: {e.downloads}</p>
              <div className='container_link'><a href={e.largeImageURL} className='link_img'>Ver Imagen</a></div>
            </article>
          </div>
        })
      }
    </React.Fragment>
  )
}

export default Major