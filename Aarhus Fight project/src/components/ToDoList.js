import React from "react";

export default function ToDoList() {
  const [listPoints, setlistPoints] = React.useState([
    {
        text: "Valg af formand",
        isCompleted: false,
        id: 1
        
    },
    {
        text: "Valg af bestyrelse",
        isCompleted: false, 
        id: 2
    }
]  );
  const [inputText, setInputText] = React.useState('');


  const toggleListItem = (id)=>{
    const listCopy = [...listPoints].map((listPoint)=>{
        
        if (listPoint.id === id) {
            return {...listPoint, isCompleted:!listPoint.isCompleted}
        }
        return listPoint
    })
    setlistPoints(listCopy)
  }

  const addListItem = (textOfListItem)=>{
    const newList = [
        ...listPoints, 
        {
            text:textOfListItem,
            isCompleted: false,
            id: Math.floor(Math.random() * 1000)
        }

    ]    
    setlistPoints(newList)
  }


  return (
      <>
    <ul>
      {listPoints.map(listPoint => (
        
        <li onClick={()=>toggleListItem(listPoint.id)}>
       {(listPoint.isCompleted ?  <strike>{listPoint.text}</strike> : listPoint.text)} 

        </li>
      ))}
    </ul>
    <input type="text" value={inputText} onChange={(event)=>setInputText(event.target.value)}/>
    <button onClick={()=>{addListItem(inputText); setInputText('')}}>Tilføj til dagsorden</button>
    </>
  );
}
