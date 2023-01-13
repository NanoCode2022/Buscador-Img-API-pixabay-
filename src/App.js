import './App.css';
import React, {useState,useEffect} from 'react';
// import components
import Major from './component/major';
import Search from './component/searchs';
import Pags from './component/pags'


function App() {
 const [termino,setTermino] = useState('');
 const [article,setArticle] = useState([]);
 const [pagina,setPagina] = useState(1)

  const sigPag = (e)=>{
    e.preventDefault();
    let suma = pagina + 1;
    setPagina(suma);
    console.log(pagina);
  }
  const antPag = (e)=>{
    e.preventDefault()
    if(pagina === 1)return null;
    let resta = pagina - 1;
    setPagina(resta);
    console.log(pagina);
  }
  const consultApi = async ()=>{
    let url = `https://pixabay.com/api/?key=20085728-a043704e006e1dfbff7de1a38&q=${termino}&page=${pagina}&per_page=30`;
    const resp = await fetch(url)
    const data = await resp.json()
    setArticle(data.hits)
  }
  const dataSearch = (termino)=>{
    setTermino(termino)
  }
  useEffect(()=>{
    consultApi()
  })

  return (
    <div className="App">
      <Search
        dataSearch = {dataSearch}
      />
      <div className='container_major'>
        <Major
          articles={article}
        />
      </div>
      <Pags
        pagsig={sigPag}
        pagant={antPag}
      />
    </div>
  );
}

export default App;
