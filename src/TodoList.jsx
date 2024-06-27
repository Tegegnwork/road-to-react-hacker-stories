
import React from 'react'

const list = [ {id: 1, title : "weak-up",item:"Take a Shower"},
              {id:2, title: "kids",item:"reading a book"},
              {id: 3, title: "gym",item:"waking"},
              {id: 4 ,title: "entertain",item:"movie"}];


function TodoList () {
    return(
        <div>
           
           
                       
        <ul>
        {list.map(function (item){
        return <li key={item.objectID}> {item.title} </li>;
        
      })}
    </ul>
     
        </div>
    );
            }
  
  export default TodoList;
  