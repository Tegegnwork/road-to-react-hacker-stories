
import React from 'react'

const list = [ {id: 1, title : "weak-up",item:"Shower"},
              {id:2, title: "kid",item:"reading a book"},
              {id: 3, title: "gym",item:"waking"},
              {id: 4 ,title: "entertain",item:"movie"}];


function List () {
    return(
        <div>
           <h1> To do list </h1>
           <hr/> 
            <ul>
        {list.map(function (item){
        return <li key={item.objectID}> {item.title} </li>;
        
      })}
    </ul>
        </div>
    );
            };
  
  export default List;
  