import React from 'react'

import './style.css'

function CovidItem({state}){
    return(
        <div className="itens">
            <div className="itens-block">
                <p>Estado: <strong>{state.state}</strong></p>
                <p>Situação: <strong>{state.comments === "" ? "Situação Dentro do controle ou estável" : state.comments}</strong></p>
                <p>Suspeitas: <strong>{state.suspects}</strong></p>
            </div>
            <div className="itens-block">
                <p>Suspeitas Negadas: <strong>{state.refuses}</strong></p>
                <p>Casos: <strong>{state.cases}</strong></p>
                <p>Mortes: <strong>{state.deaths}</strong></p>
            </div>
        </div>
    )
}

export default CovidItem