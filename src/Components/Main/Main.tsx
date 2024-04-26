import React from 'react'
import '../Main/Main.css'
import { FaTrashAlt } from 'react-icons/fa'
import Additem from './Create/Additem'
import { Appstate } from '../../App'
import Search from './SearchData/Search'
// export interface Appstate{
//     items:Item[],
//     handledelete:(id:any)=>void,
//     handlechecked:(id:any)=>void,
//     handledoubleclick:(id:any)=>void,
//     // state for add form
//     newitem:any,
//     setNewitem:any,
//     handlesubmit:(e:any)=>void,
//     additem:(newitem:string)=>void

// }
const Main = ({items,handlechecked,handledelete,handledoubleclick, newitem,setNewitem, handlesubmit,additem,setSearch,search}:Appstate) => {

  return (
    <main>
        <div className="groceries-app"
        style={{justifyContent:(items.length===0)?'center':'',color:(items.length===0)?'red':''}}
        >
            <Search
                search={search}
                setSearch={setSearch}

                newitem={newitem}
                setNewitem={setNewitem}
                handlesubmit={handlesubmit}
                additem={additem}

                items={items}
                handledelete={handledelete}
                handlechecked={handlechecked}
                handledoubleclick={handledoubleclick}
            />
            <Additem
                newitem={newitem}
                setNewitem={setNewitem}
                handlesubmit={handlesubmit}
                additem={additem}

                items={items}
                handledelete={handledelete}
                handlechecked={handlechecked}
                handledoubleclick={handledoubleclick}

                search={search}
                setSearch={setSearch}
            />
            {
                (items.length>0)?(
                    <ul>
                        {
                            items.map((item)=>{
                                return(
                                    <li key={item.id}>
                                        <input
                                        type="checkbox"
                                        name="" 
                                        id=""
                                        checked={item.checked}
                                        onChange={()=>{handlechecked(item.id)}}
                                        />
                                        <label
                                        onDoubleClick={()=>{handledoubleclick(item.id)}}
                                        style={{textDecoration:item.checked===true?'line-through':''}} 
                                        htmlFor=""
                                        >
                                            {item.item}
                                        </label>
                                        <FaTrashAlt 
                                        onClick={()=>{handledelete(item.id)}}
                                        />
                                    </li>
                                )
                            })
                        }
                    </ul>
                ):(
                    <p className="empty">You Have An Empty list</p>
                )

                

                
            }
        </div>
    </main>
  )
}

export default Main