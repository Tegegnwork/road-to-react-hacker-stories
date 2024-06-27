
import React from 'react';
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';


 function App() {
  return(
    <div>
      <h1>To do list</h1>
        
      
        
        <AddTodoForm/>
        <hr/>
         <TodoList/>
               
    </div>
  
         );
          }
   export default App;
