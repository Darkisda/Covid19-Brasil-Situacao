import React, {useState} from 'react'

import logo from './covid-brasil.png'

import './style.css'

function CovidForm({ onSubmit }) {

    const [state, setState] = useState([])

    async function handleSubmit(event) {
        event.preventDefault()

        await onSubmit({
            state,
        })
    }

    return (
        <div className="covid-form">
            <div className="covid-brasil">
                <img src={logo} alt="covid19-brasil"/>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-block">
                    <input 
                        type="text"
                        id="state"
                        name="state"
                        value={state}
                        placeholder="Digite o nome do Estado ou Sigla"
                        onChange={event => setState(event.target.value)}
                        required
                    />
                    <button type="submit" >Procurar Estado</button>
                </div>
            </form>
        </div>
    )

}

export default CovidForm