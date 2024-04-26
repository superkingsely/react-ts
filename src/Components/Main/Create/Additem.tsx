import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Appstate } from '../../../App' 

const Additem = (props:Appstate) => {
    const inputRef=useRef(null);
    // const handleRef=()=>{
    //     // inputRef.current.focus();
    //     if(inputRef.current){
    //         console.log(' working')
    //         const ref:any=inputRef.current
    //         ref.focus();
    //     }else{
    //         console.log('ref not working')
    //     }
    // }
  return (
    <form onSubmit={(e:any)=>{props.handlesubmit(e)}}>
        <input 
        ref={inputRef}
        type="text" 
        placeholder='Add item here' 
        value={props.newitem}
        onChange={(e:any)=>{props.setNewitem(e.target.value)}}
        />
        <button
        // onClick={handleRef}
        >
            <FaPlus/>
        </button>
    </form>
  )
}

export default Additem