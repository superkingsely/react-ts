import React, { useState } from 'react'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
// members
export interface Item{
  id:number,
  item:string,
  checked:boolean
}
export interface Appstate{
  items:Item[],
  handledelete:(id:any)=>void,
  handlechecked:(id:any)=>void,
  handledoubleclick:(id:any)=>void,
  // state for add form
  newitem:any,
  setNewitem:any,
  handlesubmit:(e:any)=>void,
  additem:(newitem:string)=>void

  // search
  search:any,
  setSearch:any

}
const App = () => {
  const getData:any=localStorage.getItem('items')
  // Hooks
  const [items,setItems]=useState<Array<Item>>(JSON.parse(getData))
  const [newitem,setNewitem]=useState<string|any>('')
  const [search,setSearch]=useState<string|any>('')

  const theData=(data:any)=>{
    setItems(data);
    localStorage.setItem('items',JSON.stringify(data))
  }
  const handlechecked=(id:any)=>{
    const theNewData=items.map(item=>{
      if(item.id===id){
        return {...item,checked:!item.checked}
      }else{
        return item;
      }
    })
    theData(theNewData);
  }
  const handledelete=(id:any)=>{
    const theNewData=items.filter(item=>{
      return item.id!==id
    })
    theData(theNewData);


  }
  const handleadditem=(newitem:any)=>{
    const id=items.length?items[items.length-1].id+1:1
    console.log(newitem,id)
    const newobj={id,checked:false,item:newitem}
    const theNewData=[...items,newobj]
    theData(theNewData);

  }
  const handlesubmit=(e:any)=>{
    e.preventDefault();
    handleadditem(newitem);
    const value=setNewitem('')

  }

  const handledoubleclick=(id:any)=>{
    const theNewData=items.map(item=>{
      if(item.id===id){
        return {...item,checked:!item.checked}
      }else{
        return item;
      }
    })
    theData(theNewData);

  }


  return (
    <div className='app'>
      <Header/>
      <Main
      // c# pipe
        items={
          items.filter(item=>((item.item).toLocaleLowerCase()).includes(search.toLocaleLowerCase()))
        }
        handlechecked={handlechecked}
        handledelete={handledelete}
        handledoubleclick={handledoubleclick}

        newitem={newitem}
        setNewitem={setNewitem}
        handlesubmit={handlesubmit}
        additem={handleadditem}

        search={search}
        setSearch={setSearch}
      />
    </div>
  )
}

export default App