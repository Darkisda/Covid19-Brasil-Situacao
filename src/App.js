import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './global.css'
import './App.css'

import CovidForm from './components/CovidForm'
import CovidItem from './components/CovidItem'
import Footer from './components/Footer'

function App() {

  const [covid, setCovid] = useState([])
  const [state, setState] = useState([])

  useEffect( ()=> {
    async function loadCovid() {
      const response = await axios.get("https://covid19-brazil-api.now.sh/api/report/v1")

      setCovid(response.data.data)
    }

    loadCovid()
  }, [])

  function findState(name){
    const estado = () => {
      for (let i = 0; i < covid.length; i++) {
        console.log(covid[i].state)
        if(covid[i].state.toUpperCase() === name.state.toUpperCase()) {
          return covid[i]
        }
      }
    }
    setState(estado)
  }

  return (
    <div className="App">
      
      <CovidForm onSubmit={findState}/>
      
      <CovidItem state={state} />
      
      <Footer />
    </div>
  );
}

export default App;
