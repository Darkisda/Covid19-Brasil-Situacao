import React, {useState} from 'react'

function CovidForm({ onSubmit }) {

    const [state, setState] = useState('')

    async function handleSubmit(event) {
        event.preventDefault()

        await onSubmit({
            state,
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-bloc">
                <label htmlFor="">Estado</label>
                <input 
                    type="text"
                    id="state"
                    name="state"
                    value={state}
                    onChange={event => setState(event.target.value)}
                    required
                />
            </div>


            <button type="submit" >Procurar Estado</button>
        </form>
    )

}

export default CovidForm