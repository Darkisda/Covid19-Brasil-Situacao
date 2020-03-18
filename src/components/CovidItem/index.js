import React from 'react'

function CovidItem({state}){
    return(
        <li>
            Estado: <strong>{state.state}</strong> <br/>
            UF: <p>{state.uf}</p> <br/>
            Situação: <p>{state.comments}</p>
            Numeros de Suspeitas: <p>{state.suspects}</p> <br/>
            Numeros de Casos Confirmados: <p>{state.cases}</p> <br/>
            Numeros de Casos Negados: <p>{state.refuses}</p> <br/>
            Numeros de Mortes: <p>{state.deaths}</p> <br/>
            <br/>
            Última atualização: {state.updated_at}
        </li>
    )
}

export default CovidItem