import React from 'react'
import { Appstate } from '../../../App'

const Search = (props:Appstate) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
        <input 
        type="text" 
        placeholder='Search'
        value={props.search} 
        onChange={(e)=>props.setSearch(e.target.value)}
        />
    </form>
  )
}

export default Search