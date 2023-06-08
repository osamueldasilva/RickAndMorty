import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [search, setSearch] = useState("")

  
  const [name, setName] = useState("Aguardando....")
  const [species, setSpecies] = useState("")
  const [image, setImage] = useState("")
  const [location, setLocation] = useState("")
  const [gender, setGender] = useState("")


  const handleSearch = () => {
    axios.get(`https://rickandmortyapi.com/api/character/?name=${search}`)
      .then(res => {
        setName(res.data.results[0].name);
        setSpecies(res.data.results[0].species);
        setGender(res.data.results[0].gender)
        setImage(res.data.results[0].image);
        setLocation(res.data.results[0].location.name);
      });
  };
  
  return (
    <>

      <h1>Rick and Morty</h1>
        <div className="cards">
          <div className="card">
            <div className='image'>
            <img src={image} alt="Imagem 1" />
            </div>
            <div className='information'>
              <h2>{name}</h2>

              <ul>
                <li><strong>Species:</strong> {species}</li>
                <li><strong>Gender:</strong> {gender}</li>
              </ul>

              <p>Última localização:</p>
              <span>{location}</span>

              {/* <p>Visto pela primeira vez em:</p>
              <span>{episode}</span> */}
            </div> 
          </div>

           <input 
            type="text" 
            placeholder='Digite o nome do persongem..'
            onChange={(e) => setSearch(e.target.value)}
          />
           <button onClick={handleSearch}>Buscar</button>
        </div>
       
    </>
  )
}

export default App
